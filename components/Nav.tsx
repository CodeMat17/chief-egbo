'use client'

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import NavSheet from "./NavSheet";
import { Button } from "./ui/button";

const links = [
  { tag: "Home", href: "#home" },
  { tag: "Readings", href: "#readings" },
  { tag: "Biography", href: "#biography" },
  { tag: "Children Tributes", href: "#children-tributes" },
  { tag: "Other Tributes", href: "#other-tributes" },
  { tag: "Condolence", href: "#condolence" },
  { tag: "Appreciation", href: "#appreciation" },
];

const Nav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    const targetId = hash.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const nav = document.querySelector("nav");
      const offset = nav?.clientHeight || 80;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState({}, "", hash);
      setIsSheetOpen(false); // Close mobile menu after navigation
    }
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.replace("#", ""));
        if (targetElement) {
          const nav = document.querySelector("nav");
          const offset = nav?.clientHeight || 80;
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition });
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <nav className='fixed top-0 z-50 w-full p-4 bg-gradient-to-b from-black/90 backdrop-blur-[0.5px]'>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
          <Image
            alt='logo'
            priority
            src='/logo.webp'
            width={70}
            height={70}
            className='aspect-square object-cover rounded-full border-4 border-amber-400'
          />
   
        <div className='flex items-center gap-6'>
          <ThemeToggle />
          <NavSheet
            links={links}
            isOpen={isSheetOpen}
            onOpenChange={setIsSheetOpen}
            onLinkClick={handleScroll}
          />
          <div className='hidden lg:flex items-center gap-2'>
            {links.map((link, i) => (
              <Button
                key={i}
                asChild
                variant='ghost'
                className='text-white hover:text-amber-400 transition-colors'>
                <Link
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  scroll={false}>
                  {link.tag}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;