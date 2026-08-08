import { NextResponse } from "next/server";

/*
 * Novada Workforce lead intake. Upserts the enquiry as a GHL contact
 * (tagged) and attaches the qualification answers as a contact note so
 * the sales team sees the full picture in one place.
 *
 * Requires GHL_API_TOKEN in the environment (Vercel project settings).
 * The location ID is not a secret — it's the same Novada Tech location
 * the rest of the stack uses.
 */
const GHL_BASE = "https://services.leadconnectorhq.com";
const LOCATION_ID = "S3HR6oR4QTXOdzx9Ol4L";

interface WorkforceLead {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  agencyType: string;
  workforceSize: string;
  currentHandling: string;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let body: Partial<WorkforceLead>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const required: (keyof WorkforceLead)[] = [
    "firstName",
    "lastName",
    "email",
    "company",
    "phone",
    "agencyType",
    "workforceSize",
    "currentHandling",
  ];
  for (const key of required) {
    if (!isNonEmptyString(body[key])) {
      return NextResponse.json(
        { ok: false, error: `missing_${key}` },
        { status: 400 },
      );
    }
  }
  const lead = body as WorkforceLead;

  const token = process.env.GHL_API_TOKEN;
  if (!token) {
    // Deploy-time misconfiguration; surface it honestly so the client
    // can show the fallback contact path instead of a false success.
    console.error("workforce-lead: GHL_API_TOKEN is not configured");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
  };

  try {
    const upsertRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        firstName: lead.firstName.trim(),
        lastName: lead.lastName.trim(),
        email: lead.email.trim().toLowerCase(),
        phone: lead.phone.trim(),
        companyName: lead.company.trim(),
        source: "novada-workforce-landing",
        tags: ["novada-workforce", "workforce-assessment-request"],
      }),
    });
    if (!upsertRes.ok) {
      console.error("workforce-lead: upsert failed", upsertRes.status, await upsertRes.text());
      return NextResponse.json({ ok: false, error: "crm_error" }, { status: 502 });
    }
    const upsert = await upsertRes.json();
    const contactId: string | undefined = upsert?.contact?.id;

    if (contactId) {
      const note = [
        "Novada Workforce — After-Hours Operations Assessment request",
        `Company: ${lead.company.trim()}`,
        `Agency type: ${lead.agencyType}`,
        `Approximate active workforce: ${lead.workforceSize}`,
        `Current after-hours handling: ${lead.currentHandling}`,
      ].join("\n");
      const noteRes = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({ body: note }),
      });
      if (!noteRes.ok) {
        // Contact exists either way — log and continue rather than
        // failing the whole submission over the note.
        console.error("workforce-lead: note failed", noteRes.status, await noteRes.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("workforce-lead: unexpected error", err);
    return NextResponse.json({ ok: false, error: "unexpected" }, { status: 500 });
  }
}
