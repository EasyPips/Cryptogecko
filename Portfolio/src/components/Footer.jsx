import React from "react";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black text-center py-6 border-t border-gray-800">
      <p className="text-sm text-gray-500">
        <p className="text-teal-400">{year}</p>
      </p>
    </footer>
  );
};

export default Footer;
