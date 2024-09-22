import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 w-[300px] h-[calc(100vh-92px)] mt-[92px] overflow-auto p-4'>
      <ul className='flex flex-col gap-2 mt-4'>
        <li>
          <Link to="/user" className="block p-2 hover:bg-gray-300 rounded">My Account</Link>
        </li>
        <li>
          <Link to="/user/edit" className="block p-2 hover:bg-gray-300 rounded">Edit Profile</Link>
        </li>
        <li>
          <Link to="/user/change-password" className="block p-2 hover:bg-gray-300 rounded">Change Password</Link>
        </li>
        <li>
          <Link to="/user/trips" className="block p-2 hover:bg-gray-300 rounded">My Trip Schedules</Link>
        </li>
        <li>
          <Link to="/user/my-actions" className="block p-2 hover:bg-gray-300 rounded">My Actions</Link>
        </li>
        <li>
          <Link to="/logout" className="block p-2 hover:bg-gray-300 rounded">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
