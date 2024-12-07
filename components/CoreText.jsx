"use client";

import useMotion from "@/context/MotionContext";

export default function Text({
  inView = true,
  text = "",
  color = "",
  initial = "150%",
  animate = 0,
  delay = 0.3,
  duration = 1,
  custom = "",
}) {
  const { M } = useMotion();
  //   const inView = (ref) => useInView(ref, { once: false });
  return (
    <div
      className={`overflow-hidden   cursor-pointer flex justify-start w-full ${color} ${custom}`}
    >
      <M.div
        initial={{ y: initial }}
        animate={{ y: inView ? animate : initial }}
        transition={{ duration: duration, delay: delay, type: "spring" }}
        className="flex items-center gap-4 "
      >
        {text}
      </M.div>
    </div>
  );
}
