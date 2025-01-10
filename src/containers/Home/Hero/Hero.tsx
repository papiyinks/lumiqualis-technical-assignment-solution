import React, { useState, useEffect } from "react";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";

import * as actions from '../../../redux-store/actions/nasaApi';
import { RootState } from "../../../index";

const Hero = () => {
  const [toggleImage, setToggleImage] = useState<boolean>(false)
  const [animation, setAnimation] = useState<boolean>(true)

  const nasaApiData = useSelector((state: RootState) => state.nasaApiData.data)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchNasaApiData())
  },[dispatch])

  let imageUrl = null;

  if (toggleImage === false) {
    imageUrl = nasaApiData?.url;
  } else {
    imageUrl = nasaApiData?.hdurl;
  }

  const handleToggleImage = () => {
    setToggleImage(!toggleImage)
    setAnimation(false)
  }

  return (
    <section>
      <div className="animate-move-sideways h-60vh overflow-hidden bg-cover bg-no-repeat bg-center bg-black relative" style={{backgroundImage: `url(${imageUrl})`}}>
        <h2 className="font-mono md:text-42px text-xl rounded text-white text-center bg-black font-bold py-4 px-2.2 w-[96%] mx-auto absolute inset-x-0 bottom-6">
          <span className="text-p-red md:text-50px">P</span>icture of the Day: { moment(nasaApiData?.date).format('dddd MMMM DD, YYYY') }
          <a className="text-2xl pl-3 cursor-pointer" href={imageUrl} target="_blank" rel="noreferrer" title={`Download NASA's image of the day - ${nasaApiData?.title}` }>
            &#8595;
          </a>
        </h2>
        <div onClick={handleToggleImage} className={'cursor-pointer flex absolute top-[50px] right-[10px] ' + (animation ? 'animate-pulse' : '')}>
          <div className="border border-solid border-black overflow-hidden h-25px w-30px rounded-l bg-black flex items-center justify-center">
            <span className="text-white text-10px font-bold">HD</span>
          </div>
          <div className={'h-25px rounded-r w-30px border border-solid border-black overflow-hidden ' + (!toggleImage ? 'bg-p-red' : 'bg-chrome-green')}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
