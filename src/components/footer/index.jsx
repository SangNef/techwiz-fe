import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import các icon mạng xã hội

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo và mô tả */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ExpenseVoyage</h2>
          <p>
            We offer the best tours and services for your next adventure. Join us
            to explore the world in a unique way.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/destinations" className="hover:underline">
                Destinations
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
