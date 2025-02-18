"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface NavSheetProps {
  links: { tag: string; href: string }[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => void;
}

const NavSheet = ({
  links,
  isOpen,
  onOpenChange,
  onLinkClick,
}: NavSheetProps) => {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Initial update.
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger>
          <Button asChild size='icon' variant='ghost'>
            <AlignLeftIcon className='text-amber-400' />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className='flex flex-col gap-4 mt-8'>
            {links.map((link, i) => {
              const isActive = link.href === currentHash;
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={(e) => {
                    onLinkClick(e, link.href);
                    setCurrentHash(link.href); // Update active hash immediately.
                    onOpenChange(false); // Close sheet after click
                  }}
                  scroll={false}
                  className={`px-4 py-2 transition-colors rounded-xl ${
                    isActive
                      ? "text-amber-600 bg-amber-700/10 dark:bg-amber-700/20"
                      : " hover:text-amber-400"
                  }`}>
                  {link.tag}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default NavSheet;
