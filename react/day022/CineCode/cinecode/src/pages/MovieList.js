import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4dc66d42cb314356d50633446a306b4c"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
