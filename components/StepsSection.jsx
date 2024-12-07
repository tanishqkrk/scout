import React, { useRef, useEffect, useState } from "react";
import Text from "./CoreText";
import { motion } from "framer-motion";
const fontSizeRem = 6.037; // Convert font size from pixels to rem
const widthRem = 23.75; // Convert width from pixels to rem
const heightRem = 8.125;
const steps = [
  {
    stepNo: "01",
    content: "Find out the visa details",
    gradient: "gradient1",
  },
  {
    stepNo: "02",
    content: "Sign in and pay",
    gradient: "gradient2",
  },
  {
    stepNo: "03",
    content: "Upload Necessary documents",
    gradient: "gradient3",
  },
  {
    stepNo: "04",
    content: "We prepare Visa Package",
    gradient: "gradient4",
  },
];

function StepsSection() {
  const stepsSectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust threshold as needed
      }
    );

    if (stepsSectionRef.current) {
      observer.observe(stepsSectionRef.current);
    }

    return () => {
      if (stepsSectionRef.current) {
        observer.unobserve(stepsSectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={stepsSectionRef} className="w-full flex flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="w-full lg:w-1/4 flex justify-center mb-8 lg:mb-0"
        style={{
          height: "17rem", // Adjusted to rem
          borderRadius: "1.5rem 0 0 0", // Adjusted to rem
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="rounded-xl flex items-center justify-center"
          style={{
            height: "17rem", // Adjusted to rem
            width: "20rem", // Adjusted to rem
            borderRadius: "1.5rem", // Adjusted to rem
            backgroundColor: "#0D1323",
          }}
        >
          <div className="px-6 flex">
            <Text
              delay={0.65}
              custom="text-white justify-center font-satoshi text-3xl font-medium leading-11 text-left"
              text="Navigate Your Visa Process with Us"
            ></Text>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              style={{ width: "5.4375rem", height: "5.4375rem" }} // Adjusted to rem
              alt="hero"
              src={"/airplane.png"}
            />
          </div>
        </motion.div>
      </motion.div>
      <div
        className="w-full lg:w-3/4 overflow-hidden md:grid md:grid-cols-2 gap-6 md:flex-col sm:flex-col lg:flex-wrap justify-center"
        style={{ padding: "0 1.25rem" }} // Adjusted to rem
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: 0 }}
            transition={{ delay: 0.65 + index * 0.2, duration: 0.5 }}
            className={`p-4 ${step.gradient} flex-shrink-0`}
          >
            <div className="w-full flex justify-start gap-4 h-[50%]  flex p-4 items-center">
              {" "}
              {/* Adjusted to rem */}
              <motion.p
                initial={{ y: "150%" }}
                animate={{ y: inView ? "0%" : "150%" }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                }}
                style={{
                  fontSize: "xxx-Large",
                  fontSize: "100px",
                  fontWeight: 200,
                }}
                className={`  font-satoshi font-light`}
              >
                {step.stepNo}
              </motion.p>
              <motion.p
                initial={{ y: "150%" }}
                animate={{ y: inView ? "0%" : "150%" }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                }}
                style={{
                  fontSize: "21px",
                  fontWeight: 200,
                }}
                className="font-satoshi text-lg font-normal leading-8 text-left w-17rem h-4.25rem mt-1.25rem"
              >
                {step.content}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StepsSection;
