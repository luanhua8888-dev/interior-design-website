import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { getImageUrl } from '../utils/images';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Update container width for responsive overlay image mapping
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidth = () => {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };

    updateWidth();
    // Delay slightly to ensure layout has stabilized
    const timer = setTimeout(updateWidth, 100);

    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    
    // Bounds check
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="comparison" className="py-24 md:py-36 bg-luxury-gray text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center justify-center gap-3 text-accent-gold mb-4">
              <span className="h-[1px] w-6 bg-accent-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                Khác Biệt Thực Tế
              </span>
              <span className="h-[1px] w-6 bg-accent-gold" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-wide text-white">
              Hiện Trạng & <span className="gold-text-gradient italic font-normal">Hoàn Thiện</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm font-light text-gray-400 mt-4 leading-relaxed max-w-xl mx-auto">
              Trực quan sinh động so sánh không gian trước khi cải tạo và sau khi bàn giao bởi AURA. Kéo thanh trượt ngang để cảm nhận sự thay đổi kỳ diệu.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison Slider Container */}
        <ScrollReveal direction="up" delay={0.4} scale={0.96} blur={true} duration={1.2}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-accent-gold/25 select-none cursor-ew-resize shadow-2xl"
          >
            {/* Before Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={getImageUrl('before_image')}
                alt="Hiện trạng mặt bằng thô"
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
              {/* Label Before */}
              <span className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm border border-white/10 text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg font-semibold z-10">
                Trước Cải Tạo
              </span>
            </div>

            {/* After Image (Foreground, Dynamic Width) */}
            <div
              className="absolute inset-y-0 left-0 h-full overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={getImageUrl('after_image')}
                alt="Thi công hoàn thiện"
                className="absolute inset-y-0 left-0 h-full object-cover max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                draggable="false"
              />
              {/* Label After */}
              <span className="absolute bottom-4 left-4 bg-accent-gold text-luxury-dark font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg font-bold z-10 whitespace-nowrap"
                    style={{ left: '16px' }}>
                Bàn Giao Hoàn Thiện
              </span>
            </div>

            {/* Slider Line Handler */}
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="absolute top-0 bottom-0 w-[2px] bg-accent-gold z-20 cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Round Drag Anchor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent-gold text-luxury-dark rounded-full flex items-center justify-center shadow-lg border border-white/20 select-none transition-transform duration-300 hover:scale-110 active:scale-95">
                <ChevronsLeftRight size={16} className="animate-[pulse_3s_infinite]" />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Helper Instructions */}
        <div className="text-center mt-6">
          <p className="font-sans text-xs text-gray-500 tracking-wider">
            * Nhấp vào nút tròn màu vàng và kéo sang trái/phải để so sánh thực tế
          </p>
        </div>

      </div>
    </section>
  );
}
