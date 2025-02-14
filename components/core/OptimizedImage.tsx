// components/core/OptimizedImage.tsx
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

export const OptimizedImage = ({ src, alt, ...props }: OptimizedImageProps) => (
  <Image
    src={src}
    alt={alt}
    placeholder='blur'
    blurDataURL='/images/placeholder.jpg'
    quality={85}
    {...props}
  />
);
