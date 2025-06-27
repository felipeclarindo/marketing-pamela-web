"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { ButtonProps } from "@/types";

export default function Button({
  href,
  text,
  icon,
  className,
  target,
}: Readonly<ButtonProps>) {
  return (
    <motion.a
      href={href}
      target={target}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "bg-[#C39C68]/20 backdrop-blur-lg duration-300 ease-in-out mt-8 text-[#C39C68] px-6 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#C39C68]/40 transition-all border border-[#C39C68]/50 duration-300 cursor-pointer",
        className
      )}
    >
      {icon}
      {text}
    </motion.a>
  );
}
