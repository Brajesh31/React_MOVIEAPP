//mounting => ilk render edilme anı
//re-render => state değiştiğinde yeniden render edilme anı
//unmount => componentin dom'dan kaldırılma anı

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";

const api_key = "";
const page = 1;
const query = "batman";
const language = "tr-TR";

export default function App2() {
  const [movies, setMovies] = useState([]);
  const [watchListMovies, setWatchMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&page=${page}&language=${language}`
        );

        if (!response.ok) {
          throw new Error("Hata Oluştu");
        }
        const data = await response.json();
        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    if (searchQuery.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    getMovies();
  }, [searchQuery]);

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchMovies((movies) => movies.filter((m) => m.id !== movie.id));
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>

      <Main>
        {selectedMovie && (
          <MovieDetails
            movieObj={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveFromWatchList={handleRemoveFromWatchList}
        />

        {loading && <Loading />}
        {!loading && !error && (
          <MovieList
            movies={movies}
            onAddToList={handleAddToWatchList}
            onSelectedMovie={handleSelectedMovie}
          />
        )}
        {error && <ErrorMessage message={error} />}
      </Main>

      <Footer />
    </>
  );
}
