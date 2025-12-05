"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface MotionH2Props extends HTMLMotionProps<"h2"> {}

export default function MotionH2(props: MotionH2Props) {
  return <motion.h2 {...props} />;
}