import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:akshayavenkat05@gmail.com">akshayavenkat05@gmail.com</a>
          </div>
          <div className="info-item">
            <FaPhone className="contact-icon" />
            <span>+91 63828 10560</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Tirunelveli, Tamil Nadu</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/in/v-akshaya/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="info-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/Akshaya2715" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
