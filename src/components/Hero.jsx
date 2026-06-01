import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { getImageUrl } from '../utils/images';
import { getContent } from '../utils/content';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  const slides = [
    {
      imageKey: 'hero_slide_1_image',
      title: getContent('hero_slide_1_title'),
      subtitle: getContent('hero_slide_1_subtitle'),
    },
    {
      imageKey: 'hero_slide_2_image',
      title: getContent('hero_slide_2_title'),
      subtitle: getContent('hero_slide_2_subtitle'),
    },
    {
      imageKey: 'hero_slide_3_image',
      title: getContent('hero_slide_3_title'),
      subtitle: getContent('hero_slide_3_subtitle'),
    },
  ];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Custom Swiper Slide */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1.5 transition-all duration-300 rounded-full inline-block cursor-pointer',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-accent-gold !scale-125 !opacity-100',
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src={getImageUrl(slide.imageKey)}
                alt={slide.title}
                className="h-full w-full object-cover object-center scale-105 animate-[zoomOut_20s_infinite_alternate]"
                style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                loading="eager"
              />
              {/* Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent" />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-4xl">
                {/* Accent Golden Line & Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-4 flex items-center justify-center gap-3 text-accent-gold"
                >
                  <span className="h-[1px] w-8 bg-accent-gold" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] md:text-sm font-semibold">
                    Luxury Interior Design
                  </span>
                  <span className="h-[1px] w-8 bg-accent-gold" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-serif text-4xl font-light tracking-wide text-white sm:text-5xl md:text-7xl leading-tight mb-6"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mx-auto max-w-2xl font-sans text-sm md:text-base font-light leading-relaxed text-gray-300 mb-10"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="inline-flex cursor-pointer items-center justify-center border border-accent-gold bg-accent-gold/10 px-8 py-4 font-sans text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-gold hover:text-luxury-dark hover:shadow-[0_0_20px_rgba(197,168,128,0.4)]"
                  >
                    Nhận Tư Vấn Miễn Phí
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="hero-prev absolute left-6 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/30 text-white rounded-full transition-all duration-300 hover:border-accent-gold hover:bg-accent-gold hover:text-luxury-dark cursor-pointer md:left-10">
          <ChevronLeft size={20} />
        </button>
        <button className="hero-next absolute right-6 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/30 text-white rounded-full transition-all duration-300 hover:border-accent-gold hover:bg-accent-gold hover:text-luxury-dark cursor-pointer md:right-10">
          <ChevronRight size={20} />
        </button>
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center hidden md:block">
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-80}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-accent-gold transition-colors duration-300 cursor-pointer"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-light">Cuộn Xuống</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="h-7 w-4 rounded-full border border-white/40 flex items-start justify-center p-1"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
          </motion.div>
        </Link>
      </div>

      {/* Zoom Animation (embedded for CSS compatibility) */}
      <style>{`
        @keyframes zoomOut {
          0% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1.0);
          }
        }
      `}</style>
    </section>
  );
}
