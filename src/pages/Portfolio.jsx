import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import "../App.css";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="container">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <motion.div
        className="portfolio"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="header">
          <motion.h1
            className="name"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            KAKWEZI Peace
          </motion.h1>
          <img src="/pic3.jpg" alt="KAKWEZI Peace" className="pic3" />
          <p className="contact">
            peacekakwezi222@gmail.com | +250 790 795 175 | Kigali, Rwanda
          </p>
        </header>

        <Section title="Professional Summary" id="summary">
          <p>
            Enthusiastic and results-driven Software Engineer with hands-on experience in full-stack development, Linux system administration, networking, and data science. Skilled in containerization technologies, developing microservices, and performing AI-powered data analysis. Committed to delivering high-quality technical solutions and collaborating with cross-functional teams to address real-world problems.
          </p>
        </Section>

        <Section title="Technical Skills" id="skills">
          <div className="two-column">
            <ul>
              <li><strong>Software Development:</strong> Java (Spring Boot), Microservices, RESTful APIs, Thymeleaf, Flutter, React</li>
              <li><strong>Networking & System Administration:</strong> DNS, SSH, DHCP, FTP, Samba, IPv4/IPv6, CLI, Linux</li>
            </ul>
            <ul>
              <li><strong>Data Science & ML:</strong> Python, R, SQL, Pandas, NumPy, Scikit-learn, Jupyter Lab, Django, Power BI, Tableau</li>
              <li><strong>DevOps & Tools:</strong> Docker, Kubernetes, Git, VS Code, Postman</li>
            </ul>
          </div>
        </Section>

        <Section title="Education" id="education">
          <p>Bachelor of Information Technology, Software Engineering - Adventist University of Central Africa (AUCA), Kigali, Rwanda</p>
        </Section>

        <Section title="Certifications">
          <ul>
            <li>Cisco Certified – Computer Network & Linux Essentials</li>
            <li>Internet Society – Network Operations (NetOps 1.0 & 2.0)</li>
            <li>ALX Africa – AI Career Essentials</li>
          </ul>
        </Section>

        <Section title="Professional Experience" id="experience">
          <ul>
            <li><strong>Technical Support & Networking Intern, AUCA:</strong> Maintained network services (DNS, DHCP, SSH, FTP, Samba), Linux admin, CLI, fiber optics</li>
          </ul>
        </Section>

        <Section title="My Projects" id="projects">
          <ul>
            <li>
              <a href="https://github.com/Kakwezi-Peace/EngineerManagement" target="_blank" rel="noopener noreferrer">
                <strong>EngineerManagement</strong>
              </a> — A management system for handling engineer details and tasks.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/snake_game" target="_blank" rel="noopener noreferrer">
                <strong>snake_game</strong>
              </a> — Classic snake game implemented using Python.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/Number_guessing_game" target="_blank" rel="noopener noreferrer">
                <strong>Number_guessing_game</strong>
              </a> — A simple CLI number guessing game in Python.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/assignment_web" target="_blank" rel="noopener noreferrer">
                <strong>assignment_web</strong>
              </a> — A web assignment project.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/gishshu_traffic_light" target="_blank" rel="noopener noreferrer">
                <strong>gishshu_traffic_light</strong>
              </a> — A simulation for traffic light control.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/python" target="_blank" rel="noopener noreferrer">
                <strong>python</strong>
              </a> — A collection of Python scripts and experiments.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/hotel_management_-and-_booking-application25437" target="_blank" rel="noopener noreferrer">
                <strong>hotel_management_-and-_booking-application25437</strong>
              </a> — Hotel management and booking app project.
            </li>
            <li>
              <a href="https://github.com/Kakwezi-Peace/sign-up-page" target="_blank" rel="noopener noreferrer">
                <strong>sign-up-page</strong>
              </a> — A responsive HTML/CSS sign-up form.
            </li>
          </ul>
        </Section>

        <Section title="Languages" id="languages">
          <ul>
            <li>Kinyarwanda – Native</li>
            <li>English – Fluent</li>
          </ul>
        </Section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Portfolio;
