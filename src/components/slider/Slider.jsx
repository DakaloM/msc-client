
import "./slider.scss";
import React, { useState } from 'react';
import { articleList } from '../../dummyData';
import {staff} from "../../data/data"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testimony from '../testimony/Testimony';
import User from "../user/User";
import { useStateContext } from "../../context/ContextProvider";

const Slider = ({user, data}) => {

  const {screenSize} = useStateContext()
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: user? 5: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: user? 4: 1
    },
    laptop: {
      breakpoint: { max: 1024, min: 658 },
      items: user? 2: 1
    },
    
    tablet: {
      breakpoint: { max: 658, min: 464 },
      items: user? 1: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items:  1
    }
  };

  return (
    <div className='slider' style={{
      minWidth: user && "100%", WebkitBoxShadow: user && "none",
      minHeight: user && screenSize < 768 ? "fit-content" :500, alignItems: "center",
      paddingBottom: "50px"
    }}>
        <Carousel  
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            transitionDuration={10}
            
            
            
        >
            {
              user ? 

              data.map((item, index) =>(
                <User 
                  name={item.firstname + " " + item.lastname} 
                  role={item.role} 
                  about={item.about.slice(0,100)} 
                  fbUrl={item.fbUrl} 
                  twitterUrl={item.twitterUrl} 
                  image={item.image}
                  key={item.id}
                  
                />
              ))
              
              
              :
              data.map((item) => (
                <Testimony 
                  key={item.id}
                    image={item.image}
                    rating={item.rating}
                    name={item.name}
                    extra={item.extra}
                    message={item.desc}
                />
              ))
            }
                
           
            
            
        </Carousel>
    </div>
  )
}

export default Slider