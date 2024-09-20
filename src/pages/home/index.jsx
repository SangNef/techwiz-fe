import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlideItem from "./SlideItem";
import { getHomeScreen } from "../../api/config";

const Home = () => {
  const [homeSections, setHomeSections] = useState([]);

  useEffect(() => {
    const fetchHomeScreen = async () => {
      try {
        const response = await getHomeScreen();
        const sections = response.map((section) => ({
          ...section,
          value: JSON.parse(section.value),
        }));
        setHomeSections(sections);
        console.log(homeSections[3].value);
      } catch (error) {
        console.error("Error fetching home screen sections:", error);
      }
    };

    fetchHomeScreen();
    document.title = "Expense Voyage";
  }, []);

  return (
    <div className="relative">
      {/* Carousel for homeSections[0] */}
      <Carousel
        navButtonsAlwaysVisible
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        indicators={false}
      >
        {homeSections.length > 0 &&
          homeSections[0].value?.banner?.map((bannerUrl, index) => (
            <SlideItem
              key={index}
              bannerUrl={bannerUrl}
              title={homeSections[0].value.title[index]}
            />
          ))}
      </Carousel>

      {/* Cards for homeSections[1] */}
      <div className="my-12 container max-w-screen-lg mx-auto">
        {homeSections.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {homeSections[1]?.value?.title.map((title, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600">
                    {homeSections[1].value.description[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* banner for homeSections[2] */}
      <div className="w-full h-[480px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <img
          src={homeSections[2]?.value?.image}
          alt="banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <p className=" text-2xl font-bold text-white text-center">
            {homeSections[2]?.value?.title}
          </p>
          <button
            className="
              mt-6 px-6 py-3 
              bg-blue-600 text-white font-semibold rounded-full 
              hover:bg-blue-700 transition duration-300 ease-in-out
              focus:outline-none focus:ring-4 focus:ring-blue-300 
              shadow-lg transform hover:scale-105
              "
          >
            Start planning
          </button>
        </div>
      </div>

      {/* Cards for homeSections[3] */}
      <div className="my-12 container max-w-screen-lg mx-auto">
        {homeSections.length > 3 && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              {homeSections[3].value.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {homeSections[3]?.value?.content.map((content, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {content}
                    </h3>
                    <p className="text-gray-600">
                      {homeSections[3].value.description[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
