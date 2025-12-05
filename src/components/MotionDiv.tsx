"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface MotionDivProps extends HTMLMotionProps<"div"> {}

export default function MotionDiv(props: MotionDivProps) {
  return <motion.div {...props} />;
}