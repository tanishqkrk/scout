import Link from "next/link";
import { motion } from "framer-motion";
export default function GalleryComponent({ title, image, link, inView }) {
  return (
    <Link href={link}>
      <motion.div
        initial={{
          opacity: 0,
          y: "50%",
        }}
        animate={{
          opacity: inView ? "100%" : 0,
          y: inView ? "0" : "50%",
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          // type: "spring",
        }}
        style={{
          pointerEvents: inView ? "all" : "none",
        }}
        className="relative rounded-xl h-full w-full group overflow-hidden"
      >
        <img
          className="h-full w-full object-cover rounded-xl group-hover:scale-105 duration-200 max-lg:h-[60vh]"
          src={image}
          alt=""
        />
        <div className="w-full h-36 bg-gradient-to-t from-black to-transparent absolute bottom-0 rounded-xl"></div>
        <div className="absolute bottom-3 left-3 text-white max-md:bottom-12 max-md:text-xl max-md:font-semibold max-md:left-6">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}
