import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCards from './carouselCards';

function GameCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const games = [{name:"abc",views:400},{name:"xyz",views:100}];

  return (
    <>
    <Carousel className="carousel_container" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <CarouselCards games={games}/>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselCards games={games}/>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselCards games={games}/>
      </Carousel.Item>
    </Carousel>
    <style>
        {`
        .carousel_container{
            background-color:#626f6f;
        }
        .carousel_image
        {
            width:100%;
        }
        `}
    </style>
    </>
  );
}

export default GameCarousel;