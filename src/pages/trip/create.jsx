import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createTrip } from "../../api/trip";
import { Button, TextField, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateModal = ({ handleClose, destination }) => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);

  const [tripData, setTripData] = useState({
    name: "",
    destination_id: id,
    user_id: user.id,
    start_date: "",
    end_date: "",
    budget: "",
    categories: [
      {
        name: "Travel",
        budget: "",
        type: "Travel",
        schedules: [
          {
            title: "",
            day: 1,
            hour: 0,
          },
        ],
      },
    ],
  });

  const [errors, setErrors] = useState({});
  const [budgetWarning, setBudgetWarning] = useState("");

  const handleChange = (e, categoryIndex, scheduleIndex) => {
    const { name, value } = e.target;
    const updatedData = { ...tripData };

    if (scheduleIndex !== undefined) {
      updatedData.categories[categoryIndex].schedules[scheduleIndex][name] = value;
    } else if (categoryIndex !== undefined) {
      updatedData.categories[categoryIndex][name] = value;
    } else {
      updatedData[name] = value;
    }

    setTripData(updatedData);
    setBudgetWarning(""); // Reset warning on change
  };

  const addSchedule = (categoryIndex) => {
    const newSchedule = { title: "", day: 1, hour: 0 };
    const updatedCategories = [...tripData.categories];
    updatedCategories[categoryIndex].schedules.push(newSchedule);
    setTripData({ ...tripData, categories: updatedCategories });
  };

  const addCategory = () => {
    const newCategory = {
      name: "New Category",
      budget: "",
      type: "General",
      schedules: [{ title: "", day: 1, hour: 0 }],
    };
    setTripData({ ...tripData, categories: [...tripData.categories, newCategory] });
  };

  const calculateTotalCategoryBudget = () => {
    return tripData.categories.reduce((total, category) => {
      return total + (parseFloat(category.budget) || 0);
    }, 0);
  };

  const handleCreateTrip = async () => {
    const totalCategoryBudget = calculateTotalCategoryBudget();

    if (totalCategoryBudget > parseFloat(tripData.budget)) {
      setBudgetWarning("Total budget of categories exceeds the main budget. Please adjust.");
      return;
    }

    try {
      const response = await createTrip(tripData);
      console.log(response);
      handleClose(); // Close modal after creating trip
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data.errors);
      }
      console.log(error);
    }
  };

  return (
    <form className="max-h-[600px] overflow-y-auto">
      <h1 className="text-2xl font-bold">{destination ? `Add new schedule for ${destination}` : "Add new schedule"}</h1>

      {/* Trip Name */}
      <div className="mb-4">
        <TextField
          label="Trip Name"
          name="name"
          value={tripData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          error={!!errors.name}
          helperText={errors.name?.[0]}
        />
      </div>

      {/* Start Date */}
      <div className="mb-4">
        <TextField
          label="Start Date"
          type="date"
          name="start_date"
          value={tripData.start_date}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          error={!!errors.start_date}
          helperText={errors.start_date?.[0]}
        />
      </div>

      {/* End Date */}
      <div className="mb-4">
        <TextField
          label="End Date"
          type="date"
          name="end_date"
          value={tripData.end_date}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          error={!!errors.end_date}
          helperText={errors.end_date?.[0]}
        />
      </div>

      {/* Budget */}
      <div className="mb-4">
        <TextField
          label="Budget"
          type="number"
          name="budget"
          value={tripData.budget}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          error={!!errors.budget}
          helperText={errors.budget?.[0]}
        />
      </div>

      {budgetWarning && <div className="text-red-600">{budgetWarning}</div>}

      {/* Categories and Schedules */}
      {tripData.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-6 border p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">{category.name} Category</h3>

          {/* Category Name */}
          <TextField
            label="Category Name"
            name="name"
            value={category.name}
            onChange={(e) => handleChange(e, categoryIndex)}
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors[`categories.${categoryIndex}.name`]}
            helperText={errors[`categories.${categoryIndex}.name`]?.[0]}
          />

          {/* Category Budget */}
          <TextField
            label="Category Budget"
            type="number"
            name="budget"
            value={category.budget}
            onChange={(e) => handleChange(e, categoryIndex)}
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors[`categories.${categoryIndex}.budget`]}
            helperText={errors[`categories.${categoryIndex}.budget`]?.[0]}
          />

          {/* Schedules */}
          {category.schedules.map((schedule, scheduleIndex) => (
            <div key={scheduleIndex} className="mt-4 mb-4">
              <h4 className="font-medium">Schedule {scheduleIndex + 1}</h4>

              {/* Schedule Title */}
              <TextField
                label="Schedule Title"
                name="title"
                value={schedule.title}
                onChange={(e) => handleChange(e, categoryIndex, scheduleIndex)}
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!errors[`categories.${categoryIndex}.schedules.${scheduleIndex}.title`]}
                helperText={errors[`categories.${categoryIndex}.schedules.${scheduleIndex}.title`]?.[0]}
              />

              {/* Schedule Day */}
              <TextField
                label="Day"
                type="number"
                name="day"
                value={schedule.day}
                onChange={(e) => handleChange(e, categoryIndex, scheduleIndex)}
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!errors[`categories.${categoryIndex}.schedules.${scheduleIndex}.day`]}
                helperText={errors[`categories.${categoryIndex}.schedules.${scheduleIndex}.day`]?.[0]}
              />

              {/* Schedule Hour */}
              <TextField
                label="Hour"
                type="time"
                name="hour"
                value={schedule.hour}
                onChange={(e) => handleChange(e, categoryIndex, scheduleIndex)}
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!errors[`categories.${categoryIndex}.schedules.${scheduleIndex}.hour`]}
                helperText={errors[`categories.${categoryIndex}.schedules.${scheduleIndex}.hour`]?.[0]}
              />
            </div>
          ))}

          <IconButton onClick={() => addSchedule(categoryIndex)} color="primary">
            <AddCircleOutlineIcon /> Add Schedule
          </IconButton>
        </div>
      ))}

      <Button variant="outlined" onClick={addCategory} className="mt-4">
        Add Category
      </Button>

      <Button variant="contained" onClick={handleCreateTrip} className="mt-6">
        Create Trip
      </Button>
    </form>
  );
};

export default CreateModal;
