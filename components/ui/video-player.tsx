"use client";

import { useRef, useState } from "react";
import type { ProjectVideo } from "@/data/projects";

export function VideoPlayer({ video, title, enableSound }: { video: ProjectVideo; title: string; enableSound: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const autoplay = video.type === "file" && video.autoplay;
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/20">
      {video.type === "youtube" ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="aspect-video w-full"
        />
      ) : (
        <>
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          muted={muted}
          autoPlay={autoplay}
          onVolumeChange={() => setMuted(videoRef.current?.muted ?? true)}
          preload={autoplay ? "metadata" : "none"}
          className="aspect-video w-full bg-black object-contain"
        />
        {autoplay && muted && (
          <button
            type="button"
            className="absolute right-3 top-3 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => {
              const element = videoRef.current;
              if (!element) return;
              element.muted = false;
              element.volume = 1;
              setMuted(false);
              void element.play().catch(() => {});
            }}
          >
            {enableSound}
          </button>
        )}
        </>
      )}
    </div>
  );
}
