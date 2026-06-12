"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
