import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NasaImdbMovies = () => {

  interface IntIMDBIMoviesData {
    id:  number;
    original_title: string;
    poster_path: string;
  }

  const [imdbMovies, setImdbMovies] = useState<IntIMDBIMoviesData[]>([])

  const IMDB_API = "https://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&page=1&include_adult=false";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(IMDB_API);
      const filteredData = data.results.filter((item: { poster_path: string; }) => item.poster_path !== null)
      setImdbMovies(filteredData)
    } 
      
    fetchData();
  },[])

  const images = imdbMovies?.map((movie) => (
    <li key={movie?.id} className="m-5 lg:w-20% md:w-25% w-30% p-0 flex-[0_0_auto]">
      <Link to={`/movies/${movie?.id}`}>
        <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.original_title} />
      </Link>
    </li>
  ))

  return (
    <section className="bg-black">
      <ul className="flex m-0 p-0 list-none overflow-x-auto">
        {images}
      </ul>
    </section>
  ) 
}

export default NasaImdbMovies;
