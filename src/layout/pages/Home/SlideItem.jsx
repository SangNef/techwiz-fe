// SlideItem.js
import { Button, Paper } from "@mui/material";
import React from "react";

const SlideItem = ({ item }) => {
  return (
    <Paper className="relative">
      <img
        src={item.image}
        alt={item.description}
        className="w-full h-[700px] object-cover"
      />
      <div
        className="
          absolute inset-0 bg-gradient-to-r from-black/60 to-transparent
          w-[50%] h-full z-10
        "
      ></div>
      <div
        className="
          absolute top-1/2 left-32 transform -translate-y-1/2
          text-white
          z-20
          opacity-0 animate-fadeIn
          px-4
        "
      >
        <h2 className="text-2xl mb-4">Xin chao</h2>
        <Button variant="contained" className="bg-blue-500 hover:bg-blue-700">
          Check it out!
        </Button>
      </div>
    </Paper>
  );
};

export default SlideItem;
