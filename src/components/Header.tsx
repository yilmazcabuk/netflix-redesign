'use client';

import { useEffect, useState } from 'react';
import { IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5';
import Link from 'next/link';

import NetflixAvatar from '@/public/netflix-avatar';
import NetflixLogo from '@/public/netflix-logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <NetflixLogo className="w-36" />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <IoSearchOutline className="hidden h-6 w-6 sm:inline" />
        <p className="hidden text-lg lg:inline">Kids</p>
        <IoNotificationsOutline className="h-6 w-6" />
        <Link href="/">
          <NetflixAvatar className="h-12 w-12 rounded-lg" />
        </Link>
      </div>
    </header>
  );
}
