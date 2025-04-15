import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 scroll-mt-55">
    <div className="md:w-2/3">
      <h2 className="text-2xl font-semibold mb-4 text-black-700">Testimonials</h2>
      <p className="text-gray-700 text-lg">
        I don’t consider myself the best, but I always give my best. I try to be someone my peers can depend on 
        whether it’s helping with tasks, listening to feedback, or simply doing my part. I enjoy learning from others
        and continuously improving, both in my skills and how I work with people. Every opportunity is a chance for me
        to grow, and I’m grateful for those who have supported me along the way.
      </p>
    </div>
    <div className="md:w-1/3">
      <img
        src="public/Testimonial.jpg"
        alt="Charles Testimonial"
        className="rounded-xl shadow-lg w-full max-w-xs mx-auto transition duration-300 hover:scale-105"
      />
    </div>
  </section>
);

export default Testimonials;
