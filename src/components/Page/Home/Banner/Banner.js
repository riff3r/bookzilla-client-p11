import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import silderOne from "./slider-1.jpg";
import silderTwo from "./slider-2.jpg";
import silderThee from "./slider-3.jpg";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="home-banner"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="d-block img-fluid" src={silderOne} alt="First slide" />
        <Carousel.Caption>
          <h3>Find Books for All Ages! </h3>
          <p>Choose Your Book!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block img-fluid" src={silderTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3>Books that Really Matters</h3>
          <p>Choose Your Book!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block img-fluid" src={silderThee} alt="Third slide" />

        <Carousel.Caption>
          <h3>Meet Favorite Authors</h3>
          <p>Choose Your Book!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
