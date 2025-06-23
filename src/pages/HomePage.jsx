import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => (
  <motion.div
    className="home-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Welcome to Peace's Portfolio</h1>
    <img src="/pic2.jpg" alt="KAKWEZI Peace" className="pic2-pic" />
    <p>Explore my projects, skills, and background.</p>
    <Link to="/portfolio" className="btn">Go to Portfolio</Link>
  </motion.div>
);

export default HomePage;
