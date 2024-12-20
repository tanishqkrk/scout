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
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold text-center">
          <Text inView={isInView} text={"Perks at Work in Dubai"}></Text>
        </div>
        <div className="text-base text-zinc-600 text-center w-2/3 max-md:w-full">
          <Text
            inView={isInView}
            text={
              "Discover Dubai's dynamic business landscape, where global innovation meets multicultural expertise, offering unparalleled career growth in a world-class economic environment."
            }
          ></Text>
        </div>
      </div>
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
            <Text inView={isInView} text={"Global Business Hub"}></Text>
          </div>
          <div className="text-lg max-md:text-base">
            <Text
              inView={isInView}
              text={`
            Dubai stands as a premier global business destination, hosting headquarters of multinational corporations, free trade zones, and innovative startups. With strategic location bridging East and West, the city offers unprecedented networking and business opportunities across finance, technology, and international trade.
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
          }}
          className="w-1/3 h-80 max-md:w-full "
        >
          <img
            className="w-full h-full rounded-2xl object-cover max-lg:rounded-l-none max-md:rounded-r-2xl  max-md:rounded-t-none max-md:rounded-b-2xl"
            src="/Dubai-Global.jpg"
            alt="Dubai Business Hub"
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
            <Text inView={isInView} text={"Cultural Diversity"}></Text>
          </div>
          <div className="text-lg max-md:text-base">
            <Text
              inView={isInView}
              text={`
              Experience a vibrant, multicultural work environment where over 80% of the population are expatriates. Dubai offers a unique professional ecosystem that celebrates diversity, fosters global perspectives, and provides opportunities to collaborate with talent from around the world.
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
          }}
          className="w-1/3 h-80 max-md:w-full "
        >
          <img
            className="w-full h-full rounded-2xl object-cover max-lg:rounded-l-none max-md:rounded-r-2xl  max-md:rounded-t-none max-md:rounded-b-2xl"
            src="/Dubai-Diversity.jpg"
            alt="Cultural Diversity"
          />
        </motion.div>
      </div>
    </div>
  );
}