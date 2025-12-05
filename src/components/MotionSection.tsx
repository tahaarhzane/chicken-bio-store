"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface MotionSectionProps extends HTMLMotionProps<"section"> {}

export default function MotionSection(props: MotionSectionProps) {
  return <motion.section {...props} />;
}