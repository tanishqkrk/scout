import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Features() {
  const featuresRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section className="earth-bg relative" ref={featuresRef}>
      <div className="overlay">
        <div className="flex flex-col items-center justify-between h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap justify-around w-full"
            style={{ paddingTop: "80px" }}
          >
            {[
              { label: "Visa Packages Processed", value: "500K+" },
              { label: "Approval Rate", value: "99%" },
              { label: "Countries Served", value: "150+" },
              { label: "Satisfied Clients", value: "1M+" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-2 sm:mb-4"
              >
                {" "}
                {/* Adjusted spacing here */}
                <img src="/globe1.png" className="w-[43px] h-[43px]" />
                <div className="flex flex-col">
                  <p
                    className="text-white font-satoshi text-center text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.3rem]"
                    style={{ color: "rgba(255, 255, 255, 0.53)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-white font-satoshi text-center font-bold text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="relative w-full">
            <motion.img
              src="/halfGlobe.png"
              alt="globe"
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-center gap-6">
                <p className="text-white font-satoshi font-bold text-center text-lg md:text-2xl lg:text-4xl">
                  Unlocking Global <br />
                  Opportunities with Ease
                </p>
                <p
                  className="text-white font-satoshi text-center  text-md lg:text-2xl leading-tight"
                  style={{ color: "rgba(210, 217, 255, 0.53)" }}
                >
                  Your Trusted Partner for Visa Success
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
