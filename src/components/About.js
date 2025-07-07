import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          Hello! I’m <strong>Akshaya</strong>, a passionate software developer
          who loves crafting intuitive user interfaces and robust backend
          systems. I enjoy working with <strong>React.js</strong>, <strong>CSS</strong>,
          <strong>Java</strong>, and <strong>SQL</strong> to build seamless web
          applications.  
        </p>
        <p>
          With a keen eye for design and detail, I focus on creating user-centric
          experiences that look great and perform flawlessly.
        </p>
        <p>
          When I’m not coding, I enjoy exploring modern UI trends and learning
          new technologies to stay ahead in the tech world.
        </p>
        <a href="#projects" className="btn">
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default About;
