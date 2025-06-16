"use client";

import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Criação de Conteúdo",
    desc: "Planejamento e produção de conteúdo para redes sociais que geram engajamento e autoridade.",
  },
  {
    title: "Gestão de Mídias Sociais",
    desc: "Cresça com estratégia, identidade e consistência nas principais plataformas.",
  },
  {
    title: "Campanhas Publicitárias",
    desc: "Criação, monitoramento e otimização de anúncios online para resultados reais.",
  },
];

// const clients = [];

// const partners = [];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#0A0A0A] overflow-x-hidden overflow-y-auto text-white">
      <AnimatedBackground />

      {/* HERO */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
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
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          Pam Pinheiro
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-[#F9F6F1] max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          Especialista em Publicidade Digital, ajudando marcas a se conectarem
          com propósito e presença online.
        </motion.p>
        <motion.a
          href="https://wa.me/55859427-3487"
          target="_blank"
          className="mt-8 bg-[#C39C68] text-black px-6 py-3 rounded-full hover:opacity-90 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
        >
          Fale Comigo
        </motion.a>
      </section>

      {/* SOBRE */}
      <section className="relative z-10 py-20 text-center bg-[#1A1A1A] px-6">
        <h2 className="text-3xl font-bold text-[#C39C68]">Sobre Mim</h2>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-[#F9F6F1]">
          Com paixão por comunicação e criatividade, atuo há mais de 5 anos
          ajudando marcas a se posicionarem com autenticidade no meio digital.
          Minha missão é transformar ideias em estratégias que geram valor e
          resultados reais.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="relative z-10 py-20 text-center bg-[#0A0A0A] px-6">
        <h2 className="text-3xl font-bold text-[#C39C68]">Serviços</h2>
        <p className="text-[#F9F6F1] mt-2 mb-10">
          Tudo o que você precisa para alavancar sua presença online.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-black/50 p-6 rounded-xl border border-[#C39C68] hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-[#C39C68]">
                {s.title}
              </h3>
              <p className="mt-3 text-[#F9F6F1]">{s.desc}</p>
            </div>
          ))}
        </div> */}
      </section>

      {/* CLIENTES */}
      <section className="relative z-10 py-20 text-center bg-[#1A1A1A] px-6">
        <h2 className="text-3xl font-bold text-[#C39C68]">Clientes</h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#F9F6F1]">
          Marcas que confiaram na Pam Pinheiro:
        </p>
        {/* <div className="flex flex-row overflow-x-auto gap-6 mt-10 px-4 scrollbar-hide">
          {clients.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Cliente ${i}`}
              width={140}
              height={80}
              className="rounded-lg bg-white/10 p-2 flex-shrink-0"
            />
          ))}
        </div> */}
      </section>

      {/* PARCEIROS */}
      <section className="relative z-10 py-20 text-center bg-[#0A0A0A] px-6">
        <h2 className="text-3xl font-bold text-[#C39C68]">
          Empresas Parceiras
        </h2>
        {/* <div className="flex flex-row overflow-x-auto gap-6 mt-10 px-4 scrollbar-hide">
          {partners.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Parceiro ${i}`}
              width={140}
              height={80}
              className="rounded-lg bg-white/10 p-2 flex-shrink-0"
            />
          ))}
        </div> */}
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-20 text-center bg-[#1A1A1A] px-6">
        <h2 className="text-3xl font-bold text-[#C39C68]">
          Pronto para elevar sua marca?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-[#F9F6F1]">
          Vamos conversar e transformar suas ideias em resultados digitais
          reais.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/5571999999999"
            target="_blank"
            className="bg-[#C39C68] text-black px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/pam.pinheiro"
            target="_blank"
            className="bg-white text-[#1A1A1A] px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
