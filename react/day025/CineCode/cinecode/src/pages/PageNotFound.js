import { Link } from "react-router-dom";
import pageImage from "../assets/pagenotfound.jpg";
import { Button } from "../components";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "CineCode | Page Not Found";
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-800 font-bold my-10 dark:text-white">
            404, Page Not Found
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={pageImage} alt="page not found" />
          </div>
        </div>
        <div className="flex justify-center my-5">
          <Link to="/">
            <Button>Back to Home</Button>
            <Button>Back to popular</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
