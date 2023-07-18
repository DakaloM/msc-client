import React from 'react';
import "./testimony.scss";
import Rating from '../rating/Rating';
import Image from '../image/Image';

const Testimony = ({message, name, extra, rating, image}) => {
  return (
    <div className='testimony'>
        <Image src={image} width={100} minHeight={100}  bRadius={"50%"}/>

        <div className="tGroup">

          <span className="name">{name}</span>
          <span className="extra">{extra}</span>
          <Rating number={rating}/>
          <p className="message">"{message}"</p>
        </div>
    </div>
  )
}

export default Testimony