import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dreamMarket1 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket1.png";
import dreamMarket2 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket2.png";
import dreamMarket3 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket3.png";
import dreamMarket4 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket4.png";
import dreamMarket5 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket5.png";
import dreamMarket6 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket6.png";
import dreamMarket7 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket7.png";
import dreamMarket8 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket8.png";
import dreamMarket9 from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarket9.png";

import "./DreamMarketCarousel.css";

const DreamMarketCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const screenshots = [
    dreamMarket1,
    dreamMarket2,
    dreamMarket3,
    dreamMarket4,
    dreamMarket5,
    dreamMarket6,
    dreamMarket7,
    dreamMarket8,
    dreamMarket9,
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {screenshots.map((screenshot, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 displayIMG"
            src={screenshot}
            alt={`Screenshot ${idx + 1}`}
          />
          <Carousel.Caption>
            <h3>Screenshot {idx + 1}</h3>
            <p>Description for screenshot {idx + 1}.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DreamMarketCarousel;
