import Image from "next/image";

const Direction = () => {
  return (
    <div className="px-4 py-12">
      <div className='  w-full h-48'>
        <Image
          alt='direction'
          loading='lazy'
          fill
          src='/direction.webp'
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Direction;
