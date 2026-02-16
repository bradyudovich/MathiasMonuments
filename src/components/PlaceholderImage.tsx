import React from "react";
import { Image as ImageIcon } from "lucide-react";

type PlaceholderImageProps = {
  aspect?: "video" | "4/3";
  className?: string;
  ariaLabel?: string;
};

export function PlaceholderImage({
  aspect = "4/3",
  className = "",
  ariaLabel = "Image placeholder",
}: PlaceholderImageProps) {
  const aspectClass = aspect === "video" ? "aspect-video" : "aspect-[4/3]";
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
