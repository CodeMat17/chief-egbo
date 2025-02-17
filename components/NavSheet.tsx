import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
  return (
    <section className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger>
          <Button asChild size='icon' variant='ghost'>
            <AlignLeftIcon className='text-amber-600 dark:text-amber-400' />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className='flex flex-col gap-4 mt-8'>
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={(e) => {
                  onLinkClick(e, link.href);
                  onOpenChange(false); // Close sheet after click
                }}
                scroll={false}
                className='hover:text-amber-400 transition-colors px-4 py-2'>
                {link.tag}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default NavSheet;
