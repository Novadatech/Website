"use client";

/*
 * Click-to-load YouTube facade.
 *
 * Renders a poster image from YouTube's image CDN and only injects the
 * real iframe, with its roughly 1MB of player script, once the visitor
 * actually asks to watch. Extracted 2026-09-02 from /meetings-3, which
 * had it, so /case-study can have it too: that grid was mounting EIGHT
 * live players on load, none of which most visitors ever play.
 *
 * Poster: hqdefault is used rather than maxresdefault because YouTube
 * does not generate maxres for every upload, and a missing maxres
 * returns a grey placeholder rather than a 404 we could detect.
 */

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoFacade({
  id,
  title,
  tone = "light",
}: {
  id: string;
  title: string;
  tone?: "light" | "dark";
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        style={{ border: "none" }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#003DDB]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        className={`absolute inset-0 transition-colors ${
          tone === "dark"
            ? "bg-[#0A0D14]/45 group-hover:bg-[#0A0D14]/25"
            : "bg-[#0A0D14]/30 group-hover:bg-[#0A0D14]/15"
        }`}
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_6px_24px_rgba(10,13,20,0.35)] transition-transform group-hover:scale-105 md:h-16 md:w-16">
          <Play className="ml-0.5 h-6 w-6 text-[#003DDB]" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
