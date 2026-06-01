import React from 'react';
import { Crown, Sparkles, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import ScrollReveal from './ScrollReveal';
import { getImageUrl } from '../utils/images';
import { getContent } from '../utils/content';

export default function Services() {
  const services = [
    {
      icon: <Crown className="w-8 h-8 text-accent-gold" />,
      title: getContent('service_1_title'),
      description: getContent('service_1_desc'),
      imageKey: 'service_1_image',
      delay: 0.1,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent-gold" />,
      title: getContent('service_2_title'),
      description: getContent('service_2_desc'),
      imageKey: 'service_2_image',
      delay: 0.2,
    },
    {
      icon: <Hammer className="w-8 h-8 text-accent-gold" />,
      title: getContent('service_3_title'),
      description: getContent('service_3_desc'),
      imageKey: 'service_3_image',
      delay: 0.3,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 bg-luxury-gray text-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center justify-center gap-3 text-accent-gold mb-4">
              <span className="h-[1px] w-6 bg-accent-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                Dịch Vụ Của Chúng Tôi
              </span>
              <span className="h-[1px] w-6 bg-accent-gold" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-wide text-white">
              Giải Pháp <span className="gold-text-gradient italic font-normal">Toàn Diện & Cao Cấp</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm font-light text-gray-400 mt-5 leading-relaxed max-w-2xl mx-auto">
              AURA mang đến các giải pháp thiết kế thi công khép kín từ ý tưởng đến thực tế, mang lại sự an tâm tuyệt đối và tối ưu chi phí cho chủ đầu tư.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={service.delay} duration={1.0} scale={0.95} blur={true}>
              <div className="group relative flex flex-col h-full bg-luxury-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent-gold/30 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(197,168,128,0.12)] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:transition-transform before:duration-1000 before:z-20">
                
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <img
                    src={getImageUrl(service.imageKey)}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Black gradient overlay over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark to-transparent opacity-80" />
                  
                  {/* Float Icon */}
                  <div className="absolute bottom-4 left-6 bg-luxury-dark/95 backdrop-blur-sm border border-white/10 p-3 rounded-full flex items-center justify-center shadow-lg transform group-hover:border-accent-gold/40 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-white mb-4 group-hover:text-accent-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm font-light text-gray-400 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer Action Link */}
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      to="contact"
                      smooth={true}
                      duration={800}
                      offset={-80}
                      className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-gold group-hover:text-white transition-colors duration-300"
                    >
                      Liên Hệ Tư Vấn
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
