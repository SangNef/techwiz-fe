import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import các icon
import Banner from "../../components/banner";

const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" content="We are here to help you" />
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {/* Contact Info Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-xl text-blue-500 mr-3" /> {/* Icon cho Phone */}
            <h3 className="text-2xl font-bold">Phone</h3>
          </div>
          <p className="text-gray-600">
            A wonderful serenity has taken possession of my entire soul, like
            these.
          </p>
          <p className="text-lg font-semibold mt-2">+1-2345-2345</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-xl text-blue-500 mr-3" /> {/* Icon cho Email */}
            <h3 className="text-2xl font-bold">Email</h3>
          </div>
          <p className="text-gray-600">
            A wonderful serenity has taken possession of my entire soul, like
            these.
          </p>
          <p className="text-lg font-semibold mt-2">Coder2Ngon@gmail.com</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-xl text-blue-500 mr-3" /> {/* Icon cho Location */}
            <h3 className="text-2xl font-bold">Location</h3>
          </div>
          <p className="text-gray-600">8A Ton That Thuyet, My Dinh 2, Nam Tu Liem, Hanoi</p>
          <p className="text-lg font-semibold mt-2 text-blue-500 cursor-pointer">View on Google Map</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto max-w-3xl mt-12">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
