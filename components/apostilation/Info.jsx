import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Info.css";

function Info() {
  const containerRef = useRef(null);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="info-container">
      <div className="image-container">
        <Image
          src="/card1round.jpg"
          alt="Card 1"
          layout="fill"
          objectFit="cover"
          className="image"
        />
      </div>
      <div className="image-container">
        <Image
          src="/card2round.jpg"
          alt="Card 2"
          layout="fill"
          objectFit="cover"
          className="image"
        />
      </div>
      <div className="image-container large-image">
        <Image
          src="/card3round.jpg"
          alt="Card 3"
          layout="fill"
          objectFit="cover"
          className="image"
        />
      </div>
      <motion.div
        className="text-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <p className="heading">
          Our fees start from JUST <br />
          <span className="highlight">₹4,000</span>
        </p>
        <button className="rounded-full text-white font-bold bg-blue-700 px-10 py-3 mt-10">Contact Us</button>
      </motion.div>
    </div>
  );
}

export default Info;
