import React from 'react';
import { Link } from 'react-scroll';
import { Compass, ArrowUp } from 'lucide-react';
import { getContent } from '../utils/content';

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const ZaloIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 5.58 2 10c0 2.5 1.42 4.71 3.63 6.06L5 20l4.32-2.16c.9-.07 1.78-.14 2.68-.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
    <path d="M9 8h6v1.5l-4 4.5h4" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-dark border-t border-white/5 pt-20 pb-10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-light tracking-[0.2em] text-white">AURA</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.45em] text-accent-gold mt-[-3px]">INTERIOR</span>
            </div>
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              Kiến tạo các không gian sống sang trọng, mang phong vị thượng lưu và thể hiện cái tôi nghệ thuật độc bản của từng chủ nhân.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={getContent('social_facebook')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-luxury-gray border border-white/10 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 rounded-full"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={getContent('social_instagram')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-luxury-gray border border-white/10 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 rounded-full"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={getContent('social_youtube')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-luxury-gray border border-white/10 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 rounded-full"
                aria-label="Youtube"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href={getContent('social_pinterest')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-luxury-gray border border-white/10 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 rounded-full"
                aria-label="Pinterest"
              >
                <Compass size={16} />
              </a>
              <a
                href={`https://zalo.me/${getContent('contact_zalo_phone')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-luxury-gray border border-white/10 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 rounded-full"
                aria-label="Zalo"
              >
                <ZaloIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif text-sm tracking-wider uppercase text-white font-medium">Khám Phá</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={800}
                  className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300 cursor-pointer"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300 cursor-pointer"
                >
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300 cursor-pointer"
                >
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300 cursor-pointer"
                >
                  Dự Án Tiêu Biểu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm tracking-wider uppercase text-white font-medium">Dịch Vụ</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#services" className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300">
                  Thiết kế Nội thất Biệt thự
                </a>
              </li>
              <li>
                <a href="#services" className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300">
                  Thiết kế Nội thất Penthouse
                </a>
              </li>
              <li>
                <a href="#services" className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300">
                  Thiết kế Nội thất Căn hộ
                </a>
              </li>
              <li>
                <a href="#services" className="font-sans text-xs text-gray-400 hover:text-accent-gold transition-colors duration-300">
                  Thi công Trọn gói bàn giao
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm tracking-wider uppercase text-white font-medium">Đăng Ký Bản Tin</h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
              Nhận thông tin cập nhật các xu hướng thiết kế mới nhất và các dự án tiêu biểu từ AURA.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Đã đăng ký nhận bản tin!'); }} className="flex flex-col gap-2 mt-2">
              <input
                type="email"
                required
                placeholder="Email của bạn..."
                className="w-full bg-luxury-gray border border-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-accent-gold text-luxury-dark hover:bg-white hover:text-luxury-dark py-2 px-4 uppercase text-[10px] tracking-widest font-semibold transition-all duration-300 cursor-pointer text-center"
              >
                Đăng Ký
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-center gap-6">
          <p className="font-sans text-[11px] text-gray-500 font-light">
            © {new Date().getFullYear()} AURA INTERIOR. Thiết kế bởi Senior Frontend Developer. Mọi quyền được bảo lưu.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent-gold hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            Về Đầu Trang
            <span className="w-8 h-8 flex items-center justify-center border border-accent-gold/40 group-hover:border-white transition-colors duration-300 rounded-full">
              <ArrowUp size={12} className="transform group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
