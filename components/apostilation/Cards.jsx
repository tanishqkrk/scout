import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cards() {
  const gridContainerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (gridContainerRef.current) {
      observer.observe(gridContainerRef.current);
    }

    return () => {
      if (gridContainerRef.current) {
        observer.unobserve(gridContainerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={gridContainerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 w-full max-w-5xl mx-auto bg-white rounded-lg"
    >
      <Card
        title="Expertise"
        description="Benefit from our seasoned team with years of experience in visa and apostillation services."
        imgSrc="/planeWingCard.png"
        inView={inView}
        delay={0.2}
        cardStyles="bg-blue-900 text-white"
      />
      <Card
        title="Efficiency"
        description="Streamline your process with our state-of-the-art technology, ensuring swift and accurate results."
        inView={inView}
        delay={0.4}
        cardStyles="bg-blue-900 text-white"
        customClass="card-with-background"
      />
      <Card
        title="Reliability"
        description="Trust in our commitment to delivering secure and confidential handling of your documents."
        inView={inView}
        delay={0.6}
        cardStyles="bg-blue-300 text-white"
        extraContent={
          <div className="flex items-center space-x-2 mt-8">
            <div className="text-4xl font-bold">500K+</div>
            <div className="text-base">
              Visa Packages <br />
              Processed
            </div>
          </div>
        }
      />
    </div>
  );
}

function Card({
  title,
  description,
  imgSrc,
  inView,
  delay,
  cardStyles,
  extraContent,
  customClass,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`flex flex-col justify-start items-center rounded-lg shadow p-5 min-h-100 ${cardStyles} ${customClass}`}
    >
      <div className="flex flex-col justify-start p-5">
        <div className="text-xl font-bold mb-2">{title}</div>
        <div className="text-base font-light">{description}</div>
      </div>
      {imgSrc && <img src={imgSrc} alt={title} className="w-full pr-5" />}
      {extraContent}
    </motion.div>
  );
}

export default Cards;
