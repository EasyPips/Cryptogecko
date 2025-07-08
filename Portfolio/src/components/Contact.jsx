import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-16 px-4 text-center">
      <h3 className="text-3xl font-bold text-emerald-400 mb-4">Contact Me</h3>
      <p className="mb-6">
        I am open to full-time, contract or freelance frontend development
        roles.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-left space-y-4">
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-emerald-400" /> +234 8136635133
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-emerald-400" />{" "}
            emmanueloluwabuolaoye@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-emerald-400" /> Kwara, Nigeria
          </p>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          ></textarea>
          <button className="bg-emerald-400 text-white px-4 py-2 rounded font-semibold">
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
