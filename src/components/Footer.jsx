import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="footer"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <p>&copy; 2025 KAKWEZI Peace. All rights reserved.</p>
  </motion.footer>
);

export default Footer;
