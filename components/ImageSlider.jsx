import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/korea.jpeg", alt: "Image 1" },
  { src: "/japan.jpg", alt: "Image 2" },
  { src: "/usaHD.jpg", alt: "Image 3" },
  { src: "/germany.jpeg", alt: "Image 4" },
];

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(0);
  const [inView, setInView] = useState(false);

  const paginate = (newDirection) => {
    setPage(
      (prevPage) => (prevPage + newDirection + images.length) % images.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      paginate(1);
    }, 2000); // Auto-slide interval

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

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      clearInterval(autoSlide);
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const getPrevIndex = () => (page - 1 + images.length) % images.length;
  const getNextIndex = () => (page + 1) % images.length;

  return (
    <div
      ref={sliderRef}
      className="flex flex-col p-4 items-center justify-between h-[900px]"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "40px",
          fontWeight: 700,
          lineHeight: "54px",
          textAlign: "center",
          color: "#1C244B",
          marginBottom: "20px", // Added vertical space between heading and image slider
        }}
      >
        Popular Visa Destinations
      </motion.p>
      <div
        className="relative w-full h-[600px] flex justify-center items-center"
        style={{ marginBottom: "20px" }} // Added vertical space between image slider and buttons
      >
        <div className="relative w-[80%] h-full flex justify-center items-center">
          <motion.div
            key={getPrevIndex()}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 w-1/4 h-full z-[1] transform -translate-x-1/2"
          >
            <img
              src={images[getPrevIndex()].src}
              alt={images[getPrevIndex()].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
          <motion.div
            key={page}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full max-w-[800px] h-full z-[2] md:max-w-[600px] sm:max-w-[400px] xs:max-w-[300px]"
          >
            <img
              src={images[page].src}
              alt={images[page].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
          <motion.div
            key={getNextIndex()}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 w-1/4 h-full z-[1] transform translate-x-1/2"
          >
            <img
              src={images[getNextIndex()].src}
              alt={images[getNextIndex()].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex mt-4">
        <button
          onClick={() => paginate(-1)}
          className="bg-gray-300 p-2 rounded-full mr-2"
        >
          ⬅️
        </button>
        <button
          onClick={() => paginate(1)}
          className="bg-gray-300 p-2 rounded-full"
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
