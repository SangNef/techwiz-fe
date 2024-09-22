import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import { getDestinations } from "../../api/destination";
import { Link } from "react-router-dom";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  const fetDestinations = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response);
      console.log(destinations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Destinations";
    fetDestinations();
  }, []);

  return (
    <div>
      <Banner title="Destinations" content="Explore Tours By Destinations" />
      <div className="container mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center mb-4">Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              to={`/destinations/${destination.id}`}
              key={destination.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <h3 className="absolute bottom-0 left-0 p-4 text-xl font-semibold text-white group-hover:hidden duration-100 ease-in-out">
                  {destination.name} - {destination.avg_amount}
                </h3>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-white">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {destination.description}
                  </p>
                </div>
              </div>
              {/* <Link
              to={`/destinations/${destination.id}`}
              key={destination.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                {destination.images && destination.images.length > 0 && (
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                )}
                <h3 className="absolute bottom-0 left-0 p-4 text-xl font-semibold text-white group-hover:hidden duration-100 ease-in-out">
                  {destination.name}
                </h3>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-white">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {destination.description}
                  </p>
                </div>
              </div>
            </Link> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
