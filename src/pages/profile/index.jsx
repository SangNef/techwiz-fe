import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    document.title = user.name;
  }, [user]);
  return (
    <div className="w-full">
      <div className=" bg-white shadow rounded p-6">
        <div className="flex justify-between items-end border-b pb-2">
          <h2 className="text-2xl font-bold">Profile</h2>
          <Link
            to="/user/edit"
            className="text-gray-500 hover:text-blue-500 duration-150"
          >
            Edit profile
          </Link>
        </div>
        <div className="flex items-start mt-12">
          <div className="flex-shrink-0">
            <img
              src={
                user.avatar ||
                "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
              }
              alt={user.name || "John Doe"}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-12">
            <div className="mb-6 flex">
              <p className="w-32 text-gray-600">Name</p>
              <p>{user.name}</p>
            </div>
            <div className="mb-6 flex">
              <p className="w-32 text-gray-600">Email</p>
              <p>{user.email}</p>
            </div>
            <div className="mb-6 flex">
              <p className="w-32 text-gray-600">Currency</p>
              <p>{user.currency_code}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white shadow rounded p-6 mt-6">
        <div className="flex justify-between items-end border-b pb-2">
          <h2 className="text-2xl font-bold">Actions</h2>
          <p className="text-gray-500">View all actions</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
