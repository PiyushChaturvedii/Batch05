import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movie/popular" element={<MovieList />} />
        <Route path="movie/top" element={<MovieList />} />
        <Route path="movie/upcoming" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
