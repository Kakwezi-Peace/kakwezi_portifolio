import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, theme }) => (
  <motion.nav
    className="navbar"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="logo">Peace Portfolio</div>
    <div className="nav-links">
      <a href="#summary">Summary</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#languages">Languages</a>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
