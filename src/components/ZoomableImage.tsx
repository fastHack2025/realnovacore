"use client";

import { useEffect, useRef } from "react";
import mediumZoom from "medium-zoom";

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className }: Props) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current) {
      mediumZoom(ref.current, { background: "#000", margin: 24 });
    }
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`cursor-zoom-in ${className}`}
      loading="lazy"
    />
  );
}
