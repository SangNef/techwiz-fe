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
        "
      >
        <h2 style={{ marginLeft: '40%', fontSize: '40px', marginBottom: '16px' }}>
          {item.description}
        </h2>
        <Button variant="contained" style={{ marginLeft: '40%',backgroundColor: '#3b82f6', width: '200px', height: '50px', ':hover': { backgroundColor: '#1d4ed8' } }}>
          Check it out!
        </Button>

      </div>
    </Paper>
  );
};

export default SlideItem;
