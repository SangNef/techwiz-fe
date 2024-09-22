import React, { useEffect, useState } from "react";
import { getTripsByUser, deleteTrip } from "../../api/trip"; // Import the deleteTrip function
import { useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import CreateModal from "../trip/create";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UserTrip = () => {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [tripToDelete, setTripToDelete] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate(); // Initialize navigate

  const fetchUserTrips = async (searchTerm = "") => {
    try {
      const response = await getTripsByUser(user.id, searchTerm);
      setTrips(response);
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }
  };

  useEffect(() => {
    fetchUserTrips(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    fetchUserTrips();
  }, [user.id]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleModalClose = () => setOpenModal(false);
  const handleConfirmClose = () => setOpenConfirmModal(false);

  const handleDelete = async (tripId) => {
    try {
      await deleteTrip(tripId);
      setTrips(trips.filter(trip => trip.id !== tripId));
      handleConfirmClose();
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  const openDeleteConfirmation = (tripId) => {
    setTripToDelete(tripId);
    setOpenConfirmModal(true);
  };

  const handleViewTrip = (tripId) => {
    navigate(`/user/trip/${tripId}`);
  };

  const getStatusClass = (isCompleted) => {
    return isCompleted
      ? "text-green-600 font-semibold"
      : "text-red-600 font-semibold";
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Trips</h1>
        <button onClick={() => setOpenModal(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow">
          Add Trip
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search trips..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2"
        />
      </div>

      <Modal open={openModal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: 800,
            width: "100%",
            borderRadius: 2,
          }}
        >
          <CreateModal handleClose={handleModalClose} destination={null} />
        </Box>
      </Modal>

      <Modal open={openConfirmModal} onClose={handleConfirmClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
            width: "100%",
            borderRadius: 2,
          }}
        >
          <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this trip?</p>
          <div className="flex justify-end mt-4">
            <button onClick={handleConfirmClose} className="mr-2 text-gray-500">Cancel</button>
            <button onClick={() => handleDelete(tripToDelete)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </Box>
      </Modal>

      {trips.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">STT</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Destination</th>
                <th className="py-3 px-6 text-left">Start Date</th>
                <th className="py-3 px-6 text-left">End Date</th>
                <th className="py-3 px-6 text-left">Budget</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {trips.map((trip, index) => (
                <tr key={trip.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left">{++index}</td>
                  <td className="py-3 px-6 text-left">{trip.trip_name}</td>
                  <td className="py-3 px-6 text-left">{trip.destination_name}</td>
                  <td className="py-3 px-6 text-left">
                    {new Date(trip.start_date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {new Date(trip.end_date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6 text-left">${trip.total_budget}</td>
                  <td className={`py-3 px-6 text-left ${getStatusClass(trip.is_completed)}`}>
                    {trip.is_completed ? "Completed" : "Pending"}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button className="text-blue-500 hover:underline mr-2" onClick={() => handleViewTrip(trip.id)}>View</button>
                    <button className="text-green-500 hover:underline mr-2">Edit</button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => openDeleteConfirmation(trip.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No trips found.</p>
      )}
    </div>
  );
};

export default UserTrip;
