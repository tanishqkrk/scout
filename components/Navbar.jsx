import useMotion from "@/context/MotionContext";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";
import Text from "@/components/CoreText";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const linkStyles = "px-4 py-2"; // Base styles for links
  const activeLinkStyles = "text-white ease-in-out px-4 py-2 font-bold"; // Active link styles
  const { M } = useMotion();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToForm = () => {
    // Dispatch a custom event to notify the Home component to scroll to the form
    const event = new CustomEvent("scrollToForm");
    window.dispatchEvent(event);
    // Close the menu after scrolling to form
    setIsOpen(false);
  };

  // Determine if the link should be highlighted
  const isActive = (route) => pathname === route;

  return (
    <header className="flex w-full justify-between bg-theme text-white px-4 sm:px-16 py-4 items-center fixed top-0 z-[999999999]">
      <M.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <a href="/">
          <img className="w-48 h-full" src="/logo_long.svg" alt="" />
        </a>
      </M.div>
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <LayoutGroup>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:gap-8 md:text-sm absolute md:relative top-24 md:top-0 left-0 w-full md:w-auto bg-theme md:bg-transparent z-[999999999] text-center
           items-center`}
        >
          <div
            className={`${linkStyles} ${
              isActive("/") ? activeLinkStyles : ""
            } relative`}
            onClick={toggleMenu}
          >
            <Link href="/">
              <Text delay={0.4} text="Visa"></Text>
            </Link>
            {isActive("/") && (
              <M.div className="bg-blue-500 w-full h-1" layoutId="underline" />
            )}
          </div>
          <div
            className={`${linkStyles} ${
              isActive("/apostilation") ? activeLinkStyles : ""
            }`}
            onClick={toggleMenu}
          >
            <Link href="/apostilation">
              <Text delay={0.5} text="Apostilation"></Text>
            </Link>
            {isActive("/apostilation") && (
              <M.div className="bg-blue-500 w-full h-1" layoutId="underline" />
            )}
          </div>
          <a
            href=" https://wa.me/+918105679407"
            className={linkStyles}
            onClick={scrollToForm}
          >
            <Text delay={0.7} text="Contact Us"></Text>
          </a>
          <div
            className="flex items-center gap-3 px-4 py-2"
            onClick={toggleMenu}
          >
            <a
              href="/login"
              className="px-6 py-2 font-bold rounded-2xl bg-blue-700"
            >
              <M.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                }}
              >
                Sign up
              </M.div>
            </a>
          </div>
        </div>
      </LayoutGroup>
    </header>
  );
}
