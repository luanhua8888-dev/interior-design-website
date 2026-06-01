import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { getContent } from '../utils/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'villa',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng nhập Họ tên và Số điện thoại!');
      return;
    }

    setFormStatus('loading');

    // 1. Construct lead object
    const newLead = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      type: formData.type,
      message: formData.message || '',
      timestamp: new Date().toISOString(),
    };

    // 2. Save lead to localStorage (for /adminn CRM Dashboard)
    const existingLeads = localStorage.getItem('aura_leads');
    let leadsList = [];
    if (existingLeads) {
      try {
        leadsList = JSON.parse(existingLeads);
      } catch (err) {
        console.error(err);
      }
    }
    leadsList.unshift(newLead); // Add new lead to the beginning of the list
    localStorage.setItem('aura_leads', JSON.stringify(leadsList));

    // 3. Format and copy details to clipboard
    const typeLabel =
      formData.type === 'villa' ? 'Biệt Thự' :
        formData.type === 'apartment' ? 'Căn Hộ' :
          formData.type === 'townhouse' ? 'Nhà Phố' : 'Thương Mại';

    const messageTemplate = `Đăng ký tư vấn AURA Interior:\n- Họ & Tên: ${formData.name}\n- Số điện thoại: ${formData.phone}\n- Hạng mục: ${typeLabel}\n- Lời nhắn: ${formData.message || 'Không có'}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(messageTemplate).catch((err) => {
        console.warn('Failed to copy to clipboard', err);
      });
    }

    // Simulate server response and Zalo redirect trigger
    setTimeout(() => {
      setFormStatus('success');

      // Attempt auto Zalo redirect (as backup if browser allows popup)
      window.open(`https://zalo.me/${getContent('contact_zalo_phone')}`, '_blank');

      // Clear form inputs
      setFormData({
        name: '',
        phone: '',
        type: 'villa',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-luxury-dark text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">

          {/* Info Side (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <ScrollReveal direction="right" delay={0.1}>
                <div className="flex items-center gap-3 text-accent-gold mb-4">
                  <span className="h-[1px] w-6 bg-accent-gold" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                    Liên Hệ Với AURA
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-wide text-white mb-6">
                  Khởi Đầu <br />
                  <span className="gold-text-gradient italic font-normal">Không Gian Mơ Ước</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <p className="font-sans text-sm font-light text-gray-400 leading-relaxed mb-10">
                  Hãy chia sẻ dự định của bạn với chúng tôi. Đội ngũ chuyên gia và kiến trúc sư của AURA luôn sẵn sàng đồng hành, hiện thực hóa tổ ấm đẳng cấp cho gia đình bạn.
                </p>
              </ScrollReveal>

              {/* Contact details list */}
              <div className="space-y-6">
                <ScrollReveal direction="right" delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-luxury-gray border border-white/10 p-2.5 rounded-full text-accent-gold shadow-md">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg tracking-wide text-white mb-1">Địa Chỉ Văn Phòng</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        Hà Nội: {getContent('contact_address_hn')}
                      </p>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        TP. HCM: {getContent('contact_address_hcm')}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.5}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-luxury-gray border border-white/10 p-2.5 rounded-full text-accent-gold shadow-md">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg tracking-wide text-white mb-1">Hotline Hỗ Trợ 24/7</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        {getContent('contact_hotline')} (CSKH)
                      </p>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        {getContent('contact_hotline_tech')} (Kỹ Thuật)
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.6}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-luxury-gray border border-white/10 p-2.5 rounded-full text-accent-gold shadow-md">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg tracking-wide text-white mb-1">Thư Điện Tử</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        {getContent('contact_email')}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.65}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-luxury-gray border border-white/10 p-2.5 rounded-full text-accent-gold shadow-md">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg tracking-wide text-white mb-1">Tư Vấn Zalo</h4>
                      <a
                        href={`https://zalo.me/${getContent('contact_zalo_phone')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 border border-accent-gold/30 hover:border-accent-gold px-3.5 py-1.5 font-sans text-[10px] uppercase tracking-widest text-accent-gold hover:bg-accent-gold hover:text-luxury-dark transition-all duration-300 mt-1 rounded"
                      >
                        Kết Nối Ngay
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.7}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-luxury-gray border border-white/10 p-2.5 rounded-full text-accent-gold shadow-md">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg tracking-wide text-white mb-1">Giờ Làm Việc</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        Thứ 2 - Thứ Bảy: 08:00 - 18:00
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Form Side (7 columns) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.3} scale={0.96} blur={true} duration={1.0}>
              <div className="bg-luxury-gray/40 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-2xl rounded-2xl h-full flex flex-col justify-center relative">
                {formStatus === 'success' ? (
                  /* Success Message State */
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center bg-accent-gold/15 p-4 rounded-full mb-5 animate-[pulse_2s_infinite]">
                      <CheckCircle2 size={44} className="text-accent-gold" />
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-3">Đăng Ký Thành Công!</h3>

                    <p className="font-sans text-xs text-gray-400 max-w-md mx-auto leading-relaxed mb-6">
                      Yêu cầu tư vấn của bạn đã được ghi nhận trên hệ thống của AURA. Thông tin đăng ký đã được <strong>tự động sao chép</strong> vào bộ nhớ tạm của bạn.
                    </p>

                    {/* Zalo Redirect CTA Button */}
                    <div className="bg-luxury-dark/65 border border-accent-gold/20 p-5 rounded-xl mb-6 max-w-md mx-auto text-left">
                      <span className="text-[10px] text-accent-gold uppercase tracking-widest font-bold block mb-1.5">Hướng dẫn kết nối KTS:</span>
                      <p className="font-sans text-[11px] text-gray-300 leading-relaxed mb-4">
                        Nhấn nút dưới đây để chuyển hướng nhanh tới Zalo. Hãy nhấn <strong>Dán (Ctrl + V)</strong> tại khung chat Zalo để gửi nhanh thông tin đã điền.
                      </p>

                      <a
                        href={`https://zalo.me/${getContent('contact_zalo_phone')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#0068ff] hover:bg-[#0055d4] text-white py-3.5 rounded-xl uppercase text-xs font-bold tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(0,104,255,0.2)] text-center cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-[0.8s]"
                      >
                        <MessageCircle size={16} />
                        Kết Nối Chat Zalo Ngay
                      </a>
                    </div>

                    <button
                      onClick={() => setFormStatus('idle')}
                      className="px-6 py-2 border border-white/10 text-gray-400 uppercase tracking-widest text-[10px] rounded-lg hover:border-accent-gold hover:text-white transition-colors duration-300 font-semibold cursor-pointer"
                    >
                      Quay lại Form Đăng Ký
                    </button>
                  </div>
                ) : (
                  /* Main Form State */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif text-3xl font-light text-white mb-2">Đăng Ký Nhận Tư Vấn</h3>
                    <p className="font-sans text-xs text-gray-400 font-light mb-8 border-b border-white/5 pb-4">
                      Nhập thông tin liên hệ của bạn để nhận báo giá dự kiến và tư vấn miễn phí từ KTS trưởng.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                          Họ & Tên *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Nguyễn Văn A"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={formStatus === 'loading'}
                          className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 transition-all duration-300"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                          Số Điện Thoại *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="0988xxxxxx"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={formStatus === 'loading'}
                          className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Project Type Select */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                        Loại Công Trình Cần Thiết Kế
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        disabled={formStatus === 'loading'}
                        className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 transition-all duration-300"
                      >
                        <option value="villa">Biệt Thự Đơn Lập / Song Lập</option>
                        <option value="apartment">Căn Hộ Penthouse / Duplex</option>
                        <option value="townhouse">Nhà Phố Liền Kề / Shophouse</option>
                        <option value="commercial">Văn Phòng / Showroom / Café</option>
                      </select>
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                        Lời Nhắn / Yêu Cầu Cụ Thể (Tùy chọn)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Nêu rõ diện tích, ngân sách dự kiến hoặc phong cách yêu thích..."
                        value={formData.message}
                        onChange={handleChange}
                        disabled={formStatus === 'loading'}
                        className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full flex cursor-pointer items-center justify-center gap-2 bg-accent-gold text-luxury-dark py-4 rounded-xl uppercase text-xs font-semibold tracking-widest hover:bg-white hover:text-luxury-dark transition-all duration-300 shadow-[0_4px_20px_rgba(197,168,128,0.2)] disabled:opacity-50 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-[0.8s]"
                    >
                      {formStatus === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-luxury-dark border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Gửi Đăng Ký
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
