import Image from 'next/image';

import carousel from '@/public/carousel.jpg';

export default function Layout() {
  return (
    <div className="md:bg-transperent relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center">
      <Image
        src={carousel}
        alt="Netflix carousel"
        className="min-w-screen !hidden min-h-screen object-cover opacity-60 sm:!inline"
        priority
      />
    </div>
  );
}
