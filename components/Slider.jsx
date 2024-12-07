import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    author: "Seasoned Experts",
    content:
      "Empowering journeys for two decades, our company boasts a robust culture anchored in excellence. With mastery in Visa Services, trust our seasoned expertise for seamless experiences.",
    image: "ic1.png",
  },
  {
    author: "Personalized Guidance",
    content:
      "Empowering journeys for two decades, our company boasts a robust culture anchored in excellence. With mastery in Visa Services, trust our seasoned expertise for seamless experiences.",
    image: "ic2.png",
  },
  {
    author: "Customer-Centric Approach",
    content:
      "Empowering journeys for two decades, our company boasts a robust culture anchored in excellence. With mastery in Visa Services, trust our seasoned expertise for seamless experiences.",
    image: "ic3.png",
  },
  {
    author: "Global Reach",
    content:
      "With a presence in multiple countries, we facilitate a smooth visa process, ensuring a hassle-free experience. Trust us for your international travel needs.",
    image: "ic2.png",
  },
  {
    author: "Expert Assistance",
    content:
      "Our dedicated team provides expert assistance, ensuring that your visa applications are handled with care and precision. Your satisfaction is our priority.",
    image: "ic3.png",
  },
  {
    author: "Reliable Service",
    content:
      "For over twenty years, our reliable visa services have helped countless clients achieve their travel goals. Count on us for your visa needs.",
    image: "ic1.png",
  },
];

const TestimonialSlider = () => {
  const testimonialRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3),
      newDirection,
    ]);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      paginate(1);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      clearInterval(autoSlide);
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [page]);

  return (
    <div
      ref={testimonialRef}
      className="flex flex-col justify-center py-2 space-y-2 w-full"
      style={{ alignItems: "center" }}
    >
      <div className="w-full p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        {[...testimonials, ...testimonials]
          .slice(page * 3, page * 3 + 3)
          .map((testimonial, index) => (
            <motion.div
              key={`${page}-${index}`}
              className="testimonial-card p-4 rounded-lg shadow-lg bg-white w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                borderRadius: "1rem",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="block w-full">
                <div className="flex flex-col items-center">
                  <div className="mt-4">
                    <motion.img
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      src={`${testimonial.image}`}
                      alt="logo"
                    />
                  </div>
                  <div className="py-4">
                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="font-satoshi text-lg font-normal leading-8 text-blue-800"
                    >
                      {testimonial.author}
                    </motion.p>
                  </div>
                </div>
                <div className="mt-4">
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    {testimonial.content}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
      <div className="flex">
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

export default TestimonialSlider;
