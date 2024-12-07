"use client";
import { motion } from "framer-motion";

export default function Text({
  inView = true,
  text,
  color,
  initial = "150%",
  animate = 0,
  delay = 0.3,
  duration = 1,
  custom = "",
}) {
  return (
    <div
      className={`overflow-hidden flex justify-center w-full ${color} ${custom}`}
    >
      <motion.div
        initial={{ y: initial }}
        animate={{ y: inView ? animate : initial }}
        transition={{ duration: duration, delay: delay, type: "spring" }}
        className="flex items-center gap-4 "
      >
        {text}
      </motion.div>
    </div>
  );
}
