import { motion } from "framer-motion";
import PartnerSliderWrapper from "../ui/PartnerSliderWrapper";

export default function PartnerSection() {
  return (
    <section className="min-h-screen py-20 text-center px-6 bg-gradient-to-b">
      <motion.h2
        className="text-4xl font-bold text-[#C39C68] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Empresas Parceiras
      </motion.h2>
      <PartnerSliderWrapper />
    </section>
  );
}
