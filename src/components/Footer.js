import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Akshaya V | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
