
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
        onError={() => {
          setImgSrc('/placeholder.svg');
          setIsLoading(false);
        }}
        className={cn(
          "transition-all duration-500 ease-in-out",
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
        )}
      />
    </div>
  );
};

export default BlurImage;
