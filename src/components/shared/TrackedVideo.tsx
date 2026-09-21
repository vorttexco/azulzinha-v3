"use client";

import { pushVideoGtm } from "@/lib/analytics";

interface TrackedVideoProps {
  src: string;
  gtmTag: string;
  gtmTitle: string;
  className?: string;
}

export default function TrackedVideo({
  src,
  gtmTag,
  gtmTitle,
  className,
}: TrackedVideoProps) {
  return (
    <video
      key={src}
      src={src}
      controls
      autoPlay
      className={className}
      onPlay={() => pushVideoGtm("play", gtmTag, gtmTitle)}
      onEnded={() => pushVideoGtm("fim", gtmTag, gtmTitle)}
    />
  );
}
