import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

const certifications = [
  "Java for Beginners - UDEMY",
  "Database Management System - Infosys Springboard",
  "CSS3 - Infosys Springboard",
];

const achievements = [
  "Rank 1 in PL/SQL and Rank 2 in SQL - Oracle Technologies",
  "Top 10 Rank in Coding Contest - Sri RamaKrishna College of Engineering",
  "Presented innovative ideas - Coimbatore Institute of Technology",
  "Solved 200+ programs in Leetcode and 2370+ in Skillrack",
];

const skills = [
  "Java", "C", "SQL", "HTML", "CSS", "Frontend Development",
  
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certifications & Achievements
      </motion.h2>

      <div className="certifications-content">
        <motion.div
          className="cert-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Certifications</h3>
          <ul>
            {certifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="cert-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Achievements</h3>
          <ul>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="cert-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Skills</h3>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
