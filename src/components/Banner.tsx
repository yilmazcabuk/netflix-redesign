'use client';

import { useEffect, useState } from 'react';
import { IoInformationOutline, IoPlay } from 'react-icons/io5';
import Image from 'next/image';
import Movie = Local.Movie;

type Props = {
  netflixOriginals: Movie[];
};

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <Image
        className="absolute top-0 left-0 -z-10 h-screen w-screen"
        src={
          movie
            ? `https://image.tmdb.org/t/p/original/${
                movie?.backdrop_path || movie?.poster_path
              }`
            : ''
        }
        alt="poster"
        width={1280}
        height={720}
        priority
      />

      <h1 className="max-w-[16ch] text-2xl text-shadow-lg md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-justify text-xs text-shadow-xl md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
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
