"use client";

import ThemeToggle from "@/components/theme/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  // Since usePathname() doesn't include the hash, we use state to track the current hash.
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

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
      setCurrentHash(hash);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
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
            {links.map((link, i) => {
              const isActive = link.href === currentHash;
              return (
                <Button
                  key={i}
                  asChild
                  variant='ghost'
                  className={`transition-colors transform duration-500 rounded-xl text-white hover:text-amber-400  ${
                    isActive ? " bg-amber-700/30" : "text-white "
                  }`}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    scroll={false}>
                    {link.tag}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
