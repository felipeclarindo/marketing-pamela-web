"use client";

import { motion } from "framer-motion";
import { Instagram, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="min-h-[700px] py-20 text-center bg-[#0A0A0A] px-6">
      <h2 className="text-3xl font-bold text-[#C39C68]">
        Pronto para elevar sua marca?
      </h2>
      <p className="mt-4 max-w-xl mx-auto text-[#F9F6F1]">
        Vamos conversar e transformar suas ideias em resultados digitais reais.
      </p>

      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        <motion.a
          href="https://wa.me/558594273487"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#C39C68]/20 backdrop-blur-lg duration-300 ease-in-out text-[#C39C68] px-6 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#C39C68]/40 transition-all border border-[#C39C68]/50"
        >
          <MessageSquare className="w-5 h-5" />
          WhatsApp
        </motion.a>

        <motion.a
          href="https://www.instagram.com/pamelareginarocha"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg duration-300 ease-in-out text-white px-6 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-white/30 transition-all border border-white/20"
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </motion.a>
      </div>
    </section>
  );
}
