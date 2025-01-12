import { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import imdbIcon from '../../../components/assets/icons/imdb.svg';
import questionMarkIcon from '../../../components/assets/icons/question-mark.svg';
import posterPathIcon from '../../../components/assets/icons/poster-path.svg';
import NasaImdbMovies from "../NasaImdbMovies";
import * as actions from'../../../redux-store/actions/imdbApi';
import { RootState } from "../../../index";


const ShowAMovie = () => {
  let { id } = useParams();

  const singleMovie = useSelector((state: RootState) => state.imdbApiData.data)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchMovieById(id))
  },[id, dispatch])


  let imdbLink = <a className="w-20px block mx-auto" href={`https://www.imdb.com/title/${singleMovie?.imdb_id}`} target="_blank" rel="noreferrer">
                    <img src={imdbIcon} alt="imdb-icon" />
                  </a>;

  let questionMark = <div className="w-20px block mx-auto">
                      <img src={questionMarkIcon} alt="#" />
                    </div>;

  return (
    <section>
      <div className="relative p-5 bg-black">
        <div className="bg-cover bg-no-repeat bg-center absolute opacity-70 w-full h-full top-0 left-0" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${singleMovie?.poster_path})`}}></div>
        <div className="p-5 bg-white text-black rounded-sm opacity-90 shadow-0xl z-10">
          <h2 className="text-center pb-5 font-bold underline text-2xl">{ !singleMovie?.original_title ? 'Unknown' : singleMovie?.original_title }</h2>
          <div>
            <h2 className="text-sm font-bold">What's the movie about?</h2>
            <p className="py-4 text-15px leading-[160%]">{ !singleMovie?.overview ? 'Unknown' : singleMovie?.overview }</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-solid border-light-grey border-collapse">
              <thead className="bg-black text-white text-xs font-normal">
                <tr>
                  <th className="py-2 px-0.5">Released</th>
                  <th className="py-2 px-0.5">Links</th>
                  <th className="py-2 px-0.5">Budget</th>
                  <th className="py-2 px-0.5">Poster</th>
                  <th className="py-2 px-0.5">Revenue</th>
                  <th className="py-2 px-0.5">Status</th>
                </tr>
              </thead>
              <tbody className="text-xs font-normal text-center">
                <tr>
                  <td className="py-2.5 px-0.5">{ moment(singleMovie?.release_date).format('l') }</td>
                  <td className="py-2.5 px-0.5">
                    { !singleMovie?.imdb_id ? questionMark : imdbLink}
                  </td>
                  <td className="py-2.5 px-0.5">
                    { !singleMovie?.budget ? questionMark : singleMovie?.budget }
                  </td>
                  <td className="py-2.5 px-0.5">
                    <a className="w-20px block mx-auto" href={`https://image.tmdb.org/t/p/original${singleMovie?.poster_path}`} target="_blank" rel="noreferrer">
                      <img src={posterPathIcon} alt="poster-path-icon" />
                    </a>
                  </td>
                  <td className="py-2.5 px-0.5">
                    { !singleMovie?.revenue ? questionMark : singleMovie?.revenue }
                  </td>
                  <td className="py-2.5 px-0.5">
                    { !singleMovie?.status ? questionMark : singleMovie?.status }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            Rating: <span>{ !singleMovie?.vote_average ? 'Unknown' : singleMovie?.vote_average }</span>
          </div>
        </div>

        <div className="text-white">{ singleMovie?.genres?.length === 0 ? 'Unknown' : singleMovie?.genres[0].name }</div>
      </div>

      <NasaImdbMovies />
    </section>
  )
}

export default ShowAMovie;
