import Image from 'next/image';
import Movie = Local.Movie;

type Props = {
  movie: Movie;
};

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="aspect-video rounded-sm object-cover md:rounded"
        alt="picture"
        width={256}
        height={256}
      />
    </div>
  );
}

export default Thumbnail;
