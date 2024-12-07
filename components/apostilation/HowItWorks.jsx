import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CircleDollarSign,
  File,
  FolderClosed,
  Mail,
  Undo2,
  UserRound,
} from "lucide-react";

function HowItWorks() {
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

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginBottom: "100px",
  };

  const titleStyles = {
    color: "#1C244B",
    fontWeight: 700,
    fontSize: "40px",
    marginBottom: "40px",
    textAlign: "center",
  };

  return (
    <div ref={containerRef} className="w-full">
      <p style={titleStyles} className="text-center">
        How it works with us?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card
          icon={<UserRound size={60} />}
          heading="Create a Profile"
          description="This is a description for card 1."
          inView={inView}
          delay={0.2}
        />
        <Card
          icon={<FolderClosed size={60} />}
          heading="Upload Your Document"
          description="This is a description for card 2."
          inView={inView}
          delay={0.4}
        />
        <Card
          icon={<CircleDollarSign size={60} />}
          heading="Review and Cost Optimization"
          description="This is a description for card 3."
          inView={inView}
          delay={0.6}
        />
        <Card
          icon={<File size={60} />}
          heading="Payment and Document Submission"
          description="This is a description for card 4."
          inView={inView}
          delay={0.8}
        />
        <Card
          icon={<Mail size={60} />}
          heading="Apostillation Process"
          description="This is a description for card 5."
          inView={inView}
          delay={1.0}
        />
        <Card
          icon={<Undo2 size={60} />}
          heading="Document Return"
          description="This is a description for card 6."
          inView={inView}
          delay={1.2}
        />
      </div>
    </div>
  );
}

function Card({ icon, heading, description, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-blue-200 rounded-lg shadow p-6 text-center"
    >
      {icon}
      <div className="font-semibold text-lg my-2">{heading}</div>
      <div className="text-sm">{description}</div>
    </motion.div>
  );
}

export default HowItWorks;
