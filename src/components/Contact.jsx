import React from "react";

const Contact = () => (
  <section id="contact" className="text-center">
    <h2 className="text-2xl font-semibold mb-2">Contact</h2>
    <p className="text-gray-700">
      Feel free to reach out via email at <strong>charlesyutuc12gmail.com</strong>
    </p>
    <form className="mt-4 flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Your Message"
        className="border p-2 rounded h-32"
      />
      <button className="bg-blue-2000 text-black-100 py-2 px-4 rounded hover:bg-blue-800 transition">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
