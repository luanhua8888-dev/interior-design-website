import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { getImageUrl } from '../utils/images';
import { getContent } from '../utils/content';

const categories = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'villa', label: 'Biệt Thự' },
  { id: 'apartment', label: 'Căn Hộ' },
  { id: 'living', label: 'Phòng Khách' },
  { id: 'kitchen', label: 'Nhà Bếp' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: getContent('portfolio_1_title'),
      category: 'apartment',
      tags: ['apartment', 'living'],
      location: getContent('portfolio_1_location'),
      imageKey: 'portfolio_1_image',
    },
    {
      id: 2,
      title: getContent('portfolio_2_title'),
      category: 'villa',
      tags: ['villa'],
      location: getContent('portfolio_2_location'),
      imageKey: 'portfolio_2_image',
    },
    {
      id: 3,
      title: getContent('portfolio_3_title'),
      category: 'kitchen',
      tags: ['kitchen'],
      location: getContent('portfolio_3_location'),
      imageKey: 'portfolio_3_image',
    },
    {
      id: 4,
      title: getContent('portfolio_4_title'),
      category: 'living',
      tags: ['living'],
      location: getContent('portfolio_4_location'),
      imageKey: 'portfolio_4_image',
    },
    {
      id: 5,
      title: getContent('portfolio_5_title'),
      category: 'apartment',
      tags: ['apartment'],
      location: getContent('portfolio_5_location'),
      imageKey: 'portfolio_5_image',
    },
    {
      id: 6,
      title: getContent('portfolio_6_title'),
      category: 'kitchen',
      tags: ['kitchen'],
      location: getContent('portfolio_6_location'),
      imageKey: 'portfolio_6_image',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-luxury-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 text-accent-gold mb-4">
                <span className="h-[1px] w-6 bg-accent-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                  Kiệt Tác Đã Thực Hiện
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-wide text-white">
                Dự Án <span className="gold-text-gradient italic font-normal">Tiêu Biểu</span>
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Filters (Active Pill Sliding Animation) */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex flex-wrap gap-2 md:gap-3 bg-luxury-gray/40 border border-white/5 p-1.5 rounded-xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className="relative px-4 py-2 text-xs uppercase tracking-widest cursor-pointer transition-colors duration-300 font-semibold rounded-lg"
                >
                  {activeFilter === category.id && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-accent-gold rounded-lg shadow-[0_5px_15px_rgba(197,168,128,0.25)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeFilter === category.id ? 'text-luxury-dark' : 'text-gray-400 hover:text-white'
                  }`}>
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={(index % 3) * 0.1}
                scale={0.96}
                blur={true}
                duration={0.8}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[4/3] w-full overflow-hidden bg-luxury-gray border border-white/5 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(197,168,128,0.1)] hover:border-accent-gold/20 hover:scale-[1.01] transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:transition-transform before:duration-1000 before:z-20"
                >
                  {/* Image */}
                  <img
                    src={getImageUrl(project.imageKey)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/95 via-luxury-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 z-10" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="flex items-center gap-2 text-accent-gold mb-2">
                      <span className="h-[1px] w-4 bg-accent-gold" />
                      <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">
                        {project.category === 'villa' ? 'Biệt Thự' : project.category === 'apartment' ? 'Căn Hộ' : 'Nội Thất'}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-light text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[11px] text-gray-400 font-light flex items-center justify-between">
                      <span>{project.location}</span>
                      <span className="text-accent-gold border border-accent-gold/30 p-1.5 rounded-full hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-300">
                        <Plus size={12} />
                      </span>
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
