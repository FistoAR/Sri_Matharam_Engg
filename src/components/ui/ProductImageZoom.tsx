'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface ProductImageZoomProps {
  src: string;
  alt: string;
  category: string;
}

export function ProductImageZoom({ src, alt, category }: ProductImageZoomProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative h-full w-full rounded-lg  overflow-hidden  border border-slate-200  p-4 flex items-center justify-center cursor-crosshair group select-none"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-contain p-4 transition-transform duration-200 ease-out origin-center ${
          isHovered ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transformOrigin: isHovered ? `${mousePos.x}% ${mousePos.y}%` : 'center center',
        }}
      />
    </div>
  );
}
