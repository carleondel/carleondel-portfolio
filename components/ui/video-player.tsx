import type { ProjectVideo } from "@/data/projects";

export function VideoPlayer({ video, title }: { video: ProjectVideo; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/20">
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
        <video
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          muted
          preload="none"
          className="aspect-video w-full bg-black object-contain"
        />
      )}
    </div>
  );
}
