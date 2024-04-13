import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { RiSearch2Fill } from "react-icons/ri";

export default function Header() {
  return (
    <nav className="flex items-center justify-between m-5">
      <ul className="flex justify-center space-x-10 flex-grow">
        <li className="font-bold hover:cursor-pointer relative">Home</li>
        <li className="font-bold hover:cursor-pointer relative">Products</li>
        <li className="font-bold hover:cursor-pointer relative">About Us</li>
        <li className="font-bold hover:cursor-pointer relative">Contact Us</li>
      </ul>
      <div className="flex items-center space-x-4">
        <FaCartShopping className="text-xl hover:text-gray-300 hover:cursor-pointer transition-colors duration-300" />
        <RiSearch2Fill className="text-xl hover:text-gray-300 hover:cursor-pointer transition-colors duration-300" />
      </div>
    </nav>
  );
  
}
