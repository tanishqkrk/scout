import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Process() {
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
    height: "auto",
    minHeight: "978px",
    top: "-30px",
    borderRadius: "30px",
    background: "linear-gradient(180deg, #1C244B 0%, #414C80 100%)",
    position: "relative",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    justifyContent: "start",
    alignItems: "center",
    color: "#ffffff",
    padding: "20px",
    paddingTop: "100px",
  };

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  };

  const cardContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
  };

  const cardStyles = {
    maxWidth: "700px",
    width: "100%",
    height: "auto",
    background: "#ffffff",
    borderRadius: "6px",
    margin: "10px",
    padding: "40px 20px",
    color: "#000000",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxSizing: "border-box",
  };

  return (
    <section ref={sectionRef} className="w-full" style={sectionStyles}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={contentStyles}
      >
        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ fontWeight: 700 }}
            className="font-satoshi font-bold text-center text-xl md:text-2xl lg:text-4xl"
          >
            Apostillation Process
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ fontWeight: 400 }}
            className="font-satoshi md:text-lg lg:text-2xl"
          >
            Here are two pathways for apostiling a document from India
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={cardContainerStyles}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={cardStyles}
        >
          <div>
            <p
              style={{
                color: "#1E295E",
                fontSize: "64px",
                fontWeight: 400,
              }}
              className="font-satoshi"
            >
              Route 01
            </p>
            <div className="flex flex-col gap-2">
              <p
                style={{ fontWeight: 500, fontSize: "32px", color: "#1E295E" }}
              >
                SDM (Sub Divisional Magistrate, Delhi)
              </p>
              <p style={{ fontWeight: 500, fontSize: "16px" }}>
                7 to 10 Working days
              </p>
            </div>
          </div>
          <div>
            <p>Consulate attestation of the destination country</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={cardStyles}
        >
          <div>
            <p
              style={{
                color: "#1E295E",
                fontSize: "64px",
                fontWeight: 400,
              }}
              className="font-satoshi"
            >
              Route 02
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p
              className="leading-tight"
              style={{ fontWeight: 500, fontSize: "32px", color: "#1E295E" }}
            >
              State Home Department where the institution is located (SHD,
              Karnataka)
            </p>
            <p style={{ fontWeight: 500, fontSize: "16px" }}>
              35 to 40 working days
            </p>
          </div>
          <div>
            <p>
              MEA attests
              <br />
              Consulate attestation of the destination country
            </p>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{ fontWeight: 400 }}
          className="font-satoshi md:px-40 text-justify md:text-lg lg:text-2xl mt-10"
        >
          Both routes entail specific steps in the attestation process, with the
          provided timelines offering an estimate for each route&apos;s
          processing duration. Choose the route based on your urgency and
          requirements. While Route 2 is recommended by government agencies,
          Route 1 has gained popularity due to a shorter turnaround time.
          It&apos;s noteworthy that there are no specific government guidelines
          advising against opting for Route 1.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Process;
