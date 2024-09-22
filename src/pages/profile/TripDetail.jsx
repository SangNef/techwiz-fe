import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTrip, maskAsCompleted } from "../../api/trip";

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTripDetail = async () => {
      try {
        const response = await getTrip(id);
        setTrip(response);
      } catch (err) {
        setError("Error fetching trip details");
      } finally {
        setLoading(false);
      }
    };

    fetchTripDetail();
  }, [id]);

  const handleMaskAsCompleted = async () => {
    try {
      await maskAsCompleted(id);
      navigate(`/user/trips`);
    } catch (error) {
      console.error("Error marking trip as completed", error);
    }
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      {trip ? (
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">{trip.name}</h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium">
              <strong>Destination:</strong> {trip.destination.name}
            </p>
            <p className="text-lg font-medium">
              <strong>Start Date:</strong> {new Date(trip.start_date).toLocaleDateString()}
            </p>
            <p className="text-lg font-medium">
              <strong>End Date:</strong> {new Date(trip.end_date).toLocaleDateString()}
            </p>
            <p className="text-lg font-medium">
              <strong>Budget:</strong> ${trip.budget}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-blue-500 mt-6">Categories</h2>
          <ul className="mt-4 space-y-4">
            {trip.categories.map((category) => (
              <li key={category.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-gray-700">
                  {category.name} (Budget: ${category.budget})
                </h3>
                <ul className="mt-2 space-y-2">
                  {category.schedules.map((schedule) => (
                    <li key={schedule.id} className="text-gray-600">
                      <p className="flex justify-between">
                        <span>
                          {schedule.title} - Day {schedule.day} at {schedule.time}
                        </span>
                        <span className="text-green-600 font-semibold">
                          Amount: ${schedule.amount}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button
              onClick={handleMaskAsCompleted}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Mark as Completed
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg">No trip details available.</p>
      )}
    </div>
  );
};

export default TripDetail;
