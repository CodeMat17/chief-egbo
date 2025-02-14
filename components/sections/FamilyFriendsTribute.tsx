// components/sections/FamilyFriendsTribute.tsx
"use client";

import { motion } from "framer-motion";
import { Pagination } from "@/components/ui/pagination";
import { useTributes } from "@/hooks/useTributes";
import { Skeleton } from "@/components/core/skeleton";

// interface Tribute {
//   id: number; // Changed to number to match hook's interface
//   name: string;
//   message: string;
// }

export const FamilyFriendsTribute = () => {
  const {
    tributes,
    currentPage,
    totalPages,
    handlePageChange,
    isLoading,
    error,
  } = useTributes();

  if (error) {
    return (
      <section className='py-16 bg-muted'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 text-center text-destructive'>
          Error loading tributes:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      </section>
    );
  }

  return (
    <section className='py-16 bg-muted'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <h2 className='text-3xl font-serif mb-8 text-center text-foreground'>
          Words from Loved Ones
        </h2>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={`skeleton-${index}`}
                  className='h-32 w-full rounded-xl'
                />
              ))
            : tributes.map((tribute) => (
                <motion.div
                  key={tribute.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}>
                  <div className='bg-card p-6 rounded-xl shadow-sm transition-shadow hover:shadow-md border'>
                    <h3 className='text-lg font-semibold mb-2 text-primary'>
                      {tribute.name}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {tribute.message}
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>

        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className='mt-8'
            aria-label='Friends and family tributes pagination'
          />
        )}
      </div>
    </section>
  );
};
