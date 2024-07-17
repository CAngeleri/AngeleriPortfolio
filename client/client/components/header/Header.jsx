import React from 'react';
import "./Header.css"

const Header = ({ fullpageApi }) => {
  const navigateToSlide = (slideIndex) => {
    if (fullpageApi) {
      fullpageApi.moveTo(1, slideIndex);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li><button onClick={() => navigateToSlide(0)}>Slide 1</button></li>
          <li><button onClick={() => navigateToSlide(1)}>Slide 2</button></li>
          <li><button onClick={() => navigateToSlide(2)}>Slide 3</button></li>
          <li><button onClick={() => navigateToSlide(3)}>Slide 4</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
