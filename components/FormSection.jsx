import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function FormSection() {
  const myRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // Adjust threshold as needed
      }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    // Check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
      window.removeEventListener("resize", handleResize); // Remove resize event listener
    };
  }, []);

  const sectionStyles = {
    borderRadius: "33px 33px 0px 0px",
    backgroundImage: "url('/sky.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "space-between",
  };

  const div2Styles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1C244B",
    padding: "36px 70px", // Adjust padding for smaller screens
    // borderRadius: "30px",
    boxShadow:
      "0px 9px 20px 0px #8585851A, 0px 36px 36px 0px #85858517, 0px 82px 49px 0px #8585850D, 0px 146px 58px 0px #85858503, 0px 228px 64px 0px #85858500",
  };

  return (
    <section
      className="flex flex-col md:flex-row lg:h-[440px] sm:h-[350px]"
      style={sectionStyles}
    >
      {!isMobile && (
        <div
          ref={myRef}
          className="w-full md:w-1/2 mb-4 md:mb-0 flex items-center"
        >
          <div className="flex flex-col pl-8 w-full">
            <p
              style={{ fontSize: "48px" }}
              className="w-[326px] h-[130px] text-black font-satoshi font-bold text-4xl leading-[64.8px] text-left"
            >
              Travel without limit
            </p>
            <p
              style={{ fontSize: "24px" }}
              className="font-satoshi text-base font-normal leading-[32.4px]  h-[32px]"
            >
              Find the right visa, apply in seconds and travel safely
            </p>
          </div>
        </div>
      )}
      <div
        className={`w-full ${
          isMobile ? "h-full" : "md:w-1/2"
        } flex pb-0  p-6 overflow-hidden items-end`}
      >
        <div
          className="w-full md:w-3/4  space-y-4 rounded-b-none rounded-3xl"
          style={div2Styles}
        >
          <form action="#" className="">
            <div className="flex flex-col space-y-2">
              <input
                className="block w-full p-3 text-sm text-gray-900 border rounded-lg bg-white"
                placeholder="Your Name"
                type="text"
                style={{ outline: "none", maxWidth: "100%" }}
                id="name"
                required
              />
              <input
                className="block w-full p-3 text-sm text-gray-900 border rounded-lg bg-white"
                placeholder="Your Email"
                type="email"
                style={{ outline: "none", maxWidth: "100%" }}
                id="email"
                required
              />
              <textarea
                className="block w-full p-3 text-sm text-gray-900 border rounded-lg bg-white resize-none"
                placeholder="Your Message"
                style={{
                  outline: "none",
                  minHeight: "100px",
                  maxWidth: "100%",
                }}
                id="message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
