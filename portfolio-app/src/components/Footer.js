import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto fixed-bottom">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} Eleanor Gold</h4>
      </div>
    </footer>
  );
};

export default Footer;
