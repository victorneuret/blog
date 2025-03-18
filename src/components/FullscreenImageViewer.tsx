import { cn } from "@/lib/utils";
import type React from "react";
import { Image } from "astro:assets";

import { useState, useEffect } from "react";

interface FullscreenImageViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FullscreenImageViewer({
  src,
  alt,
  className = "",
}: FullscreenImageViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullscreen]);

  // Handle clicking outside the image
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsFullscreen(false);
    }
  };

  return (
    <div className="w-full mt-4 mb-2">
      {/* Regular image that takes full width */}
      <div
        className="w-full cursor-pointer"
        onClick={() => {
          console.log("toggle");
          setIsFullscreen(true);
        }}
      >
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={cn(`w-full h-auto object-cover rounded-lg`, className)}
        />
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Close fullscreen image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
