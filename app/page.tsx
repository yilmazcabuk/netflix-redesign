import { Banner, Row } from '@/components';
import { Movies } from '@/services/movie';

export default async function Home() {
  const [
    netflixOriginals,
    popular,
    trending,
    action,
    comedy,
    horror,
    romance,
    documentary,
  ] = await Promise.all([
    Movies.netflixOriginals(),
    Movies.popular(),
    Movies.trending(),
    Movies.action(),
    Movies.comedy(),
    Movies.horror(),
    Movies.romance(),
    Movies.documentary(),
  ]);

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <div className="flex min-h-screen flex-col justify-center px-6 py-2">
        <Banner netflixOriginals={netflixOriginals} />

        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trending} />
          <Row title="Top Rated" movies={popular} />
          <Row title="Action Thrillers" movies={action} />

          <Row title="Comedies" movies={comedy} />
          <Row title="Scary Movies" movies={horror} />
          <Row title="Romance Movies" movies={romance} />
          <Row title="Documentaries" movies={documentary} />
        </section>
      </div>
    </div>
  );
}
