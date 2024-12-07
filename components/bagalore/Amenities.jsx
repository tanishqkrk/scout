"use client";

import { useRef, useState } from "react";
import Text from "../AnimatedText";
import { useInView } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

export default function Amenities() {
  const amen = [
    {
      text: "Healthcare",
      emoji: "🏥",
      description:
        "With world-class hospitals like Manipal Hospital and Fortis Healthcare, Bangalore ensures you and your family’s health is in safe hands..",
      image: "/hospital.webp",
    },
    {
      text: "Shopping & Essentials",
      emoji: "🛍️",
      description: "Access local shopping centers and essential goods.",
      image: "/shopping.webp",
    },
    {
      text: "Nightlife",
      emoji: "🕺",
      description: "Discover the best nightlife spots for a fun evening out.",
      image: "/hospital.webp",
    },
    {
      text: "Cultural Spots",
      emoji: "👀",
      description: "Explore cultural landmarks and must-see locations.",
      image: "/shopping.webp",
    },
    {
      text: "Weekend Escapes",
      emoji: "🚗",
      description: "Plan weekend trips to nearby getaways and scenic escapes.",
      image: "/shopping.webp",
    },
    {
      text: "After-Work Activities",
      emoji: "🍻",
      description:
        "Unwind with after-work activities like dining and socializing.",
      image: "/shopping.webp",
    },
    {
      text: "Weekend Hangouts",
      emoji: "😆",
      description: "Find the best spots for weekend relaxation and fun.",
      image: "/shopping.webp",
    },
    {
      text: "Daily Conveniences",
      emoji: "🍒",
      description:
        "Locate daily conveniences such as grocery stores and services.",
      image: "/shopping.webp",
    },
    {
      text: "Community & Social Life",
      emoji: "👫",
      description: "Engage with the community and enjoy social activities.",
      image: "/shopping.webp",
    },
  ];
  const [selected, setSelected] = useState("Healthcare");
  const container = useRef();
  const inView = useInView(container);
  //   const current = amen.filter((x) => x.text === selected)[0];
  return (
    <div
      ref={container}
      className="px-16 max-mg:px-6 max-md:px-6 space-y-12 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold text-center">
          <Text inView={inView} text={"Life at Work and Beyond"}></Text>
        </div>
        <div className="text-base text-zinc-600 text-center w-2/3 max-md:w-full">
          <Text
            inView={inView}
            text={
              "Navigating a new country can be daunting. SCOUT provides comprehensive in-country assistance to ensure your transition to Bangalore is seamless and stress-free."
            }
          ></Text>
        </div>
      </div>
      <div className="flex flex-wrap w-2/3 justify-center items-center gap-6 max-lg:overflow-x-scroll max-lg:gap-2  max-lg:flex-nowrap max-lg:w-screen max-lg:justify-start max-lg:px-6 noscroll">
        {amen.map(({ text, emoji }, i) => {
          return (
            <motion.button
              key={text}
              transition={{
                delay: 0.2 * i,
              }}
              initial={{ y: "10%", opacity: 0 }}
              animate={{ y: inView ? "0%" : "10%", opacity: inView ? 1 : 0 }}
              onClick={() => {
                setSelected(() => text);
              }}
              style={{
                background: selected === text ? "#FC9B84" : "",
                color: selected === text ? "black" : "",
              }}
              className="p-3 rounded-full px-5 border-themeOrange border-2 text-themeOrange font-semibold duration-300 max-lg:w-fit max-lg:p-2 max-lg:px-4 max-lg:flex flex "
            >
              <p className="whitespace-nowrap ">{text}</p> <p>{emoji}</p>
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {amen?.map((a, i) => {
          if (a.text === selected) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                className="flex justify-center items-center gap-16 w-full  max-lg:gap-5 max-lg:flex-col-reverse"
              >
                <div className="w-2/3 max-lg:w-full h-fit">
                  <img
                    className="h-96 w-full object-cover"
                    src={a.image}
                    alt=""
                  />
                </div>
                <div className="w-2/3 flex flex-col gap-3 max-lg:w-full max-lg:text-center">
                  <div className="text-2xl font-semibold">{a.text}</div>
                  <div>{a.description}</div>
                </div>
              </motion.div>
            );
          } else {
            return <div key={i} className="hidden"></div>;
          }
        })}
      </AnimatePresence>
    </div>
  );
}
