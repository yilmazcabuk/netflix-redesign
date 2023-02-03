'use client';

import { useEffect, useState } from 'react';
import { IoInformationOutline, IoPlay } from 'react-icons/io5';
import { MovieResult } from 'moviedb-promise';
import Image from 'next/image';

type Props = {
  netflixOriginals: any;
};

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<MovieResult | null>(null);
  const background = movie
    ? `https://image.tmdb.org/t/p/original/${
        movie?.backdrop_path || movie?.poster_path
      }`
    : '';

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      {movie && (
        <Image
          className="absolute top-0 left-0 -z-10 h-screen w-screen object-cover"
          src={background}
          alt="poster"
          width={3840}
          height={2160}
          priority
        />
      )}

      <h1 className="max-w-[16ch] text-2xl line-clamp-2 text-shadow-lg md:text-4xl lg:text-7xl">
        {movie?.title}
      </h1>
      <p className="max-w-xs text-justify text-xs line-clamp-4 text-shadow-xl md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black" type="button">
          <IoPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton bg-gray-600/70" type="button">
          <IoInformationOutline className="h-4 w-4 text-white md:h-7 md:w-7" />
          More Info
        </button>
      </div>
    </div>
  );
}
