import React, { useState, useEffect } from 'react';
import { LogOut, Search, Trash2, Calendar, User, Phone, Image as ImageIcon, CheckCircle, RefreshCw, Eye, Edit3, Save } from 'lucide-react';
import { getAllContent, saveContent, resetAllContent } from '../utils/content';

const cmsGroups = {
  hero: {
    title: 'Slide Banner Trang Chủ',
    items: [
      {
        id: 'hero_slide_1',
        label: 'Slide Banner 1 (Phòng Khách)',
        fields: [
          { key: 'hero_slide_1_title', label: 'Tiêu Đề Chính', type: 'text' },
          { key: 'hero_slide_1_subtitle', label: 'Mô Tả Chi Tiết', type: 'textarea' },
          { key: 'hero_slide_1_image', label: 'Link Ảnh Background', type: 'image' },
        ]
      },
      {
        id: 'hero_slide_2',
        label: 'Slide Banner 2 (Căn Hộ)',
        fields: [
          { key: 'hero_slide_2_title', label: 'Tiêu Đề Chính', type: 'text' },
          { key: 'hero_slide_2_subtitle', label: 'Mô Tả Chi Tiết', type: 'textarea' },
          { key: 'hero_slide_2_image', label: 'Link Ảnh Background', type: 'image' },
        ]
      },
      {
        id: 'hero_slide_3',
        label: 'Slide Banner 3 (Nhà Bếp)',
        fields: [
          { key: 'hero_slide_3_title', label: 'Tiêu Đề Chính', type: 'text' },
          { key: 'hero_slide_3_subtitle', label: 'Mô Tả Chi Tiết', type: 'textarea' },
          { key: 'hero_slide_3_image', label: 'Link Ảnh Background', type: 'image' },
        ]
      }
    ]
  },
  about: {
    title: 'Giới Thiệu (Về Chúng Tôi)',
    items: [
      {
        id: 'about_section',
        label: 'Nội Dung Mục Giới Thiệu',
        fields: [
          { key: 'about_title_1', label: 'Tiêu Đề Dòng 1 (Chữ thường)', type: 'text' },
          { key: 'about_title_2', label: 'Tiêu Đề Dòng 2 (Chữ nghiêng vàng)', type: 'text' },
          { key: 'about_desc_1', label: 'Đoạn Văn Bản 1', type: 'textarea' },
          { key: 'about_desc_2', label: 'Đoạn Văn Bản 2', type: 'textarea' },
          { key: 'about_image', label: 'Link Ảnh Chân Dung/Studio', type: 'image' },
        ]
      }
    ]
  },
  services: {
    title: 'Dịch Vụ Thiết Kế & Thi Công',
    items: [
      {
        id: 'service_1',
        label: 'Dịch Vụ 1 - Thiết Kế Biệt Thự',
        fields: [
          { key: 'service_1_title', label: 'Tên Dịch Vụ', type: 'text' },
          { key: 'service_1_desc', label: 'Mô Tả Dịch Vụ', type: 'textarea' },
          { key: 'service_1_image', label: 'Link Ảnh Bìa', type: 'image' },
        ]
      },
      {
        id: 'service_2',
        label: 'Dịch Vụ 2 - Thiết Kế Căn Hộ',
        fields: [
          { key: 'service_2_title', label: 'Tên Dịch Vụ', type: 'text' },
          { key: 'service_2_desc', label: 'Mô Tả Dịch Vụ', type: 'textarea' },
          { key: 'service_2_image', label: 'Link Ảnh Bìa', type: 'image' },
        ]
      },
      {
        id: 'service_3',
        label: 'Dịch Vụ 3 - Thi Công Trọn Gói',
        fields: [
          { key: 'service_3_title', label: 'Tên Dịch Vụ', type: 'text' },
          { key: 'service_3_desc', label: 'Mô Tả Dịch Vụ', type: 'textarea' },
          { key: 'service_3_image', label: 'Link Ảnh Bìa', type: 'image' },
        ]
      }
    ]
  },
  portfolio: {
    title: 'Dự Án Tiêu Biểu (Portfolio)',
    items: [
      {
        id: 'portfolio_1',
        label: 'Dự Án 1 (Vinhomes Golden River)',
        fields: [
          { key: 'portfolio_1_title', label: 'Tên Dự Án', type: 'text' },
          { key: 'portfolio_1_location', label: 'Địa Điểm / Vị Trí', type: 'text' },
          { key: 'portfolio_1_image', label: 'Link Ảnh Dự Án', type: 'image' },
        ]
      },
      {
        id: 'portfolio_2',
        label: 'Dự Án 2 (Biệt Thự Ciputra)',
        fields: [
          { key: 'portfolio_2_title', label: 'Tên Dự Án', type: 'text' },
          { key: 'portfolio_2_location', label: 'Địa Điểm / Vị Trí', type: 'text' },
          { key: 'portfolio_2_image', label: 'Link Ảnh Dự Án', type: 'image' },
        ]
      },
      {
        id: 'portfolio_3',
        label: 'Dự Án 3 (Minimalist Dining)',
        fields: [
          { key: 'portfolio_3_title', label: 'Tên Dự Án', type: 'text' },
          { key: 'portfolio_3_location', label: 'Địa Điểm / Vị Trí', type: 'text' },
          { key: 'portfolio_3_image', label: 'Link Ảnh Dự Án', type: 'image' },
        ]
      },
      {
        id: 'portfolio_4',
        label: 'Dự Án 4 (Cozy Living Room)',
        fields: [
          { key: 'portfolio_4_title', label: 'Tên Dự Án', type: 'text' },
          { key: 'portfolio_4_location', label: 'Địa Điểm / Vị Trí', type: 'text' },
          { key: 'portfolio_4_image', label: 'Link Ảnh Dự Án', type: 'image' },
        ]
      },
      {
        id: 'portfolio_5',
        label: 'Dự Án 5 (Luxury Bedroom Suite)',
        fields: [
          { key: 'portfolio_5_title', label: 'Tên Dự Án', type: 'text' },
          { key: 'portfolio_5_location', label: 'Địa Điểm / Vị Trí', type: 'text' },
          { key: 'portfolio_5_image', label: 'Link Ảnh Dự Án', type: 'image' },
        ]
      },
      {
        id: 'portfolio_6',
        label: 'Dự Án 6 (Classic Indochine Kitchen)',
        fields: [
          { key: 'portfolio_6_title', label: 'Tên Dự Án', type: 'text' },
          { key: 'portfolio_6_location', label: 'Địa Điểm / Vị Trí', type: 'text' },
          { key: 'portfolio_6_image', label: 'Link Ảnh Dự Án', type: 'image' },
        ]
      }
    ]
  },
  comparison: {
    title: 'So Sánh Thực Tế (Trước / Sau)',
    items: [
      {
        id: 'comparison_section',
        label: 'Hình Ảnh So Sánh Mặt Bằng',
        fields: [
          { key: 'before_image', label: 'Link Ảnh Trước Cải Tạo (Thô)', type: 'image' },
          { key: 'after_image', label: 'Link Ảnh Bàn Giao (Hoàn Thiện)', type: 'image' },
        ]
      }
    ]
  },
  contact: {
    title: 'Thông Tin Liên Hệ & Mạng Xã Hội',
    items: [
      {
        id: 'contact_details',
        label: 'Thông Tin Liên Hệ Cơ Bản',
        fields: [
          { key: 'contact_hotline', label: 'Hotline CSKH (Chính)', type: 'text' },
          { key: 'contact_hotline_tech', label: 'Hotline Hỗ Trợ Kỹ Thuật', type: 'text' },
          { key: 'contact_email', label: 'Email Liên Hệ', type: 'text' },
          { key: 'contact_address_hn', label: 'Địa Chỉ (Hà Nội)', type: 'text' },
          { key: 'contact_address_hcm', label: 'Địa Chỉ (TP. HCM)', type: 'text' },
          { key: 'contact_zalo_phone', label: 'Số Điện Thoại Zalo (Nhận chat)', type: 'text' },
        ]
      },
      {
        id: 'social_links',
        label: 'Đường Dẫn Mạng Xã Hội',
        fields: [
          { key: 'social_facebook', label: 'Link Facebook', type: 'text' },
          { key: 'social_instagram', label: 'Link Instagram', type: 'text' },
          { key: 'social_youtube', label: 'Link Youtube', type: 'text' },
          { key: 'social_pinterest', label: 'Link Pinterest', type: 'text' },
        ]
      }
    ]
  }
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState('leads'); // leads | images
  const [activeCmsGroup, setActiveCmsGroup] = useState('hero');

  // Unified dynamic CMS content state
  const [cmsContent, setCmsContent] = useState({});
  const [saveSuccessItemId, setSaveSuccessItemId] = useState(null);

  // Read leads and CMS content
  useEffect(() => {
    const storedLeads = localStorage.getItem('aura_leads');
    if (storedLeads) {
      try {
        setLeads(JSON.parse(storedLeads));
      } catch (e) {
        console.error('Failed to parse leads', e);
      }
    }
    setCmsContent(getAllContent());
  }, [isLoggedIn, currentTab]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa lượt đăng ký này?')) {
      const updatedLeads = leads.filter((lead) => lead.id !== id);
      setLeads(updatedLeads);
      localStorage.setItem('aura_leads', JSON.stringify(updatedLeads));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('CẢNH BÁO: Bạn có muốn xóa toàn bộ danh sách đăng ký tư vấn?')) {
      setLeads([]);
      localStorage.removeItem('aura_leads');
    }
  };

  const handleFieldChange = (key, value) => {
    setCmsContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveItem = (itemId, fields) => {
    // Save all fields for this specific item config block
    fields.forEach(field => {
      saveContent(field.key, cmsContent[field.key]);
    });

    setSaveSuccessItemId(itemId);
    setTimeout(() => {
      setSaveSuccessItemId(null);
    }, 2000);
  };

  const handleResetCms = () => {
    if (window.confirm('Khôi phục toàn bộ nội dung (bao gồm hình ảnh và văn bản) về mặc định ban đầu của hệ thống?')) {
      resetAllContent();
      setCmsContent(getAllContent());
      alert('Đã khôi phục dữ liệu mặc định thành công!');
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const searchString = `${lead.name} ${lead.phone} ${lead.message} ${lead.type}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  const getTypeName = (type) => {
    switch (type) {
      case 'villa': return 'Biệt Thự';
      case 'apartment': return 'Căn Hộ';
      case 'townhouse': return 'Nhà Phố';
      case 'commercial': return 'Thương Mại';
      default: return 'Khác';
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-luxury-dark text-white flex items-center justify-center px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="w-full max-w-md bg-luxury-gray/40 backdrop-blur-md border border-white/10 p-8 shadow-2xl rounded-2xl relative">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-light tracking-widest text-white uppercase">AURA Admin</h1>
            <p className="font-sans text-xs text-accent-gold uppercase tracking-[0.2em] mt-2">Hệ Thống Quản Lý</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-xs flex items-center gap-2">
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Tên đăng nhập</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tên tài khoản..."
                className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all duration-300"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-gold text-luxury-dark font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-xl hover:bg-white transition-all duration-300 shadow-[0_4px_15px_rgba(197,168,128,0.2)] mt-2 cursor-pointer"
            >
              Đăng Nhập
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="/" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300">
              Quay lại Trang Chủ
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-dark text-white font-sans pb-20">
      {/* Header bar */}
      <header className="bg-luxury-gray border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl tracking-widest text-white">AURA</span>
          <span className="h-4 w-[1px] bg-white/20" />
          <span className="text-[10px] tracking-widest uppercase text-accent-gold font-bold bg-accent-gold/10 px-2 py-0.5 rounded">Admin Control Panel</span>
        </div>

        {/* Tab switcher header */}
        <div className="flex bg-luxury-dark p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setCurrentTab('leads')}
            className={`px-4 py-1.5 text-xs tracking-wider rounded-md font-semibold cursor-pointer transition-all duration-300 ${
              currentTab === 'leads' ? 'bg-accent-gold text-luxury-dark' : 'text-gray-400 hover:text-white'
            }`}
          >
            Khách Đăng Ký
          </button>
          <button
            onClick={() => setCurrentTab('images')}
            className={`px-4 py-1.5 text-xs tracking-wider rounded-md font-semibold cursor-pointer transition-all duration-300 ${
              currentTab === 'images' ? 'bg-accent-gold text-luxury-dark' : 'text-gray-400 hover:text-white'
            }`}
          >
            Quản Lý Nội Dung CMS
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-white/5 hover:bg-red-500/25 border border-white/10 hover:border-red-500/20 text-xs px-4 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <LogOut size={14} />
          <span className="hidden sm:inline">Đăng Xuất</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        
        {currentTab === 'leads' ? (
          /* LEADS DASHBOARD TAB */
          <>
            {/* Stats and controls header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="font-serif text-3xl font-light text-white">Khách Hàng Đăng Ký</h2>
                <p className="text-xs text-gray-400 mt-1">Danh sách thông tin đăng ký tư vấn nội thất trực tuyến</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm khách hàng..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-luxury-gray/50 border border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-xs w-[240px] focus:outline-none focus:border-accent-gold transition-all duration-300"
                  />
                </div>
                
                {leads.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 text-xs px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    Xóa tất cả ({leads.length})
                  </button>
                )}
              </div>
            </div>

            {/* Lead Count Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-luxury-gray/40 border border-white/5 p-5 rounded-2xl shadow-sm">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-1">Tổng Lượt</span>
                <span className="text-3xl font-serif text-white">{leads.length}</span>
              </div>
              <div className="bg-luxury-gray/40 border border-white/5 p-5 rounded-2xl shadow-sm">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-1">Thiết Kế Biệt Thự</span>
                <span className="text-3xl font-serif text-accent-gold">{leads.filter(l => l.type === 'villa').length}</span>
              </div>
              <div className="bg-luxury-gray/40 border border-white/5 p-5 rounded-2xl shadow-sm">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-1">Thiết Kế Căn Hộ</span>
                <span className="text-3xl font-serif text-accent-gold">{leads.filter(l => l.type === 'apartment').length}</span>
              </div>
              <div className="bg-luxury-gray/40 border border-white/5 p-5 rounded-2xl shadow-sm">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-1">Loại Hình Khác</span>
                <span className="text-3xl font-serif text-white">{leads.filter(l => l.type !== 'villa' && l.type !== 'apartment').length}</span>
              </div>
            </div>

            {/* Leads Table Card */}
            <div className="bg-luxury-gray/30 border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-20">
                  <span className="text-gray-600 block mb-3 font-serif text-lg">Không tìm thấy dữ liệu</span>
                  <span className="text-xs text-gray-500 font-light">Chưa có lượt đăng ký tư vấn nào trùng khớp.</span>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-luxury-gray/50 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                        <th className="py-4 px-6">Khách Hàng</th>
                        <th className="py-4 px-6">Số Điện Thoại</th>
                        <th className="py-4 px-6">Hạng Mục</th>
                        <th className="py-4 px-6">Yêu Cầu / Lời Nhắn</th>
                        <th className="py-4 px-6">Thời Gian</th>
                        <th className="py-4 px-6 text-center">Tác Vụ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-white/5 transition-colors duration-300">
                          <td className="py-4 px-6 font-medium text-white">
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-accent-gold" />
                              <span>{lead.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300 font-mono">
                            <a href={`tel:${lead.phone}`} className="hover:text-accent-gold transition-colors duration-200 flex items-center gap-2">
                              <Phone size={12} className="text-gray-500" />
                              <span>{lead.phone}</span>
                            </a>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold rounded-full text-[10px] uppercase font-bold tracking-wider">
                              {getTypeName(lead.type)}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-400 max-w-xs truncate" title={lead.message}>
                            {lead.message || '—'}
                          </td>
                          <td className="py-4 px-6 text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={12} />
                              <span>{lead.timestamp ? new Date(lead.timestamp).toLocaleString('vi-VN') : '—'}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 cursor-pointer"
                              title="Xóa đăng ký"
                            >
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : (
          /* UNIFIED CONTENT & IMAGE CMS TAB */
          <>
            {/* Stats and controls header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="font-serif text-3xl font-light text-white">Quản Lý Nội Dung & Hình Ảnh</h2>
                <p className="text-xs text-gray-400 mt-1">Chỉnh sửa hình ảnh, tiêu đề, và mô tả hiển thị của các mục trên website</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetCms}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-gold/30 text-accent-gold text-xs px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
                >
                  <RefreshCw size={14} />
                  Khôi Phục Mặc Định
                </button>
              </div>
            </div>

            {/* CMS Section Filters */}
            <div className="flex flex-wrap gap-2 mb-8 bg-luxury-gray/40 border border-white/5 p-1 rounded-xl w-fit">
              <button
                onClick={() => setActiveCmsGroup('hero')}
                className={`px-4 py-2 text-xs tracking-wider font-semibold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCmsGroup === 'hero' ? 'bg-accent-gold text-luxury-dark shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Hero Slider
              </button>
              <button
                onClick={() => setActiveCmsGroup('about')}
                className={`px-4 py-2 text-xs tracking-wider font-semibold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCmsGroup === 'about' ? 'bg-accent-gold text-luxury-dark shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Giới Thiệu
              </button>
              <button
                onClick={() => setActiveCmsGroup('services')}
                className={`px-4 py-2 text-xs tracking-wider font-semibold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCmsGroup === 'services' ? 'bg-accent-gold text-luxury-dark shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Dịch Vụ
              </button>
              <button
                onClick={() => setActiveCmsGroup('portfolio')}
                className={`px-4 py-2 text-xs tracking-wider font-semibold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCmsGroup === 'portfolio' ? 'bg-accent-gold text-luxury-dark shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Dự Án
              </button>
              <button
                onClick={() => setActiveCmsGroup('comparison')}
                className={`px-4 py-2 text-xs tracking-wider font-semibold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCmsGroup === 'comparison' ? 'bg-accent-gold text-luxury-dark shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Trước / Sau
              </button>
              <button
                onClick={() => setActiveCmsGroup('contact')}
                className={`px-4 py-2 text-xs tracking-wider font-semibold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCmsGroup === 'contact' ? 'bg-accent-gold text-luxury-dark shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Liên Hệ & MXH
              </button>
            </div>

            {/* CMS Group Items list */}
            <div className="space-y-8">
              {cmsGroups[activeCmsGroup].items.map((item) => {
                // Find if there is an image field to show as a header/thumbnail preview
                const imageField = item.fields.find(f => f.type === 'image');
                const imageUrl = imageField ? cmsContent[imageField.key] : null;

                return (
                  <div key={item.id} className="bg-luxury-gray/30 border border-white/5 rounded-2xl overflow-hidden shadow-xl">
                    {/* Item Header */}
                    <div className="bg-luxury-gray/50 px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent-gold/10 rounded-lg text-accent-gold">
                          <Edit3 size={16} />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg text-white font-medium">{item.label}</h3>
                          <span className="text-[10px] text-gray-500 font-mono">ID: {item.id}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleSaveItem(item.id, item.fields)}
                        className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                          saveSuccessItemId === item.id
                            ? 'bg-green-600 text-white shadow-[0_4px_10px_rgba(22,163,74,0.3)]'
                            : 'bg-accent-gold text-luxury-dark hover:bg-white hover:shadow-[0_4px_15px_rgba(255,255,255,0.15)]'
                        }`}
                      >
                        {saveSuccessItemId === item.id ? (
                          <>
                            <CheckCircle size={14} />
                            Đã Lưu Thay Đổi
                          </>
                        ) : (
                          <>
                            <Save size={14} />
                            Lưu Thay Đổi
                          </>
                        )}
                      </button>
                    </div>

                    {/* Item Content Body */}
                    <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Fields Editor */}
                      <div className={`${imageField ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-5`}>
                        {item.fields.map((field) => (
                          <div key={field.key} className="flex flex-col gap-1.5">
                            <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                              {field.label}
                            </label>
                            
                            {field.type === 'textarea' ? (
                              <textarea
                                value={cmsContent[field.key] || ''}
                                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                rows={3}
                                className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-xs text-gray-300 focus:outline-none focus:border-accent-gold transition-all duration-300 resize-none"
                              />
                            ) : (
                              <input
                                type="text"
                                value={cmsContent[field.key] || ''}
                                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                className="w-full bg-luxury-dark border border-white/10 px-4 py-3 rounded-xl text-xs text-gray-300 focus:outline-none focus:border-accent-gold transition-all duration-300"
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Right: Live Preview Panel (Only if image field exists) */}
                      {imageField && (
                        <div className="lg:col-span-4 flex flex-col items-center w-full">
                          <span className="font-sans text-[10px] uppercase tracking-widest text-gray-500 font-bold self-start mb-3">Hình Ảnh Xem Trước</span>
                          
                          {imageUrl ? (
                            <div className="w-full aspect-[4/3] bg-black border border-white/10 rounded-xl overflow-hidden relative group shadow-inner">
                              <img
                                src={imageUrl}
                                alt="Live Preview"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                  e.target.src = 'https://placehold.co/400x300/151515/c5a880?text=Lỗi+Liên+Kết+Hình+Ảnh';
                                }}
                              />
                              <a
                                href={imageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-xs text-accent-gold"
                              >
                                <Eye size={12} />
                                <span>Xem ảnh gốc</span>
                              </a>
                            </div>
                          ) : (
                            <div className="w-full aspect-[4/3] bg-luxury-dark border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-600 gap-2">
                              <ImageIcon size={28} />
                              <span className="text-[10px] uppercase tracking-widest">Không có ảnh</span>
                            </div>
                          )}
                          <p className="text-[10px] text-gray-500 italic mt-3 text-center leading-relaxed">
                            * Ảnh xem trước sẽ tự cập nhật ngay lập tức khi dán một URL ảnh hợp lệ.
                          </p>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </main>
    </div>
  );
}
