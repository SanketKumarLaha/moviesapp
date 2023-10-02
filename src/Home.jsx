import React from "react";
import MoviesList from "./components/MoviesList";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const searchedMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1&api_key=3738cc4272283b1eacdafae567cc7db2`
      );

      const json = await response.json();
      setSearchedResults(json?.results.slice(0, 10));
      setTyping(false);
    };

    let timeout = setTimeout(() => {
      searchedMovies();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div className="w-screen h-screen flex justify-center font-poppins bg-primary-color">
      <div className="w-2/3 h-full flex flex-col justify-between bg-red-600">
        <div className="w-full flex flex-col items-center p-5 bg-primary-color">
          <h1 className="text-4xl m-5 text-third-color">Movie Finder</h1>
          <div className="w-1/2 relative bg-yellow-600">
            <input
              type="text"
              value={searchText}
              placeholder="Search for movies..."
              onChange={(e) => {
                setSearchText(e.target.value);
                setTyping(true);
              }}
              className="w-full p-2 px-5 outline-none "
            />
          </div>
        </div>
        {searchedResults.length === 0 && searchText.length && !typing ? (
          <div
            className="h-full w-full flex items-center justify-center overflow-auto
     bg-primary-color"
          >
            <div className="w-[400px] h-[300px] flex items-center justify-center bg-slate-300">
              <h1>No results found</h1>
            </div>
          </div>
        ) : (
          <MoviesList searchedResults={searchedResults} />
        )}
      </div>
    </div>
  );
};

export default Home;
