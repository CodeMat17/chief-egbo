// components/core/theme-aware-motion.tsx
"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

interface ThemeAwareMotionProps {
  children: ReactNode;
}

export const ThemeAwareMotion = ({ children }: ThemeAwareMotionProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: theme === "dark" ? "easeInOut" : "linear",
      }}>
      {children}
    </motion.div>
  );
};
