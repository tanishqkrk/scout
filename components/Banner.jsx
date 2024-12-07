"use client";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <div className="z-[999999999999999999999]">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        className=" fixed left-0 top-0 z-[999999] flex  h-screen w-screen items-center justify-center bg-themeOrange"
        transition={{
          duration: 1.4,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-110%" }}
        className=" fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-themeBlue"
        transition={{
          duration: 1.4,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-110%" }}
        transition={{
          duration: 1.4,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="fixed left-0 top-0 z-[10000000] grid h-screen w-screen place-items-center"
      >
        <motion.img
          initial={{ opacity: 100 }}
          animate={{ opacity: 100 }}
          className="h-auto w-80"
          src="/logo_long.svg"
          transition={{
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ></motion.img>
      </motion.div>
    </div>
  );
}
