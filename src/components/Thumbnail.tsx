import Image from 'next/image';
import Movie = Local.Movie;

type Props = {
  movie: Movie;
};

function Thumbnail({ movie }: Props) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${
    movie.backdrop_path || movie.poster_path
  }`;

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={imageSrc}
        className="aspect-video h-auto w-auto rounded-sm object-cover md:rounded"
        alt="thumbnail"
        width={256}
        height={256}
      />
    </div>
  );
}

export default Thumbnail;
