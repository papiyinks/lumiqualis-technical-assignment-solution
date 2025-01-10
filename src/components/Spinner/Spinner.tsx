import React from "react";

const Spinner = () => {

  return (
    <div className="absolute left-[35%] top-[11%]">
        <div className='w-8 h-8 border-b-2 rounded-full animate-spin border-white'></div>
    </div>
  )
}

export default Spinner;