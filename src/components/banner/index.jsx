import React from "react";

const Banner = ({ title, content }) => {
  return (
    <div className="relative">
      <img
        src="https://thorindustries-prod.zaneray.com/cms/images/bdc33a51ef9bc01ad3b68ab07f2ff0b4ae2f8f31_sunset-pano-thor.jpg?auto=compress,format"
        alt="banner"
        className="w-full h-[480px] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className="text-7xl font-bold">{title}</h3>
        <p className="mt-8 text-xl">{content}</p>
      </div>
    </div>
  );
};

export default Banner;
