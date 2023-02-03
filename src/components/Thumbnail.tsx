import Image from 'next/image';

type Props = {
  movie: any;
};

function Thumbnail({ movie }: Props) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${
    movie.backdrop_path || movie.poster_path
  }`;

  return (
    <div className="relative aspect-video h-24 cursor-pointer transition duration-200 ease-out md:h-36 md:hover:scale-105">
      {imageSrc && (
        <Image
          src={imageSrc}
          className="aspect-video h-24 w-auto rounded-sm object-cover md:h-36 md:rounded"
          alt="thumbnail"
          width={256}
          height={256}
          priority
        />
      )}
    </div>
  );
}

export default Thumbnail;
