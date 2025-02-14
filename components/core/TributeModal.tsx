"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";

interface Tribute {
  id: number;
  name: string;
  position: string;
  image: string;
  tribute: string;
}

interface TributeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tribute?: Tribute | null;
}

export const TributeModal = ({
  isOpen,
  onClose,
  tribute,
}: TributeModalProps) => {
  const { theme } = useTheme();

  // Disable background scroll when modal is open.
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the background
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling
      document.body.style.overflow = "";
    }
    // Cleanup function to always restore overflow when unmounting
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}>
          {/* Click outside to close */}
          <div
            className='absolute inset-0'
            onClick={onClose}
            role='button'
            aria-label='Close modal'
          />

          {/* Modal content */}
          <motion.div
            className={`
              relative z-50 w-full max-w-2xl rounded-xl shadow-xl 
              bg-background text-foreground 
              ${theme === "dark" ? "dark-gradient" : "light-gradient"}
            `}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}>
            {/* Close button */}
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-4 top-4 rounded-full'
              onClick={onClose}
              aria-label='Close'>
              <X className='h-7 w-7 font-bold text-red-500' />
            </Button>

            {/* Content container */}
            <div className='max-h-[90vh] overflow-y-auto p-6 my-6'>
              {/* Image section */}
              <div className='relative h-32 w-32 aspect-square mb-3 rounded-full overflow-hidden'>
                <Image
                  src={tribute?.image || ""}
                  alt={tribute?.name || ""}
                  fill
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}>
                <h2 className='text-3xl font-serif mb-1'>{tribute?.name}</h2>
                <p className='italic text-muted-foreground mb-6'>
                  {tribute?.position}
                </p>
                <div className='prose prose-lg dark:prose-invert max-w-none'>
                  {(tribute?.tribute ?? "")
                    .split("\n")
                    .map((paragraph, index) => (
                      <p key={index} className='mb-4 last:mb-0'>
                        {paragraph}
                      </p>
                    ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
