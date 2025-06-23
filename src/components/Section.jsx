import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children, id }) => (
  <motion.div
    id={id}
    className="section"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <h2>{title}</h2>
    <div className="section-content">{children}</div>
  </motion.div>
);

export default Section;
