// components/core/skeleton.tsx
import { ComponentPropsWithoutRef } from "react";

interface SkeletonProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "circle" | "text";
}

export const Skeleton = ({
  className,
  variant = "default",
  ...props
}: SkeletonProps) => {
  const baseClasses = "animate-pulse bg-muted rounded-md";
  const variantClasses = {
    default: "",
    circle: "rounded-full",
    text: "h-4 w-full",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}
      {...props}
    />
  );
};
