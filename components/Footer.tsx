"use client";

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className='w-full bg bg-gray-950 p-4'>
      <div className='max-w-7xl text-center'>
        <p className='font-medium text-gray-200'>
          In loving memory of Chief Dennis Okeke Anih. All rights reserved.
        </p>
        <p className='text-amber-400 mt-3 text-sm'>
          This website was developed by{" "}
          <Link href='https://matthewchukwu.com.ng' className='text-amber-400'>
            Matthew.
          </Link>{' '}
          <Link href='https://matthewchukwu.com.ng' className='text-yellow-400'>
            Click to contact.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
