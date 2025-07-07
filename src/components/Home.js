import React from "react";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import "./Home.css";
import myPhoto from "../assets/myphoto.jpg"; // 🖼 Replace with your photo

const Home = () => {
  return (
    <section id="home" className="home-container">
      {/* Background Glows */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      <div className="glow glow3"></div>

      {/* Left Side - Photo */}
      <motion.div
        className="home-photo"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={myPhoto} alt="Akshaya" />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>
          Hi, I’m <span>Akshaya</span>
        </h1>
        <h2>
          <Typed
            strings={[
              "Software Developer",
              "Frontend Enthusiast",
              "Java Programmer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
        <p>
          A passionate software developer and quick learner, eager to explore new
          technologies and contribute to impactful projects.
        </p>

        <a href="/AKSHAYA V_RESUME.pdf" download className="btn">
          Download Resume
        </a>
      </motion.div>

    </section>
  );
};


export default Home;
