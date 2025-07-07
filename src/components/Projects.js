import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "SmartBite – Full Stack Food Ordering Website",
    description:
      "Built a complete food ordering platform with user authentication, admin panel, shopping cart, real-time order status updates, and Stripe-integrated secure online payments.",
  },
  {
    title: "Smart College Admission Recommendation System",
    description:
      "A web app that recommends colleges based on user preferences and counselling categories. Integrated interactive maps and an AI chatbot.",
  },
  {
    title: "Real-time Weather Application",
    description:
      "Developed a dynamic weather app using React.js with a real-time API to display temperature, humidity, and wind speed.",
  },
  {
    title: "Medical Shop Management System",
    description:
      "Built a system for inventory tracking, sales management, and expired medicine validation to enhance operational efficiency.",
  },
  {
    title: "Donut Delight UI Design",
    description:
      "Designed an intuitive and visually appealing Donut Delight UI in Figma, focusing on user experience.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
