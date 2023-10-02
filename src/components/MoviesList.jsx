import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ searchedResults }) => {
  return (
    <div
      className="h-full w-full flex flex-wrap justify-center overflow-auto
     bg-primary-color"
    >
      {searchedResults.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/movieDetails/${movie.id}`}
            className="w-[300px] min-h-[70%] max-h-[400px] flex flex-col items-center bg-third-color p-2 m-2"
          >
            <div
              className="w-full h-5/6 bg-cover bg-no-repeat bg-center bg-gray-900"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              }}
            />
            <h1 className="w-full h-1/6 flex justify-center items-center text-base text-center text-ellipsis overflow-hidden bg-transparent">
              {movie.title}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};

export default MoviesList;
