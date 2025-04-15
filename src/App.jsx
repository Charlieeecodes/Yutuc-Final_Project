import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Hobbies";
import Skills from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-350 min-h-screen">
      <Navbar />
      <main className="flex justify-center pt-43 pb-8 px-4">
        <div className="w-full max-w-4xl space-y-10">
          <section className="bg-white shadow-md rounded-xl p-20">
            <AboutMe />
          </section>
          <section className="bg-white shadow-md rounded-xl p-20">
            <Education />
          </section>
          <section className="bg-white shadow-md rounded-xl p-20">
            <Experience />
          </section>
          <section className="bg-white shadow-md rounded-xl p-20">
            <Skills />
          </section>
          <section className="bg-white shadow-md rounded-xl p-20">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
