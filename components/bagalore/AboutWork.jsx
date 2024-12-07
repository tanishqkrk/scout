"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Text from "../AnimatedText";

export default function AboutWork() {
  const container = useRef();
  const isInView = useInView(container);
  return (
    <div ref={container} className="px-16 space-y-12 max-md:px-6">
      <div className="flex h-full gap-6 max-lg:gap-0 max-md:flex-col">
        <motion.div
          initial={{
            opacity: 0,
            y: "50%",
          }}
          animate={{
            opacity: isInView ? "100%" : 0,
            y: isInView ? "0" : "50%",
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-2/3 flex  justify-center items-start flex-col bg-themeOrange rounded-2xl text-white text-start h-80 gap-6 p-6 max-lg:rounded-r-none max-md:w-full max-md:rounded-r-2xl max-md:rounded-br-none max-md:rounded-bl-none"
        >
          <div className="text-3xl max-lg:text-2xl">
            <Text inView={isInView} text={"Thriving Work Culture"}></Text>
          </div>
          <div className="text-lg max-md:text-base">
            <Text
              inView={isInView}
              text={`
            Bangalore is the Silicon Valley of India, boasting a dynamic work
            environment with top-notch tech companies like Infosys, Wipro, and
            numerous innovative startups. The city offers excellent
            opportunities for professional growth and networking.
          `}
            ></Text>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: "50%",
          }}
          animate={{
            opacity: isInView ? "100%" : 0,
            y: isInView ? "0" : "50%",
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            // type: "spring",
          }}
          className="w-1/3 h-80 max-md:w-full "
        >
          <img
            className="w-full h-full rounded-2xl object-cover max-lg:rounded-l-none max-md:rounded-r-2xl  max-md:rounded-t-none max-md:rounded-b-2xl"
            src="/workculture.svg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex flex-row-reverse h-full gap-6 max-lg:gap-0 max-md:flex-col">
        <motion.div
          initial={{
            opacity: 0,
            y: "50%",
          }}
          animate={{
            opacity: isInView ? "100%" : 0,
            y: isInView ? "0" : "50%",
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-2/3 flex  justify-center items-start flex-col bg-themeBlue rounded-2xl text-white text-start h-80 gap-6 p-6  max-lg:rounded-r-none max-md:w-full max-md:rounded-r-2xl max-md:rounded-b-none max-md:rounded-br-none max-md:rounded-bl-none"
        >
          <div className="text-3xl max-lg:text-2xl">
            <Text inView={isInView} text={"Work-Life Balance"}></Text>
          </div>
          <div className="text-lg max-md:text-base">
            <Text
              inView={isInView}
              text={`
              Enjoy a balanced lifestyle with flexible workspaces like WeWork and 91springboard, and a vibrant after-work scene.
          `}
            ></Text>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: "50%",
          }}
          animate={{
            opacity: isInView ? "100%" : 0,
            y: isInView ? "0" : "50%",
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            // type: "spring",
          }}
          className="w-1/3 h-80 max-md:w-full "
        >
          <img
            className="w-full h-full rounded-2xl object-cover max-lg:rounded-l-none max-md:rounded-r-2xl  max-md:rounded-t-none max-md:rounded-b-2xl"
            src="/workbalance.svg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
