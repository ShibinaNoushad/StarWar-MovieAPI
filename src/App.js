import React from "react";

import MoviesList from "./components/MoviesList";
import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const movieFetchHandler = async () => {
    const respone = await fetch("https://swapi.dev/api/films/");

    const data = await respone.json();
    const transFormedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transFormedMovies);

  };
  return (
    <React.Fragment>
      <section>
        <button onClick={movieFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
