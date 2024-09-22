import React, { useEffect, useState } from "react";
import { getTrip, updateTrip } from "../../api/trip";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const TripModal = ({ open, handleClose, tripId }) => {
  const [tripDetail, setTripDetail] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: "", budget: "" });
  const [newSchedule, setNewSchedule] = useState({
    title: "",
    day: "",
    time: "",
    amount: "",
    exchange_date: "",
    note: "",
  });

  const user = useSelector((state) => state.auth.user);

  const fetchTripDetail = async () => {
    try {
      const response = await getTrip(tripId);
      setTripDetail(response);
    } catch (error) {
      console.error("Error fetching trip detail:", error);
    }
  };

  useEffect(() => {
    if (open && tripId) {
      fetchTripDetail();
    }
  }, [open, tripId]);

  const formatBudget = (budget) => {
    return budget ? budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
  };

  // Update category fields (name, budget)
  const updateCategoryField = (categoryIndex, field, value) => {
    const updatedCategories = tripDetail.categories.map((category, i) => {
      if (i === categoryIndex) {
        return { ...category, [field]: value.replace(/,/g, "").trim() }; // Loại bỏ dấu phẩy
      }
      return category;
    });
    setTripDetail((prev) => ({
      ...prev,
      categories: updatedCategories,
    }));
  };

  // Update schedule fields (title, day, time, etc.)
  const updateScheduleField = (categoryIndex, scheduleIndex, field, value) => {
    const updatedCategories = tripDetail.categories.map((category, i) => {
      if (i === categoryIndex) {
        const updatedSchedules = category.schedules.map((schedule, j) => {
          if (j === scheduleIndex) {
            return { ...schedule, [field]: value };
          }
          return schedule;
        });
        return { ...category, schedules: updatedSchedules };
      }
      return category;
    });
    setTripDetail((prev) => ({
      ...prev,
      categories: updatedCategories,
    }));
  };

  // Add category
  const addCategory = () => {
    if (newCategory.name && newCategory.budget) {
      const newCategoryData = {
        id: Date.now(),
        name: newCategory.name,
        budget: newCategory.budget,
        schedules: [],
      };
      setTripDetail((prev) => ({
        ...prev,
        categories: [...prev.categories, newCategoryData],
      }));
      setNewCategory({ name: "", budget: "" });
    }
  };

  // Add schedule to category
  const addSchedule = (categoryIndex) => {
    const newScheduleData = { ...newSchedule, id: Date.now() };
    const updatedCategories = tripDetail.categories.map((category, i) => {
      if (i === categoryIndex) {
        return {
          ...category,
          schedules: [...category.schedules, newScheduleData],
        };
      }
      return category;
    });
    setTripDetail((prev) => ({
      ...prev,
      categories: updatedCategories,
    }));
    setNewSchedule({
      title: "",
      day: "",
      time: "",
      amount: "",
      exchange_date: "",
      note: "",
    });
  };

  const updateDateField = (field, value) => {
    setTripDetail((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateTrip = async () => {
    const updatedTrip = {
      user_id: user.id,
      destination_id: tripDetail.destination_id,
      name: tripDetail.name,
      start_date: tripDetail.start_date,
      end_date: tripDetail.end_date,
      budget: parseFloat(
        tripDetail.budget.replace(/\./g, "").replace(",", ".")
      ), // Chuyển đổi sang số
      categories: tripDetail.categories.map((category) => ({
        id: category.id,
        name: category.name,
        budget: parseFloat(
          category.budget.replace(/\./g, "").replace(",", ".")
        ), // Chuyển đổi sang số
        schedules: category.schedules.map((schedule) => ({
          id: schedule.id,
          title: schedule.title,
          day: schedule.day,
          hour: schedule.time,
          amount: schedule.amount,
          expense_date: schedule.exchange_date,
          note: schedule.note,
        })),
      })),
    };

    console.log("Updated Trip Data:", updatedTrip); // Xem dữ liệu gửi đi

    try {
      await updateTrip(tripId, { data: updatedTrip });
      alert("Trip updated successfully!");
      handleClose();
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[600px] mx-auto overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {tripDetail ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {tripDetail.name} to {tripDetail.destination.name}
            </h2>
            <div className="flex w-full justify-between gap-4">
              <div className="mb-4 w-full">
                <label className="block">Start Date</label>
                <input
                  type="date"
                  value={tripDetail.start_date}
                  onChange={(e) =>
                    updateDateField("start_date", e.target.value)
                  }
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block">End Date</label>
                <input
                  type="date"
                  value={tripDetail.end_date}
                  onChange={(e) => updateDateField("end_date", e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>

            <div className="mb-4">
                <label className="block">Total Budget</label>
                <input
                    type="number"
                    value={tripDetail.budget}
                    onChange={(e) =>
                        updateDateField("budget", e.target.value)
                    }
                    className="border p-2 rounded w-full"
                    placeholder="Budget"
                />
            </div>

            <h4 className="text-lg font-semibold mt-4">Categories</h4>
            <ul className="space-y-4 mb-4">
              {tripDetail.categories.map((category, categoryIndex) => (
                <li
                  key={category.id}
                  className="border rounded-lg p-4 relative"
                >
                  <div className="flex justify-between gap-4">
                    <div className="w-full">
                      <label className="block">Category Name</label>
                      <input
                        type="text"
                        value={category.name}
                        onChange={(e) =>
                          updateCategoryField(
                            categoryIndex,
                            "name",
                            e.target.value
                          )
                        }
                        className="border p-2 rounded w-full"
                        placeholder="Category Name"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block">Category Budget</label>
                      <input
                        type="number"
                        name="budget"
                        value={category.budget}
                        onChange={(e) =>
                          updateCategoryField(
                            categoryIndex,
                            "budget",
                            e.target.value
                          )
                        }
                        className="border p-2 rounded w-full"
                        placeholder="Budget"
                      />
                    </div>
                  </div>
                  <button
                    className="absolute top-2 right-2 text-red-600"
                    onClick={() => removeCategory(categoryIndex)}
                  >
                    &times;
                  </button>

                  <ul className="mt-2 space-y-2">
                    {category.schedules.map((schedule, scheduleIndex) => (
                      <li key={schedule.id} className="border-b pb-4">
                        {/* Update schedule fields */}
                        <div className="mb-4">
                          <label>Schedule title</label>
                          <input
                            type="text"
                            value={schedule.title}
                            onChange={(e) =>
                              updateScheduleField(
                                categoryIndex,
                                scheduleIndex,
                                "title",
                                e.target.value
                              )
                            }
                            className="border p-2 rounded w-full"
                            placeholder="Title"
                          />
                        </div>
                        <div className="flex gap-4 mb-4">
                          <div className="w-full">
                            <label>Day</label>
                            <input
                              type="number"
                              value={schedule.day}
                              onChange={(e) =>
                                updateScheduleField(
                                  categoryIndex,
                                  scheduleIndex,
                                  "day",
                                  e.target.value
                                )
                              }
                              className="border p-2 rounded w-full"
                              placeholder="Day"
                            />
                          </div>
                          <div className="w-full">
                            <label>Time</label>
                            <input
                              type="time"
                              value={schedule.time}
                              onChange={(e) =>
                                updateScheduleField(
                                  categoryIndex,
                                  scheduleIndex,
                                  "time",
                                  e.target.value
                                )
                              }
                              className="border p-2 rounded w-full"
                              placeholder="Time"
                            />
                          </div>
                        </div>
                        <div className="flex gap-4 mb-4">
                          <div className="w-full">
                            <label>Amount</label>
                            <input
                              type="number"
                              value={schedule.amount}
                              onChange={(e) =>
                                updateScheduleField(
                                  categoryIndex,
                                  scheduleIndex,
                                  "amount",
                                  e.target.value
                                )
                              }
                              className="border p-2 rounded w-full"
                              placeholder="Amount"
                            />
                          </div>
                          <div className="w-full">
                            <label>Exchange Date</label>
                            <input
                              type="date"
                              value={schedule.exchange_date}
                              onChange={(e) =>
                                updateScheduleField(
                                  categoryIndex,
                                  scheduleIndex,
                                  "exchange_date",
                                  e.target.value
                                )
                              }
                              className="border p-2 rounded w-full"
                              placeholder="Exchange Date"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label>Note</label>
                          <input
                            type="text"
                            value={schedule.note}
                            onChange={(e) =>
                              updateScheduleField(
                                categoryIndex,
                                scheduleIndex,
                                "note",
                                e.target.value
                              )
                            }
                            className="border p-2 rounded w-full"
                            placeholder="Note"
                          />
                        </div>
                        <button
                          className="text-red-600 mt-2"
                          onClick={() =>
                            removeSchedule(categoryIndex, scheduleIndex)
                          }
                        >
                          Remove Schedule
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Button
                      variant="outlined"
                      onClick={() => addSchedule(categoryIndex)}
                    >
                      Add Schedule
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-4">
              <h4>Add New Category</h4>
              <div className="flex gap-4 mb-4">
                <div className="w-full">
                  <label>Category Name</label>
                  <input
                    type="text"
                    value={newCategory.name}
                    onChange={(e) =>
                      setNewCategory((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="border p-2 rounded w-full"
                    placeholder="Category Name"
                  />
                </div>
                <div className="w-full">
                  <label>Category Budget</label>
                  <input
                    type="number"
                    value={newCategory.budget}
                    onChange={(e) =>
                      setNewCategory((prev) => ({
                        ...prev,
                        budget: e.target.value,
                      }))
                    }
                    className="border p-2 rounded w-full"
                    placeholder="Budget"
                  />
                </div>
              </div>
              <Button variant="contained" onClick={addCategory}>
                Add Category
              </Button>
            </div>

            <div className="flex justify-end">
              <Button variant="contained" onClick={handleUpdateTrip}>
                Update Trip
              </Button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TripModal;
