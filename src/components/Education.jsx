import React from "react";

const Education = () => (
  <section
    id="education"
    className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 scroll-mt-55"
  >
    <div className="w-full md:w-1/2 ml-0 md:ml-[5%]">
      <h2 className="text-2xl font-bold mb-3 text-black-700">Education</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Bachelor of Science in Information Technology<br />
        <span className="font-medium">University of the Cordilleras</span><br />
        Major in Network Security
      </p>
      <p className="text-gray-600 mt-4">
        I graduated at Mil-an National High School as a STEM student
        and now I am currently pursuing IT course as my main career.
        I pursued IT course because of its wide range career choices, 
        and I am individual who is tech enthusiast and interested in learning
        more of IT Industry.
      </p>
    </div>

    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="public/education.JPG"
        alt="Education"
        className="rounded-xl shadow-xl w-60 h-60 object-cover ring-2 ring-blue-500 ring-opacity-20 hover:scale-105 mx-auto transition duration-300"
      />
    </div>
  </section>
);

export default Education;
