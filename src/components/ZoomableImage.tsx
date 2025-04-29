'use client';

import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

export default function ZoomableImage({ src, alt }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => setIsZoomed(!isZoomed)}>
      <img
        src={src}
        alt={alt}
        className={`transition-transform duration-500 ease-in-out w-full h-60 object-cover ${isZoomed ? 'scale-150' : 'scale-100'}`}
      />
    </div>
  );
}
