// components/core/Container.tsx
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</div>
);
