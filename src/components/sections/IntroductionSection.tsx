import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function IntroductionSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo Pam Pinheiro"
          width={160}
          height={160}
          className="mb-6"
        />
      </motion.div>
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-[#C39C68]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Pam Pinheiro
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl text-[#F9F6F1] max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Especialista em Publicidade Digital, ajudando marcas a se conectarem com
        propósito e presença online.
      </motion.p>
      <Button
        href="#services"
        className="flex items-center gap-2"
        text="Ver Serviços"
      />
    </section>
  );
}
