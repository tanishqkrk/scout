import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionStyles = {
    position: "relative",
    zIndex: "0",
    backgroundImage: "url('/planeWing.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  return (
    <div>
      <section
        ref={sectionRef}
        style={sectionStyles}
        className="relative h-screen md:h-[700px] w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-10 flex flex-col items-start justify-center h-full p-10 space-y-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-satoshi font-bold text-xl md:text-xl lg:text-3xl text-left"
          >
            What Is Apostillation?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-satoshi py-10 md:text-base md:pr-[40%] lg:text-lg font-normal leading-[28px] text-left"
          >
            Apostillation is the process of authenticating a document for
            international use through the issuance of an &quot;apostille&quot;
            certificate. This certificate, provided by a designated government
            authority, verifies the document&apos;s legitimacy and facilitates
            recognition in countries that are part of the Hague Apostille
            Convention. The convention simplifies the acceptance of documents
            across member countries without further legalization. Apostilles are
            commonly used for various legal and personal documents when
            presented in foreign jurisdictions.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
