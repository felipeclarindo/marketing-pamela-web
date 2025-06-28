"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const partnerVideos = [
  "/movies/Aniversario.mp4",
  "/movies/Banda.mp4",
  "/movies/CaptacaoNaPraia.mp4",
  "/movies/CavalosAdastrados.mp4",
  "/movies/CrecheDois.mp4",
  "/movies/Creche.mp4",
  "/movies/Dentista.mp4",
  "/movies/EventoJunina.mp4",
  "/movies/ExposicaoDeGadoDois.mp4",
  "/movies/ExposicaoDeGadoTres.mp4",
  "/movies/ExposicaoDeGado.mp4",
  "/movies/InauguraçãoEstacio.mp4",
  "/movies/SaoJoaoDeFortaleza.mp4",
  "/movies/VideoInstitucionalDentista.mov",
];

export default function MovieSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <motion.section
      className="relative mt-10 w-full max-w-5xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (
            typeof swiper.params.navigation !== "boolean" &&
            swiper.params.navigation
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
          setSwiperReady(true);
        }}
        className="z-0"
      >
        {partnerVideos.map((src, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="transition-all duration-300 ease-in-out"
            >
              <div className="p-4 rounded-xl bg-black/10 backdrop-blur-sm shadow-lg hover:shadow-[#C39C68]/50 transition-shadow duration-300 w-fit mx-auto my-5">
                <video
                  src={src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-[720px] max-h-[400px] rounded-lg object-cover shadow-md"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <motion.button
        ref={prevRef}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#C39C68] p-2 rounded-full hover:bg-[#a48452] transition-all duration-300 ease-in-out cursor-pointer shadow-md"
        aria-label="Anterior"
      >
        <svg width="20" height="20" fill="black" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </motion.button>

      <motion.button
        ref={nextRef}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#C39C68] p-2 rounded-full hover:bg-[#a48452] transition-all duration-300 ease-in-out cursor-pointer shadow-md"
        aria-label="Próximo"
      >
        <svg width="20" height="20" fill="black" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </motion.button>
    </motion.section>
  );
}
