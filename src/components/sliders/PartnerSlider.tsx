"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const partnersImages = [
  "/images/partners/empresa1.png",
  "/images/partners/empresa2.png",
  "/images/partners/empresa3.png",
  "/images/partners/empresa4.png",
];

export default function PartnerSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <motion.section
      className="relative mt-10 w-full max-w-4xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Garanta que os botões existam ao conectar
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
        {partnersImages.map((src, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="transition-all duration-300 ease-in-out"
            >
              <div className="p-4 rounded-xl bg-white/5 shadow-md hover:shadow-[#C39C68]/60 transition-shadow duration-300 w-fit mx-auto my-5">
                <Image
                  src={src}
                  alt={`Parceiro ${i}`}
                  width={360}
                  height={200}
                  className="mx-auto object-contain max-h-[360px]"
                  priority
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
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#C39C68] p-2 rounded-full hover:bg-[#a48452] transition-all duration-300 ease-in-out"
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
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#C39C68] p-2 rounded-full hover:bg-[#a48452] transition-all duration-300 ease-in-out"
        aria-label="Próximo"
      >
        <svg width="20" height="20" fill="black" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </motion.button>
    </motion.section>
  );
}
