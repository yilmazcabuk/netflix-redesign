import Banner from '@/components/Banner';
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

  return {
    trending,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
}

export default async function Home() {
  const movies = await getData();

  return (
    <main className="flex min-h-screen flex-col justify-center px-6 py-2">
      <Banner netflixOriginals={movies.netflixOriginals.data.results} />
    </main>
  );
}
