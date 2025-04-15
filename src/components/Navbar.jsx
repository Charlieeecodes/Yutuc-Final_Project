import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-100 shadow-sm z-50 py-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-1">
        <h1 className="text-3xl font-bold">My Portfolio | Charles Yutuc</h1> 
        <ul className="flex gap-6 text-blue-600">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
