import Banner from '@/components/Banner';
import Row from '@/components/Row';
import requests from '@/services/movie';

async function getData() {
  const [
    trending,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    requests.fetchTrending(),
    requests.fetchNetflixOriginals(),
    requests.fetchTopRated(),
    requests.fetchActionMovies(),
    requests.fetchComedyMovies(),
    requests.fetchHorrorMovies(),
    requests.fetchRomanceMovies(),
    requests.fetchDocumentaries(),
  ]);

  return [
    trending.data.results,
    netflixOriginals.data.results,
    topRated.data.results,
    actionMovies.data.results,
    comedyMovies.data.results,
    horrorMovies.data.results,
    romanceMovies.data.results,
    documentaries.data.results,
  ];
}

export default async function Home() {
  const movies = await getData();
  const [
    trending,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = movies;

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <div className="flex min-h-screen flex-col justify-center px-6 py-2">
        <Banner netflixOriginals={netflixOriginals} />

        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trending} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </div>
    </div>
  );
}
