"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  "/images/partners/empresa1.PNG",
  "/images/partners/empresa2.png",
  "/images/partners/empresa3.PNG",
  "/images/partners/empresa4.PNG",
];

export default function PartnerSlider() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 1 },
        }}
        className="px-4"
      >
        {partners.map((src, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="transition-transform duration-300 ease-in-out"
            >
              <Image
                src={src}
                alt={`Parceiro ${i}`}
                width={360}
                height={240}
                className="rounded-xl bg-white/5 p-4 mx-auto shadow-lg hover:shadow-[#C39C68]/40 transition-all duration-300"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
