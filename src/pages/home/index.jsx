import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import SlideItem from "./SlideItem";
import { getHomeScreen } from "../../api/config";
import { useSelector } from "react-redux";
import { getTripsByUser } from "../../api/trip";
import { Link } from "react-router-dom";
import TripModal from "../trip/detail";

const Home = () => {
  const [homeSections, setHomeSections] = useState([]);
  const [userTrips, setUserTrips] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(0);

  const user = useSelector((state) => state.auth.user);

  const fetchHomeScreen = async () => {
    try {
      const response = await getHomeScreen();
      const sections = response.map((section) => ({
        ...section,
        value: JSON.parse(section.value),
      }));
      setHomeSections(sections);
    } catch (error) {
      console.error("Error fetching home screen sections:", error);
    }
  };

  const fetchUserTrips = async () => {
    try {
      const response = await getTripsByUser(user.id);
      setUserTrips(response);
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }
  };

  const openTripModal = (trip) => {
    setSelectedTripId(trip.id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTripId(null);
  };

  useEffect(() => {
    fetchHomeScreen();
    fetchUserTrips();
    document.title = "Expense Voyage";
  }, []);

  return (
    <div className="relative">
      <Carousel indicators={false}>
        {homeSections.length > 0 &&
          homeSections[0].value?.banner?.map((bannerUrl, index) => (
            <SlideItem
              key={index}
              bannerUrl={bannerUrl}
              title={homeSections[0].value.title[index]}
            />
          ))}
      </Carousel>

      <div className="w-full bg-blue-500">
        <div className="container max-w-screen-lg mx-auto py-12">
          {homeSections.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {homeSections[1]?.value?.title.map((title, index) => (
                <div
                  key={index}
                  className="overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {title}
                    </h3>
                    <p className="text-white">
                      {homeSections[1].value.description[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {user && userTrips.length > 0 && (
        <div className="container max-w-screen-lg mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Your Trips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {userTrips.map((trip, index) => {
              const budgetStatus = trip.total_amount / trip.total_budget >= 0.8;
              const exceededBudget = trip.total_amount >= trip.total_budget;

              return (
                <div
                  key={index}
                  className={`bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl ${
                    exceededBudget
                      ? "border border-red-500"
                      : budgetStatus
                      ? "border border-yellow-500"
                      : ""
                  }`}
                  onClick={() => openTripModal(trip)}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {trip.trip_name}{" "}
                      {trip.destination_name
                        ? `to ${trip.destination_name}`
                        : ""}
                    </h3>
                    <p className="text-gray-600">
                      Dates: {trip.start_date} to {trip.end_date}
                    </p>
                    <p className="text-gray-600">
                      Total Budget: ${trip.total_budget}
                    </p>
                    <p className="text-gray-600">
                      Total Amount Spent: ${trip.total_amount}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">Categories</h4>
                      <ul className="list-disc list-inside">
                        {trip.categories.map((category, idx) => (
                          <li key={idx}>{category}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nút "Add Trip" */}
          <div className="text-center mt-8">
            <Link
              to="/user/trips"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              View All Trips
            </Link>
            
          </div>
        </div>
      )}

      {selectedTripId ? (
        <TripModal
          open={openModal}
          handleClose={handleCloseModal}
          tripId={selectedTripId}
        />
      ) : null}

      <div className="w-full h-[480px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <img
          src={homeSections[2]?.value?.image}
          alt="banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <p className="text-2xl font-bold text-white text-center">
            {homeSections[2]?.value?.title}
          </p>
          <Link
            to="/destinations"
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transform hover:scale-105"
          >
            Start planning
          </Link>
        </div>
      </div>

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
