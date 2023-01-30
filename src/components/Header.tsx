import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

import NetflixAvatar from '@/public/netflix-avatar';
import NetflixLogo from '@/public/netflix-logo';

export default function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <NetflixLogo width={100} />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <NetflixAvatar width={48} height={48} />
        </Link>
      </div>
    </header>
  );
}
