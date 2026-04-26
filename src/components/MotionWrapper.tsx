"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionLi = motion.li;

export const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function PageWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}
