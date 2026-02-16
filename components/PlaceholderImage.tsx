import React from "react";
import { Image as ImageIcon } from "lucide-react";

type PlaceholderImageProps = {
  aspect?: "video" | "4/3";
  className?: string;
  ariaLabel?: string;
  src?: string;
  alt?: string;
};

export function PlaceholderImage({
  aspect = "4/3",
  className = "",
  ariaLabel = "Image placeholder",
  src,
  alt,
}: PlaceholderImageProps) {
  const aspectClass = aspect === "video" ? "aspect-video" : "aspect-[4/3]";
  
  // If src is provided, render an actual image
  if (src) {
    return (
      <img
        src={src}
        alt={alt || ariaLabel}
        loading="lazy"
        className={`${aspectClass} w-full h-full object-cover rounded ${className}`}
      />
    );
  }
  
  // Otherwise render placeholder
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`${aspectClass} bg-slate-900 border border-slate-800 rounded overflow-hidden flex items-center justify-center ${className}`}
    >
      <ImageIcon className="text-white/20" size={48} />
    </div>
  );
}

export default PlaceholderImage;
