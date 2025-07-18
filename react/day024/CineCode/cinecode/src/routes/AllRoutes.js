import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <Routes>
        <Route path="" element={<MovieList apiPath="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movie/popular"
          element={<MovieList apiPath="movie/popular" />}
        />
        <Route
          path="movie/top"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route
          path="movie/upcoming"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
