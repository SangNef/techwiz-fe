import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestination } from "../../api/destination";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Modal, Box } from "@mui/material";
import CreateModal from "../trip/create";
import { getSamples } from "../../api/sample";

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await getDestination(id);
        setDestination(response);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSamples = async () => {
      try {
        const response = await getSamples(id);
        setSamples(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchDestination();
      fetchSamples();
    }
    document.title = destination?.name || "Destination Detail";
  }, [id, destination?.name]);

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container max-w-5xl mx-auto my-12">
      <div className="relative">
        <h3 className="font-bold text-3xl mb-4">{destination.name}</h3>
        {destination.images && destination.images.length > 0 ? (
          <Carousel indicators={false}>
            {destination.images.map((image) => (
              <Paper key={image.id}>
                <img
                  src={`http://localhost:8000/images/destinations/${image.image}`}
                  alt={destination.name}
                  className="w-full h-[400px] rounded-lg object-cover"
                />
              </Paper>
            ))}
          </Carousel>
        ) : (
          <p>No images available</p>
        )}
        <p className="text-lg mb-6">{destination.description}</p>
      </div>
      <div>
        <p>Would you like to add a schedule for this destination?</p>
        <Button variant="contained" onClick={handleModalOpen}>
          Add
        </Button>
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
          <CreateModal handleClose={handleModalClose} destination={destination.name} />
        </Box>
      </Modal>

      {/* Sample Itinerary Section */}
      <div className="mt-12">
        <h3 className="font-bold text-2xl mb-4">Sample Itinerary</h3>
        {samples.length > 0 ? (
          samples.map((sample) => (
            <div key={sample.id} className="mb-6">
              <h4 className="font-semibold text-xl">{sample.name}</h4>
              {sample.categories.length > 0 ? (
                sample.categories.map((category) => (
                  <div key={category.id} className="mb-4">
                    <h5 className="font-semibold text-lg">{category.name} (Budget: {category.budget})</h5>
                    <ul className="list-disc pl-5">
                      {category.schedules.map((schedule) => (
                        <li key={schedule.id}>
                          {schedule.title} - Day {schedule.day} at {schedule.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No categories available for this sample.</p>
              )}
            </div>
          ))
        ) : (
          <p>No sample itineraries available.</p>
        )}
      </div>
    </div>
  );
};

export default DestinationDetail;
