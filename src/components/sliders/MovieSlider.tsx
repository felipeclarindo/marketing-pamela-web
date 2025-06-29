"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const partnerVideos = [
  "/images/movies/Aniversario.mp4",
  "/images/movies/Banda.mp4",
  "/images/movies/CaptacaoNaPraia.mp4",
  "/images/movies/CavalosAdastrados.mp4",
  "/images/movies/CrecheDois.mp4",
  "/images/movies/Creche.mp4",
  "/images/movies/Dentista.mp4",
  "/images/movies/EventoJunina.mp4",
  "/images/movies/ExposicaoDeGadoDois.mp4",
  "/images/movies/ExposicaoDeGadoTres.mp4",
  "/images/movies/ExposicaoDeGado.mp4",
  "/images/movies/InauguracaoEstacio.mp4",
];

export default function MovieSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === swiper.realIndex) {
        video
          .play()
          .catch((err) => console.warn("Erro ao reproduzir o vídeo:", err));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

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
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setTimeout(() => {
            handleSlideChange(swiper);
          }, 100);
        }}
        onSlideChange={handleSlideChange}
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
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={src}
                  controls
                  playsInline
                  muted
                  preload="auto"
                  className="w-full max-w-[350px] min-h-[349px] rounded-lg object-cover shadow-md"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação */}
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
