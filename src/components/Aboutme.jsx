import React from "react";

const AboutMe = () => (
  <section id="about" className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 scroll-mt-55">
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="public/Me.jpg"
        alt="Charles Mathew Yutuc"
        className="rounded-xl shadow-2xl w-60 h-60 object-cover hover:scale-105 mx-auto transition duration-300"
      />
    </div>

    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-700">
      Hey there! I'm Charles Mathew Yutuc, a 20-year-old BSIT major specializing in Network Security at the University of the Cordilleras. Beyond the world of tech, I have a variety of skills and hobbies that make me a uniquely passionate and balanced individual let me show you what makes me what I want to be!
      </p>
    </div>
  </section>
);

export default AboutMe;
