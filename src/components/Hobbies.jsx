import React, { useState } from "react";

const hobbyImages = [
  "public/Nature1.jpg", 
  "public/Nature2.PNG",
  "public/Nature3.JPG",
  "public/Nature4.JPG",
  "public/Nature6.jpg",
];

const Hobbies = () => {
  const [current, setCurrent] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const handleNext = () => {
    setSlideDirection("right");
    setCurrent((prev) => (prev + 1) % hobbyImages.length);
  };

  return (
    <section
      id="hobbies"
      className="flex flex-col md:flex-row items-center text-center md:text-left gap-15 scroll-mt-"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
        <div
          key={current}
          className={`w-60 h-60 rounded-xl shadow-xl ring-2 ring-blue-500 ring-opacity-20 transition-transform duration-500 transform ${
            slideDirection === "right" ? "translate-x-0" : "-translate-x-0"
          }`}
        >
          <img
            src={hobbyImages[current]}
            alt={`Hobby ${current + 1}`}
            className="w-full h-full object-cover rounded-xl hover:scale-105 mx-auto transition duration-300"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-0rem] bg-blue-600 text-white rounded-full p-1 hover:bg-blue-700 transition text-sm hover:scale-105 mx-auto transition duration-300"
          aria-label="Next hobby"
        >
          ➤
        </button>
      </div>
      
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-3 text-black-700">Hobbies</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          One of the things I often do or part of my lifestyle is I love staying active at the gym, having a healthy lifestyle and environment,
          spending time with nature, travelling,  and discovering new passions and things that makes me happy and curios as an Individual. These hobbies keep me inspired and balanced
          while sharpening both my creativity and perspective about the world.
        </p>
      </div>
    </section>
  );
};

export default Hobbies;
