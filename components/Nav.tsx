import ThemeToggle from "@/components/theme/theme-toggle";
import NavSheet from "./NavSheet";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className='fixed top-0 z-50 w-full p-4 bg-gradient-to-b from-black/90 backdrop-blur-[0.5px]'>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
        <div className='text-blue-500 bg-blue-300 p-1 rounded-full'>
          <Image
            alt='logo'
            priority
            src='/logo.webp'
            width={70}
            height={70}
            className='aspect-square object-cover'
          />
        </div>
        <div className='flex items-center gap-6'>
          <ThemeToggle />
          <NavSheet />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
