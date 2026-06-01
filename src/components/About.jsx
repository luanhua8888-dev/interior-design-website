import React from 'react';
import ScrollReveal from './ScrollReveal';
import { getImageUrl } from '../utils/images';
import { getContent } from '../utils/content';

const stats = [
  { value: '10+', label: 'Năm Kinh Nghiệm' },
  { value: '500+', label: 'Dự Án Hoàn Thành' },
  { value: '30+', label: 'Kiến Trúc Sư Tài Năng' },
  { value: '98%', label: 'Khách Hàng Hài Lòng' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-luxury-dark text-white overflow-hidden relative">
      {/* Subtle decorative background detail */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal direction="right" delay={0.1}>
              {/* Section Tagline */}
              <div className="flex items-center gap-3 text-accent-gold mb-5">
                <span className="h-[1px] w-6 bg-accent-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                  Triết Lý Thiết Kế
                </span>
              </div>
            </ScrollReveal>

            {/* Section Title */}
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.15] tracking-wide text-white mb-8">
                {getContent('about_title_1')} <br />
                <span className="gold-text-gradient font-normal italic">{getContent('about_title_2')}</span>
              </h2>
            </ScrollReveal>

            {/* Paragraphs */}
            <ScrollReveal direction="right" delay={0.3}>
              <p className="font-sans text-sm md:text-base font-light text-gray-400 leading-relaxed mb-6">
                {getContent('about_desc_1')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="font-sans text-sm md:text-base font-light text-gray-400 leading-relaxed mb-12">
                {getContent('about_desc_2')}
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/5 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left group">
                    <div className="font-serif text-3xl md:text-4xl text-accent-gold font-light mb-1 transition-transform duration-300 group-hover:translate-y-[-2px]">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[10px] uppercase tracking-widest text-gray-500 font-medium leading-normal">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.3} scale={0.95} blur={true} duration={1.2}>
              {/* Background Decorative Gold Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-accent-gold/25 translate-x-2 translate-y-2 rounded-2xl -z-10" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={getImageUrl('about_image')}
                  alt="AURA Interior Design Studio"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-all duration-500" />
              </div>

              {/* Floating Luxury Tag */}
              <div className="absolute bottom-6 right-6 bg-luxury-gray/95 backdrop-blur-md border border-accent-gold/30 p-6 shadow-2xl rounded-2xl max-w-[240px] hidden sm:block">
                <p className="font-serif text-accent-gold italic text-lg mb-1.5">"Chất lượng - Đẳng cấp - Độc bản"</p>
                <p className="font-sans text-[11px] text-gray-400 leading-relaxed font-light">
                  Mỗi công trình là một kiệt tác cá nhân hóa, nói không với sự sao chép dập khuôn.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
