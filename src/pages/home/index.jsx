// Home.js
import React from "react";
import Carousel from "react-material-ui-carousel";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlideItem from "./SlideItem"; // Import the SlideItem component

const items = [
  {
    image: "https://via.placeholder.com/800x400.png?text=Slide+1",
    description: "This is the first slide",
  },
  {
    image: "https://via.placeholder.com/800x400.png?text=Slide+2",
    description: "This is the second slide",
  },
  {
    image: "https://via.placeholder.com/800x400.png?text=Slide+3",
    description: "This is the third slide",
  },
];

const Home = () => {
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
    </div>
  );
};

export default Home;
