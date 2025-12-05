"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface MotionPProps extends HTMLMotionProps<"p"> {}

export default function MotionP(props: MotionPProps) {
  return <motion.p {...props} />;
}