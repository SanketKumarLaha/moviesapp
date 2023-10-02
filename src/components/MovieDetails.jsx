import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const searchedMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=3738cc4272283b1eacdafae567cc7db2`
      );

      const json = await response.json();
      console.log(json);
      setMovieDetail(json);
    };

    searchedMovies();
  }, [id]);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const newDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return newDate;
  };

  return (
    <div className="h-screen w-screen bg-primary-color font-poppins  flex justify-center items-center">
      <div key={movieDetail?.id} className="w-1/2 h-2/3 flex bg-slate-300">
        <div className="w-1/2 h-full p-10">
          <div className="w-full h-full overflow-auto">
            <h1 className="text-3xl mb-4 font-bold tracking-wider">
              {movieDetail?.title}
            </h1>
            <h1 className="mb-2">
              Rating:{" "}
              <span className="font-medium">{movieDetail?.vote_average}</span>
            </h1>
            <h1 className="mb-2">
              Release Date:{" "}
              <span className="font-medium">
                {formatDate(movieDetail?.release_date)}
              </span>
            </h1>
            <h1 className="">
              <span className="font-medium tracking-wide">
                <i>{movieDetail?.overview}</i>
              </span>
            </h1>
          </div>
        </div>
        <div className="w-2/3 h-full p-10 bg-third-color">
          <div
            className="w-full h-full bg-pink-400 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
