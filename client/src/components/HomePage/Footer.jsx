import React from 'react';
import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-3xl font-bold text-[#109CF1]">FOLLOW ME UP.</h1>
          <div className="flex justify-center md:justify-start">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={40} /> 
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterSquare size={40} /> 
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram size={40} /> 
            </a>
          </div>
        </div>
        <div className="text-center md:text-left flex flex-wrap">
          <div className="w-full md:w-1/4">
            <h6 className="font-bold uppercase">Getting Started</h6>
            <ul className="flex flex-col">
              <li className="py-1 link">User Guide</li>
              <li className="py-1 link">Products</li>
              <li className="py-1 link">Features</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h6 className="font-bold uppercase">Account</h6>
            <ul className="flex flex-col">
              <li className="py-1 link">Login</li>
              <li className="py-1 link">Sign Up</li>
              <li className="py-1 link">Customer Support</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h6 className="font-bold uppercase">Support</h6>
            <ul className="flex flex-col">
              <li className="py-1 link">Privacy Policy</li>
              <li className="py-1 link">Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h6 className="font-bold uppercase">Company</h6>
            <ul className="flex flex-col">
              <li className="py-1 link">About Us</li>
              <li className="py-1 link">Our Customers</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mt-4" />

      <div className="flex flex-col max-w-[1240px] mx-auto py-4 px-2 justify-between sm:flex-row text-center text-gray-500">
        <p className="py-2">Created by Project Follow Me Up - RMIT</p>
        <div className="flex justify-between sm:w-[300px] pt-2 text-2xl"></div>
      </div>
    </div>
  );
};

export default Footer;
