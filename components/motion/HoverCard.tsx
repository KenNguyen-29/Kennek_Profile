"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export default function HoverCard({
  children,
  className,
  ...props
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{ scale: 0.99 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
