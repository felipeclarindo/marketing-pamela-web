"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const personalsImages = [
  "/images/personal/personal1.jpeg",
  "/images/personal/personal2.jpeg",
  "/images/personal/personal3.jpeg",
  "/images/personal/personal4.jpeg",
  "/images/personal/personal5.jpeg",
];

export default function PersonalSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <motion.section
      className="relative w-full max-w-4xl mx-auto px-4 mt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
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
      >
        {personalsImages.map((src, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileTap={{ scale: 0.94 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden ring-2 ring-[#C39C68]/50 shadow-lg transition duration-300 hover:ring-[#C39C68] hover:shadow-[#C39C68]/40 scale-[0.97]">
                <Image
                  src={src}
                  alt={`Personal ${i + 1}`}
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 1238px) 100vw, 400px"
                  priority
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <motion.button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#C39C68] text-black p-3 rounded-full shadow-md hover:opacity-65 transition-all duration-300 cursor-pointer ease-in-out"
        aria-label="Anterior"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </motion.button>

      <motion.button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#C39C68] text-black p-3 rounded-full shadow-md hover:opacity-65 transition-all duration-300 cursor-pointer ease-in-out"
        aria-label="Próximo"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </motion.button>
    </motion.section>
  );
}
