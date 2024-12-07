import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ author, content }) => {
  return (
    <motion.div
      className="testimonial-card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <h3>{author}</h3>
      <p>{content}</p>
    </motion.div>
  );
};

export default TestimonialCard;
