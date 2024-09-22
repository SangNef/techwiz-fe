import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/authSlice";
import { getAllCurrencies } from "../../api/currency";
import { updateProfile } from "../../api/auth";

const EditProfile = () => {
  const [currencies, setCurrencies] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    currency_id: "", // Store the currency ID here
  });

  const [avatar, setAvatar] = useState(null);

  const fetchCurrency = async () => {
    try {
      const response = await getAllCurrencies();
      setCurrencies(response);
      const userCurrency = response.find(currency => currency.code === user.currency_code);
      if (userCurrency) {
        setFormData(prev => ({ ...prev, currency_id: userCurrency.id })); // Set initial currency ID
      }
    } catch (error) {
      console.error("Failed to fetch currencies:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmitGeneralInfo = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("user_id", user.id);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("currency_id", formData.currency_id);

    try {
      const response = await updateProfile(formDataToSend);
      dispatch(loginSuccess({ token: response.token }));
      navigate("/user");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleSubmitAvatar = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("user_id", user.id);
    formDataToSend.append("avatar", avatar);

    try {
      const response = await updateProfile(formDataToSend);
      dispatch(loginSuccess({ token: response.token }));
      navigate("/user"); // Navigate to profile after updating avatar
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  useEffect(() => {
    document.title = "Edit Profile";
    fetchCurrency();
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <div className="flex items-start mt-12">
          <div className="flex-shrink-0 w-1/4">
            {/* Avatar Upload Section */}
            <img
              src={
                user?.avatar ||
                "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
              }
              alt={user?.name || "John Doe"}
              className="w-48 h-48 rounded-full object-cover"
            />
            <form onSubmit={handleSubmitAvatar} className="mt-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Avatar
              </button>
            </form>
          </div>

          {/* General Info Form */}
          <form onSubmit={handleSubmitGeneralInfo} className="ml-12 w-full border-l pl-6">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Currency</label>
              <select
                name="currency_id"
                value={formData.currency_id}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              >
                {currencies.map((currency) => (
                  <option key={currency.id} value={currency.id}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full justify-end flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
