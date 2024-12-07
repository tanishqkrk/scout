import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const DocumentSlider = ({ documents }) => {
  const documentRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + Math.ceil(documents.length / 3)) %
        Math.ceil(documents.length / 3),
      newDirection,
    ]);
  };

  useEffect(() => {
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

    if (documentRef.current) {
      observer.observe(documentRef.current);
    }

    return () => {
      if (documentRef.current) {
        observer.unobserve(documentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={documentRef}
      className="flex flex-col justify-center py-2 space-y-2 w-full"
      style={{ alignItems: "center" }}
    >
      <div className="w-full p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        {[...documents, ...documents]
          .slice(page * 3, page * 3 + 3)
          .map((doc, index) => (
            <motion.div
              key={`${page}-${index}`}
              className="document-card p-4 rounded-lg shadow-lg bg-white w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "linear-gradient(180deg, #1C244B 0%, #1E295F 100%)",
                padding: "1rem",
                borderRadius: "1rem",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                color: "white",
              }}
            >
              <div className="block w-full">
                <div
                  className="text-lg overflow-y-auto custom-scrollbar"
                  style={{ maxHeight: "10rem", padding: "1rem" }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                  >
                    {doc.snippets}
                  </p>
                </div>
                <div className="mt-4">
                  <Link href={doc.url} passHref>
                    <button
                      className="bg-lightBlue text-white p-2 rounded-lg w-full"
                      style={{
                        backgroundColor: "#5579C6",
                        padding: "0.5rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Download
                      </p>
                    </button>
                  </Link>
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

export default DocumentSlider;
