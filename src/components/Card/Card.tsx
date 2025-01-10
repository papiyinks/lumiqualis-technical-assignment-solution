import React from "react";

const Card = (props: { image: string; }) => {
  return (
    <div>
        <div className="rounded-md overflow-hidden">
            <img src={props.image} className="w-full h-full object-fill" alt={props.image} />
        </div>
    </div>
  )
}

export default Card;