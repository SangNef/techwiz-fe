// Home.js
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import Carousel from "react-material-ui-carousel";
import SlideItem from "../Home/SlideItem";

const items = [
  {
    image: "https://i.postimg.cc/vTGvWVRJ/shutterstock-178807262-700x450.jpg",
    description: "This is the first slide",
  },
  {
    image: "https://i.postimg.cc/wT0wQ0j0/shutterstock-124333858-800x960.jpg",
    description: "This is the second slide",
  },
  {
    image: "https://i.postimg.cc/VL1hRJBL/pexels-photo-67386-700x660.jpg",
    description: "This is the third slide",
  },
];

const Slider = () => {
  return (
    <div className="relative">
      <Carousel
        navButtonsAlwaysVisible
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        indicators={false}
        classes={{
          root: "carousel-root",
          indicator: "hidden",
          indicatorActive: "hidden",
        }}
      >
        {items.map((item, index) => (
          <SlideItem key={index} item={item} />
        ))}
      </Carousel>
      <br></br>
    </div>
    
  );
  
};

export default Slider;
