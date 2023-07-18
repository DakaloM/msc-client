import React from 'react';
import "./services.scss";
import { servicesList } from '../../dummyData';
import Carousel from 'react-multi-carousel';

const Services = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='services'>
        <Carousel  
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            
        >
            {servicesList.map(product =>(
                <div className='card' key={product.id}>
                    
                    
                    <div className="wrapper">
                      <div className="imgContainer">
                          <img src={product.img} 
                          alt="[digital marketing] [web development]" />
                      </div>
                      
                      <div className="info">
                          <h1 className="title">{product.title}</h1>
                          <p className="desc">{product.desc}</p>
                          <span className='button service'>Find out more</span>
                          
                          
                      </div>
                    </div>

                </div>
            ))}
            
            
        </Carousel>
    </div>
  )
}

export default Services