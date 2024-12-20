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
          <Text inView={isInView} text={"Perks at Work in Amsterdam"}></Text>
        </div>
        <div className="text-base text-zinc-600 text-center w-2/3 max-md:w-full">
          <Text
            inView={isInView}
            text={
              "Explore Amsterdam's dynamic professional landscape, where innovative technology, sustainable development, and exceptional quality of life converge to create unparalleled career opportunities."
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
          className="w-2/3 flex justify-center items-start flex-col bg-themeOrange rounded-2xl text-white text-start h-80 gap-6 p-6 max-lg:rounded-r-none max-md:w-full max-md:rounded-r-2xl max-md:rounded-br-none max-md:rounded-bl-none"
        >
          <div className="text-3xl max-lg:text-2xl">
            <Text inView={isInView} text={"Excellent Public Infrastructure"}></Text>
          </div>
          <div className="text-lg max-md:text-base">
            <Text
              inView={isInView}
              text={`
            Amsterdam boasts a world-class public transport system and bike-friendly infrastructure that makes commuting convenient, affordable, and sustainable. The city's central European location provides exceptional connectivity, offering professionals easy access to major cities and international business hubs.
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
            src="/Amsterdam-Diversity.webp"
            alt="Amsterdam Infrastructure"
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
            <Text inView={isInView} text={"Thriving Tech Ecosystem"}></Text>
          </div>
          <div className="text-lg max-md:text-base">
            <Text
              inView={isInView}
              text={`
              Amsterdam is a leading hub for innovation and technology, with a vibrant startup scene and presence of major global companies. The city offers abundant opportunities for career growth in cutting-edge fields like fintech, artificial intelligence, and sustainable technology, attracting top talent from around the world.
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
            src="/Amsterdam-Tech.jpg"
            alt="Amsterdam Tech Ecosystem"
          />
        </motion.div>
      </div>
    </div>
  );
}