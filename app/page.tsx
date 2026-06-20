"use client"; 

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  // 🔄 GLOBAL STATES: Handles all dropdowns and mobile menus
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLHeaderElement>(null);

  // Auto-close open dropdowns when clicking anywhere outside the navbar area
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 📋 NAV CATEGORIES MATRIX: All 7 blocks fully mapped
  const navLinks = [
    { 
      label: "ABOUT US", 
      path: "/about",
      subItems: [
        { name: "WHAT IS AMP", route: "/about/what-is-amp" },
        { name: "VISION AND MISSION", route: "/about/vision-and-mission" },
        { name: "AMP FOUNDER MEMBERS", route: "/about/founder-members" },
        { name: "AMP GOVERNING COUNCIL", route: "/about/governing-council" },
        { name: "AMP CENTRAL OFFICE TEAM", route: "/about/office-team" },
        { name: "MUMBAI", route: "/about/chapters/mumbai" },
        { name: "AMP ACHIEVEMENTS", route: "/about/achievements" },
        { name: "AMP MONTHLY REPORTS", route: "/about/monthly-reports" },
        { name: "AMP ANNUAL REPORTS", route: "/about/annual-reports" },
        { name: "AUDITED FINANCIAL REPORTS", route: "/about/financial-reports" },
        { name: "PRESIDENT MESSAGE", route: "/about/president-message" },
        { name: "AMP TARANA", route: "/about/tarana" },
        { name: "TERMS AND CONDITIONS", route: "/about/terms-and-conditions" },
        { name: "PRIVACY POLICY", route: "/about/privacy-policy" },
        { name: "REFUND POLICY", route: "/about/refund-policy" }
      ]
    },
    { 
      label: "PROJECTS", 
      path: "#programs-hub",
      subItems: [
        { name: "SCHOLARSHIPS PORTAL", route: "/programs/scholarships" },
        { name: "TALENT SEARCH ENGINE", route: "/programs/nts" },
        { name: "JOB FAIR PORTAL", route: "/programs/job-fair" },
        { name: "INDIAZAKAT BRIDGE", route: "https://indiazakat.com" }
      ]
    },
    {
      label: "EVENTS",
      path: "/events",
      subItems: [
        { name: "UPCOMING EVENTS", route: "/events/upcoming" },
        { name: "PAST EVENTS", route: "/events/past" },
        { name: "NATIONAL CAMPAIGNS", route: "/events/campaigns" },
        { name: "WEBINARS & WORKSHOPS", route: "/events/webinars" }
      ]
    },
    {
      label: "RESOURCE CENTER",
      path: "/resource-center",
      subItems: [
        { name: "LECTURE SERIES", route: "/resources/lectures" },
        { name: "CAREER COUNSELING", route: "/resources/counseling" },
        { name: "DOCUMENTS & FORMS", route: "/resources/documents" },
        { name: "MEDIA GALLERY", route: "/resources/gallery" }
      ]
    },
    {
      label: "CHAPTERS",
      path: "/chapters",
      subItems: [
        { name: "FIND A CHAPTER", route: "/chapters/find" },
        { name: "START A CHAPTER", route: "/chapters/start" },
        { name: "CHAPTER REPORTS", route: "/chapters/reports" },
        { name: "VOLUNTEER LOGIN", route: "/chapters/volunteer-login" }
      ]
    },
    {
      label: "MEMBER ZONE",
      path: "/member-zone",
      subItems: [
        { name: "REGISTER AS MEMBER", route: "/member/register" },
        { name: "MEMBER BENEFITS", route: "/member/benefits" },
        { name: "MEMBER DIRECTORY", route: "/member/directory" },
        { name: "LOGIN / PROFILES", route: "/member/login" }
      ]
    },
    {
      label: "GET INVOLVED",
      path: "/get-involved",
      subItems: [
        { name: "DONATE NOW", route: "/donate" },
        { name: "VOLUNTEER WITH US", route: "/get-involved/volunteer" },
        { name: "PARTNER WITH US", route: "/get-involved/partner" },
        { name: "CAREERS", route: "/get-involved/careers" }
      ]
    }
  ];

  // 📋 PROGRAMS DATASET: 16:9 banner dimensions with pure white vector SVG icons
  const programsList = [
    { title: "AMP Scholarships", desc: "Supporting bright students with financial assistance for higher education.", link: "/programs/scholarships", imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21zm0 0L5.84 10.578a12.082 12.083 0 00-.666 6.479L12 21z" /></svg> },
    { title: "National Talent Search", desc: "Identifying and nurturing exceptional talent across India.", link: "/programs/nts", imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> },
    { title: "AMP Job Fair", desc: "Connecting job seekers with leading employers nationwide.", link: "/programs/job-fair", imageUrl: "https://images.unsplash.com/photo-1521791136368-1a46827d091c?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { title: "NGO Awards", desc: "Recognizing outstanding social work and community service.", link: "/programs/ngo-awards", imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 9a4 4 0 11-8 0 4 4 0 018 0zm-8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { title: "AMP Leadership Program", desc: "Developing future leaders through mentorship and training.", link: "/programs/leadership", imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "IndiaZakat", desc: "Transparent and efficient Zakat distribution platform.", link: "https://indiazakat.com", imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    { title: "Skill Development", desc: "Empowering youth with industry-relevant skills and certifications.", link: "/programs/skill-development", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: "Women Empowerment", desc: "Supporting women entrepreneurs and professionals.", link: "/programs/women-empowerment", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", svgIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FCFBFA] text-gray-900 font-sans antialiased overflow-x-hidden relative selection:bg-[#D2AC6A] selection:text-white">
      
      {/* 🚀 SMOOTH FLOATING ACCENT CONTROL KEYFRAMES */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtleBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .animate-scholarship-bob {
          animation: subtleBob 3.2s ease-in-out infinite;
        }
      `}} />

      {/* =========================================================================
          👑 LAYER 1: THE ELITE HERO BANNER SECTION (Vibrant Wine-Maroon Style)
         ========================================================================= */}
      <section className="relative w-full min-h-[820px] lg:h-[840px] bg-gradient-to-tr from-[#310207] via-[#5C0612] to-[#1E0004] text-white flex flex-col justify-between pt-4 pb-12 px-4 md:px-12 lg:px-6 xl:px-24 overflow-hidden z-10 shadow-2xl">
        
        {/* Background Mandala Trace Asset Layer */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-overlay flex items-center justify-center scale-110 md:scale-125 select-none">
          <svg width="850" height="850" viewBox="0 0 100 100" fill="none" stroke="#FFFFFF" strokeWidth="0.35">
            <circle cx="50" cy="50" r="45" />
            <polygon points="50,5 95,50 50,95 5,50" />
            <polygon points="50,5 82,82 5,50 82,18" />
            <polygon points="50,5 18,82 95,50 18,18" />
          </svg>
        </div>

        {/* TOP INTERACTIVE CORES HEADER CAPSULE */}
        <header ref={navRef} className="w-full max-w-[1440px] mx-auto bg-white text-gray-900 rounded-full px-4 md:px-6 py-2.5 flex justify-between items-center shadow-2xl z-50 relative border border-white/20">
          
          {/* Logo Brand Panel */}
          <div className="flex items-center gap-2.5 pl-1 text-left shrink-0">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden flex items-center justify-center bg-gray-50 border border-gray-100 shrink-0 shadow-inner">
              <img 
                src="/amp-logo.png" 
                alt="AMP India Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=100&auto=format&fit=crop";
                }}
              />
            </div>
            <div>
              <h2 className="text-xs md:text-sm font-serif font-black tracking-tight text-[#4A0A13] leading-none">AMP India</h2>
              <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-gray-400 font-bold block mt-0.5">Assoc. of Muslim Professionals</span>
            </div>
          </div>
          
          {/* 🔍 DESKTOP NAVBAR LINKS */}
          <nav className="hidden xl:flex items-center gap-3.5 xl:gap-4.5 text-[10px] xl:text-[11px] font-black tracking-wider text-gray-600 relative">
            {navLinks.map((link, lidx) => (
              <div key={lidx} className="relative">
                {link.subItems ? (
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className={`hover:text-[#4A0A13] uppercase tracking-wider flex items-center gap-0.5 transition-colors whitespace-nowrap focus:outline-none ${activeDropdown === link.label ? 'text-[#4A0A13]' : ''}`}
                  >
                    {link.label} <span className="text-[6px] opacity-50">{activeDropdown === link.label ? '▲' : '▼'}</span>
                  </button>
                ) : (
                  <Link href={link.path} className="hover:text-[#4A0A13] uppercase tracking-wider transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                )}

                {/* Desktop Dropdown Flyout Sub-Lists */}
                {link.subItems && activeDropdown === link.label && (
                  <div className="absolute top-8 left-0 min-w-[250px] bg-white border border-gray-100 p-4 rounded-2xl shadow-2xl flex flex-col gap-1.5 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {link.subItems.map((sub, sidx) => (
                      <Link 
                        key={sidx} 
                        href={sub.route}
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-gray-700 hover:text-[#5C0612] hover:bg-gray-50 px-3 py-2 rounded-lg transition-all border-b border-gray-50/20 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            <Link href="/donate" className="hidden sm:inline-block text-[10px] xl:text-xs font-black px-3 py-2 text-gray-700 hover:text-[#4A0A13] transition-colors uppercase tracking-wider">Donate</Link>
            <Link href="/membership" className="hidden sm:inline-block text-[10px] xl:text-xs font-black bg-[#4A0A13] text-white px-4 md:px-5 py-2 rounded-full hover:bg-black transition-all whitespace-nowrap uppercase tracking-wider">Join AMP ➔</Link>
            
            {/* MOBILE INTERACTIVE BURGER TRIGGER */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-gray-700 hover:text-[#4A0A13] focus:outline-none transition-colors"
              aria-label="Toggle Menu Bounds"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* MOBILE RESPONSIVE ACCORDION SYSTEM DRAWERS */}
          {isMobileMenuOpen && (
            <div className="absolute top-14 left-0 w-full bg-white rounded-3xl p-5 shadow-2xl xl:hidden z-50 border border-gray-100 flex flex-col gap-2.5 max-h-[460px] overflow-y-auto text-left animate-in fade-in slide-in-from-top-4 duration-200">
              <span className="text-[8px] font-black tracking-widest text-gray-400 uppercase block px-1 mb-1">Central Navigation Index</span>
              {navLinks.map((link, idx) => (
                <div key={idx} className="w-full">
                  {link.subItems ? (
                    <div className="w-full">
                      <button 
                        onClick={() => setExpandedMobileCategory(expandedMobileCategory === link.label ? null : link.label)}
                        className="w-full text-left text-xs font-black text-gray-800 hover:text-[#4A0A13] px-3 py-2.5 rounded-xl hover:bg-gray-50 flex justify-between items-center transition-all uppercase tracking-wider"
                      >
                        {link.label} <span className="text-[9px] text-gray-400">{expandedMobileCategory === link.label ? '▲' : '▼'}</span>
                      </button>
                      {expandedMobileCategory === link.label && (
                        <div className="pl-4 mt-1 mb-2 bg-gray-50/50 rounded-2xl p-2 flex flex-col gap-1 border border-gray-100/40">
                          {link.subItems.map((sub, sidx) => (
                            <Link 
                              key={sidx} 
                              href={sub.route}
                              onClick={() => { setIsMobileMenuOpen(false); setExpandedMobileCategory(null); }}
                              className="text-[11px] font-bold text-gray-600 hover:text-[#4A0A13] px-3 py-2 rounded-lg block text-left"
                            >
                              • {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.path} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-xs font-black text-gray-800 hover:text-[#4A0A13] hover:bg-gray-50 px-3 py-2.5 rounded-xl transition-all uppercase tracking-wider block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="h-[1px] bg-gray-100 my-2 w-full"></div>
              <div className="flex gap-2 w-full pt-1 sm:hidden">
                <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center text-[10px] font-black border border-gray-200 text-gray-700 py-3 rounded-xl uppercase tracking-wider">Donate</Link>
                <Link href="/membership" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center text-[10px] font-black bg-[#4A0A13] text-white py-3 rounded-xl uppercase tracking-wider">Join AMP ➔</Link>
              </div>
            </div>
          )}
        </header>

        {/* HERO MAIN CONTENT VALUE WRAPPERS */}
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-8 md:pt-12 lg:pt-0 z-20 relative">
          <div className="lg:col-span-7 space-y-4 md:space-y-6 text-left">
            <span className="text-[10px] md:text-xs font-black tracking-widest text-[#D2AC6A] uppercase block">• EST. 2007 · A NATIONAL MOVEMENT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[66px] font-serif font-bold tracking-tight leading-[1.1] text-white">
              Empowering Communities. <br />Transforming Futures. <br /><span className="text-[#D2AC6A]">Building India.</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-xl opacity-90">
              17+ years of impact · 300+ chapters · thousands of volunteers · millions of lives touched through education, employment and economic empowerment.
            </p>
            <div className="pt-2">
              <Link href="#programs-hub" className="bg-[#D2AC6A] text-gray-900 font-black text-xs md:text-sm uppercase tracking-wider px-7 py-4 rounded-xl hover:bg-white hover:text-[#4A0A13] transition-all shadow-xl font-sans inline-block">Explore Programs ↓</Link>
            </div>
          </div>

          {/* NATIONAL LIVE METRICS MODULE */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/[0.07] border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-xl space-y-5 relative">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <span className="text-[8px] md:text-[9px] font-black tracking-wider text-gray-400 uppercase block">LIVE IMPACT</span>
                  <h3 className="text-sm md:text-base font-bold text-white mt-0.5">National Dashboard</h3>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live
                </span>
              </div>

              {/* Grid Nodes data numbers */}
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="animate-scholarship-bob bg-gradient-to-br from-[#540B14] to-[#200003] border-2 border-[#D2AC6A]/70 rounded-2xl p-4 shadow-2xl relative overflow-hidden z-30">
                  <span className="text-[8px] md:text-[9px] font-black text-[#D2AC6A] uppercase tracking-wider block">THIS WEEK</span>
                  <h4 className="text-base md:text-xl font-black text-white mt-1 leading-none tracking-tight">320</h4>
                  <p className="text-[11px] text-gray-300 font-medium mt-1">Scholarships</p>
                  <span className="absolute bottom-1 right-2 text-xl opacity-20">🎓</span>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 relative">
                  <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-wider block">STUDENTS INTAKE</span>
                  <h4 className="text-base md:text-xl font-black text-white mt-1 leading-none tracking-tight">85,000</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-tight">Guided</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 relative">
                  <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-wider block">PLACEMENTS TRACK</span>
                  <h4 className="text-base md:text-xl font-black text-white mt-1 leading-none tracking-tight">72,000</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-tight">Placements</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 relative">
                  <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-wider block">VOLUNTEERS CELL</span>
                  <h4 className="text-base md:text-xl font-black text-white mt-1 leading-none tracking-tight">9,200</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-tight">Volunteers</p>
                </div>
              </div>

              {/* States Tracking */}
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 space-y-3 relative overflow-hidden">
                <div className="flex justify-between text-xs font-bold text-gray-300"><span>States covered</span></div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#D2AC6A] to-[#fac800] h-full w-[80%] rounded-full"></div>
                </div>
                <div className="absolute right-3 top-1 bg-gradient-to-br from-[#4A0A13] to-[#1C0003] border border-[#D2AC6A]/40 p-2 rounded-xl text-right shadow-xl z-20">
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 font-black block">TODAY</span>
                  <span className="text-sm font-black text-[#D2AC6A] block leading-none mt-0.5">+142</span>
                </div>
              </div>

              <div className="bg-[#540B14]/60 border border-[#D2AC6A]/20 rounded-2xl p-4 shadow-inner text-left">
                <span className="text-[8px] md:text-[9px] font-black text-[#D2AC6A] uppercase tracking-widest block">// RECENT PLACEMENT FEED</span>
                <p className="text-xs text-gray-200 mt-1.5 italic font-medium leading-relaxed">"AMP helped me land my first job profile smoothly."</p>
                <div className="mt-3 flex items-center gap-1.5 text-[9px] md:text-[10px] text-gray-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2AC6A]"></span> Asma R. - Hyderabad Chapter
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row details strip */}
        <div className="max-w-7xl w-full mx-auto pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left z-20 relative">
          <div>
            <h4 className="text-xl md:text-3xl font-serif font-bold text-white tracking-tight">17+</h4>
            <span className="text-[8px] md:text-[10px] font-sans text-gray-400 uppercase tracking-wider block font-bold mt-1">Years of Impact</span>
          </div>
          <div>
            <h4 className="text-xl md:text-3xl font-serif font-bold text-white tracking-tight">300+</h4>
            <span className="text-[8px] md:text-[10px] font-sans text-gray-400 uppercase tracking-wider block font-bold mt-1">Chapters</span>
          </div>
          <div>
            <h4 className="text-xl md:text-3xl font-serif font-bold text-white tracking-tight">28</h4>
            <span className="text-[8px] md:text-[10px] font-sans text-gray-400 uppercase tracking-wider block font-bold mt-1">States Presence</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          👑 LAYER 2: OUR PROGRAMS HUB (Tighter Vertical Padding Added)
          ✨ FIX: Reduced padding from `py-24` to `pt-10 pb-4` to compress white space.
         ========================================================================= */}
      <section id="programs-hub" className="pt-10 pb-4 px-4 md:px-12 lg:px-24 bg-[#FCFBFA] relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-950 tracking-tight">Our Programs</h2>
            <div className="w-12 h-[2px] bg-[#D2AC6A] mx-auto"></div>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
              Comprehensive initiatives designed to create lasting impact across education, employment, and social development.
            </p>
          </div>

          {/* 3-Column Image Banner Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {programsList.map((prog, idx) => (
              <Link
                key={idx}
                href={prog.link}
                className="group relative rounded-3xl overflow-hidden aspect-video shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-200/50 cursor-pointer flex flex-col justify-end bg-gray-950"
              >
                <img src={prog.imageUrl} alt={prog.title} className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-500" />
                
                {/* WHITE ICON IN MAROON CIRCLE WRAPPER */}
                <div className="absolute top-4 left-4 z-20 w-11 h-11 rounded-full bg-[#5C0612] border-2 border-[#D2AC6A]/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {prog.svgIcon}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-95"></div>
                <div className="p-5 md:p-6 z-20 space-y-1.5 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-tight group-hover:text-[#D2AC6A] transition-colors leading-tight">{prog.title}</h3>
                  <p className="text-gray-300 text-[11px] md:text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{prog.desc}</p>
                  <div className="pt-1 flex items-center justify-between text-[9px] font-black text-[#D2AC6A] tracking-widest uppercase"><span>LAUNCH PORTAL ➔</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          👑 LAYER 3: THE ASYMMETRIC COMBINED EDITORIAL HUB (Centered Titles & Zero White Space)
          ✨ FIX 1: Section padding reduced to `py-2` to remove awkward whitespace.
          ✨ FIX 2: Header blocks transformed into unified `text-center flex flex-col items-center` layout.
         ========================================================================= */}
      <section id="combined-editorial-hub" className="py-2 px-4 md:px-12 lg:px-6 xl:px-24 bg-[#FCFBFA] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* =========================================================================
              📅 LEFT PART (5 Columns): MAROON PANEL SHEET (Upcoming Events)
             ========================================================================= */}
          <div className="lg:col-span-5 bg-[#4A0A13] text-white rounded-3xl p-5 md:p-6 space-y-6 flex flex-col shadow-2xl relative overflow-hidden border border-white/5">
            
            {/* 🚨 FIX: Titles centered perfectly using flex matrix bounds */}
            <div className="text-center w-full flex flex-col items-center justify-center space-y-1 relative z-10 mx-auto">
              <span className="text-[10px] md:text-[11px] font-black uppercase text-[#D2AC6A] bg-white/5 px-2.5 py-0.5 rounded tracking-widest inline-block">
                // TRACK TIMELINES
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight text-center">
                Upcoming Schedules
              </h2>
            </div>

            {/* Vertical Gold Timeline Line */}
            <div className="relative pl-3 md:pl-4 space-y-6 flex-1 z-10 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#D2AC6A] before:via-white/20 before:to-transparent">
              
              {/* Event Entry 1 */}
              <div className="relative group text-left space-y-2 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <div className="absolute -left-[16px] md:-left-[20px] top-3 w-2 h-2 rounded-full bg-[#D2AC6A] border-2 border-[#4A0A13] group-hover:scale-150 transition-transform shadow"></div>
                
                <div className="flex justify-between items-baseline w-full">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl md:text-5xl font-serif font-extralight text-[#D2AC6A] leading-none tracking-tighter">24</span>
                    <span className="text-[10px] font-mono font-black tracking-widest text-gray-300 uppercase">JUNE</span>
                  </div>
                  <span className="text-[8px] font-black text-white bg-white/10 border border-white/20 px-2 py-0.5 rounded uppercase tracking-wider">ONLINE LIVE</span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D2AC6A] transition-colors leading-snug tracking-tight">
                    National Civil Services Guidance Web Sync Module
                  </h3>
                  <p className="text-[11px] text-gray-300 font-semibold font-mono">⏰ 04:30 PM IST</p>
                  <p className="text-xs text-gray-300/80 font-medium leading-relaxed pt-0.5">
                    Interactive orientation session mapping exam structural hierarchies natively.
                  </p>
                </div>

                <div className="pt-1">
                  <Link href="/events/civil-services-2026" className="text-[10px] font-black uppercase tracking-widest text-[#D2AC6A] border-b-2 border-b-[#D2AC6A]/40 pb-0.5 hover:border-b-white hover:text-white transition-all">
                    Register For Sync ➔
                  </Link>
                </div>
              </div>

              {/* Event Entry 2 */}
              <div className="relative group text-left space-y-2">
                <div className="absolute -left-[16px] md:-left-[20px] top-3 w-2 h-2 rounded-full bg-white/40 border-2 border-[#4A0A13] group-hover:scale-150 transition-transform shadow"></div>
                
                <div className="flex justify-between items-baseline w-full">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl md:text-5xl font-serif font-extralight text-white/60 leading-none tracking-tighter">11</span>
                    <span className="text-[10px] font-mono font-black tracking-widest text-gray-300 uppercase">JULY</span>
                  </div>
                  <span className="text-[8px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider">GROUND HUB</span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D2AC6A] transition-colors leading-snug tracking-tight">
                    Karnataka Chapter Career Counselling Bootcamp
                  </h3>
                  <p className="text-[11px] text-gray-300 font-semibold font-mono">⏰ 10:00 AM ONWARDS</p>
                  <p className="text-xs text-gray-300/80 font-medium leading-relaxed pt-0.5">
                    📍 Town Hall, Bangalore. Free profile evaluations and macro placement metrics.
                  </p>
                </div>

                <div className="pt-1">
                  <Link href="/events/karnataka-counseling" className="text-[10px] font-black uppercase tracking-widest text-white border-b-2 border-b-white/20 pb-0.5 hover:text-[#D2AC6A] hover:border-b-[#D2AC6A] transition-all">
                    Get Pass Entry ➔
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================================
              🔥 RIGHT PART (7 Columns): MAROON OVERLAPPING CANVAS DECK (Active Campaigns)
             ========================================================================= */}
          <div className="lg:col-span-7 bg-[#4A0A13] text-white rounded-3xl p-5 md:p-6 space-y-5 flex flex-col shadow-2xl w-full relative border border-white/5">
            
            {/* 🚨 FIX: Title centered perfectly matching left layout matrix */}
            <div className="text-center w-full flex flex-col items-center justify-center space-y-1 border-b border-white/10 pb-2 mx-auto">
              <span className="text-[10px] font-black uppercase text-[#D2AC6A] tracking-widest block">
                // INITIATIVE VAULT
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight text-center">
                Active Projects & Campaigns
              </h2>
            </div>

            {/* BOX 1: THE FLOATING OVERLAP MASONRY BLOCK */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-gray-950 shadow-md min-h-[220px] md:min-h-[230px] flex flex-col justify-end group border border-gray-850">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=700&auto=format&fit=crop" 
                alt="Orphan Support Base" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 scale-102 group-hover:scale-105 transition-transform duration-500" 
              />
              <span className="absolute top-3 right-3 z-20 bg-[#5C0612] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md border border-[#D2AC6A]/20">
                ★ CRITICAL FUND
              </span>

              {/* FLOATING OVERLAP WIDGET DECK */}
              <div className="m-3 p-4 bg-white rounded-xl z-20 shadow-2xl text-left border border-white/40 space-y-2.5">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-black text-[#5C0612] tracking-wider block">ID: #EDU-ORPHAN-2026</span>
                  <h3 className="text-base md:text-lg font-serif font-bold text-gray-950 leading-tight">
                    AMP Higher Education Orphan Support Fund
                  </h3>
                </div>

                <div className="space-y-1.5 bg-[#FAF9F6] p-2.5 rounded-lg border border-gray-100">
                  <div className="flex justify-between text-[10px] font-bold text-gray-500">
                    <span>Raised: <strong className="text-gray-900">₹14.25L</strong></span>
                    <span className="text-[#D2AC6A] font-mono">Goal: ₹20L</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#5C0612] to-[#D2AC6A] h-full w-[72%] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-0.5">
                  <span className="text-[9px] font-black text-emerald-600 font-sans tracking-wide uppercase">72% COMPLETED</span>
                  <Link href="/get-involved/donate-orphan" className="bg-[#5C0612] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-black transition-all">
                    Support Cause ➔
                  </Link>
                </div>
              </div>
            </div>

            {/* 📦 SUB GLASSMORPHIC SLATS DOCKING IN PAIRS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              
              {/* Campaign Card 1 */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:bg-white/[0.08] transition-all flex flex-col justify-between text-left min-h-[135px] group">
                <div className="space-y-1">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[8px] font-mono font-black text-gray-400 uppercase tracking-widest">// RE-SKILL TRACK</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D2AC6A]"></span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#D2AC6A] transition-colors leading-tight">
                    National Skill Mapping Initiative Hub
                  </h4>
                  <p className="text-[11px] text-gray-300 font-medium leading-relaxed line-clamp-2">
                    Upgrading dynamic sheets to verify corporate vacancies pan-India.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 mt-2">
                  <Link href="/get-involved/skill-map" className="text-[9px] font-black uppercase tracking-widest text-[#D2AC6A] flex items-center justify-between group-hover:text-white transition-colors">
                    <span>Explore Blueprint</span> <span>➔</span>
                  </Link>
                </div>
              </div>

              {/* Campaign Card 2 */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:bg-white/[0.08] transition-all flex flex-col justify-between text-left min-h-[135px] group">
                <div className="space-y-1">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[8px] font-mono font-black text-gray-400 uppercase tracking-widest">// RELIEF LOGS</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#D2AC6A] transition-colors leading-tight">
                    Winter Kit Distribution Framework Ledger
                  </h4>
                  <p className="text-[11px] text-gray-300 font-medium leading-relaxed line-clamp-2">
                    Deploying blanket stocks securely across high-altitude regional belts.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 mt-2">
                  <Link href="/get-involved/winter-kit" className="text-[9px] font-black uppercase tracking-widest text-[#D2AC6A] flex items-center justify-between group-hover:text-white transition-colors">
                    <span>Explore Blueprint</span> <span>➔</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

{/* Lateast Happining */}
{/* =========================================================================
          👑 LAYER: LATEST HAPPENINGS (Asymmetric Premium Editorial Hub)
          ✨ Rule Check: Self-contained section, titles centered, ultra-clean framework.
         ========================================================================= */}
      <section id="latest-happenings-hub" className="py-12 px-4 md:px-12 lg:px-6 xl:px-24 bg-[#FCFBFA] border-b border-gray-200/30 relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-6">
          
          {/* Centered Premium Section Header */}
          <div className="text-center w-full flex flex-col items-center justify-center space-y-1 mx-auto">
            <span className="text-[10px] md:text-[11px] font-black uppercase text-[#5C0612] bg-[#5C0612]/5 px-2.5 py-0.5 rounded tracking-widest inline-block">
              // CENTRAL JOURNAL TRANSCRIPT
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-950 tracking-tight text-center">
              Latest Happenings
            </h2>
            <div className="w-12 h-[2px] bg-[#D2AC6A] mx-auto mt-1"></div>
          </div>

          {/* Asymmetric Core Grid: Left big card (7 cols) + Right stack (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* 📰 LEFT COLUMN: The Big Feature Editorial Card (7 Columns) */}
            <div className="lg:col-span-7 bg-white border border-gray-200/50 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden min-h-[420px]">
              <div className="space-y-4">
                {/* Image Frame with Overlay Badge */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gray-900 border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500" 
                    alt="January Star Cover" 
                  />
                  <span className="absolute top-3 left-3 bg-[#4A0A13] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md border border-[#D2AC6A]/20">
                    ★ DISPATCH RECAP • START OF THE MONTH
                  </span>
                </div>

                {/* Meta details logs exactly mirroring image_ba6a90.png criteria */}
                <div className="space-y-1.5">
                  <div className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                    📅 JUNE 1, 2026 • REGIONAL SYNC OFFICE
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-950 group-hover:text-[#5C0612] transition-colors leading-snug tracking-tight">
                    AMP Stars of the Month – January 2026!
                  </h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-2xl">
                    Association of Muslim Professionals (AMP) extends its warmest congratulations to Mr. Mohammed Zahid Wasim (Melvisharam, Tamil Nadu) for being recognized for his outstanding dedication and impactful contributions across the community framework.
                  </p>
                </div>
              </div>

              {/* Action read more link trigger targeting dynamic CMS templates */}
              <div className="pt-4 border-t border-gray-50 mt-4">
                <Link href="/happenings/january-stars-2026" className="text-[10px] font-black uppercase tracking-widest text-[#5C0612] border-b-2 border-b-[#D2AC6A]/40 pb-0.5 hover:border-b-[#5C0612] transition-all">
                  Read Full Journey ➔
                </Link>
              </div>
            </div>


            {/* 📑 RIGHT COLUMN: Clean Vertical Editorial Stack (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              {/* Stack Item 1: February Stars Row */}
              <div className="bg-white border border-gray-200/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-center group text-left flex-1">
                {/* Mini Image Block */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100 flex items-center justify-center p-3">
                  <span className="text-xs font-serif font-black text-[#5C0612]/30 uppercase tracking-tight">AMP</span>
                </div>
                {/* Text Block content */}
                <div className="space-y-1 flex-1">
                  <span className="text-[8px] font-mono font-black text-[#D2AC6A] uppercase tracking-wider block">📅 FEB 2026 • VOLUNTEER INDEX</span>
                  <h4 className="text-sm font-serif font-bold text-gray-950 group-hover:text-[#5C0612] transition-colors leading-tight line-clamp-1">
                    AMP Stars of the Month–February 2026!
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed line-clamp-2">
                    Honoring national volunteer profiles tracking excellent community impact fields and resource mapping.
                  </p>
                  <Link href="/happenings/february-stars-2026" className="inline-block text-[9px] font-black text-[#5C0612] uppercase tracking-widest mt-1 border-b border-[#D2AC6A]/40">
                    Read More ➔
                  </Link>
                </div>
              </div>

              {/* Stack Item 2: Chennai Job Fair Row */}
              <div className="bg-white border border-gray-200/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-center group text-left flex-1">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100 flex items-center justify-center p-3">
                  <span className="text-xs font-serif font-black text-emerald-600/40 uppercase tracking-tight">JOB</span>
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[8px] font-mono font-black text-emerald-600 uppercase tracking-wider block">✓ MAR 2026 • DRIVES MATRIX</span>
                  <h4 className="text-sm font-serif font-bold text-gray-950 group-hover:text-[#5C0612] transition-colors leading-tight line-clamp-1">
                    AMP Chennai Job Fair Report 2026
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed line-clamp-2">
                    Consolidated metrics detailing student intakes, corporate tracking, and spot selections across Chennai.
                  </p>
                  <Link href="/happenings/chennai-job-fair-2026" className="inline-block text-[9px] font-black text-[#5C0612] uppercase tracking-widest mt-1 border-b border-[#D2AC6A]/40">
                    Read More ➔
                  </Link>
                </div>
              </div>

              {/* View All Universal Footer Bar Node */}
              <div className="bg-[#FAF9F5] border border-gray-200/40 rounded-xl px-4 py-2 flex justify-between items-center mt-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Want to explore all logs?</span>
                <Link href="/happenings" className="text-[10px] font-black text-[#5C0612] uppercase tracking-widest hover:text-black transition-colors flex items-center gap-1">
                  <span>View All Happenings</span> <span>➔</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
     {/* =========================================================================
          👑 SECTION 6 & 7: RESPONSIVE TORN PAPER HUB (Mobile Adaptive Fix)
          ✨ Design Solution matching image_e38698.png: Adjusted polygon grids for small devices.
          ✨ Rule Check: 100% Self-contained independent layout section block.
         ========================================================================= */}
      <section id="torn-paper-impact-hub" className="py-8 px-2 md:py-12 md:px-12 lg:px-6 xl:px-24 bg-[#FCFBFA] relative z-10 overflow-hidden">
        
        {/* Responsive CSS Cut Paths: Straight bounds on mobile, jagged torn shapes on desktop */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1023px) {
            .ripped-edge-left { clip-path: none !important; }
            .ripped-edge-right { clip-path: none !important; }
          }
          @media (min-width: 1024px) {
            .ripped-edge-left {
              clip-path: polygon(0% 0%, 96% 0%, 93% 8%, 97% 17%, 94% 28%, 98% 39%, 92% 51%, 96% 64%, 93% 76%, 98% 88%, 94% 100%, 0% 100%);
            }
            .ripped-edge-right {
              clip-path: polygon(4% 0%, 100% 0%, 100% 100%, 7% 100%, 3% 91%, 6% 82%, 2% 70%, 7% 59%, 3% 45%, 8% 32%, 2% 19%, 6% 9%);
            }
          }
        `}} />

        <div className="max-w-[1400px] mx-auto bg-[#360309] rounded-[32px] md:rounded-[40px] p-3 sm:p-5 md:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-stretch relative border border-white/5">
          
          {/* 📄 LEFT PIECE: Success Stories */}
          <div className="lg:col-span-6 bg-white text-gray-900 p-4 sm:p-6 lg:pr-10 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none ripped-edge-left flex flex-col justify-between space-y-6 shadow-xl relative min-h-[500px]">
            
            {/* Header Area */}
            <div className="text-left space-y-1 relative z-10">
              <span className="text-[9px] font-mono font-black text-[#5C0612] tracking-widest uppercase bg-[#5C0612]/5 px-2 py-0.5 rounded inline-block">
                // EMPOWERMENT REALIZED
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-black text-gray-950 tracking-tight">
                Success Stories
              </h2>
              <div className="w-10 h-[2px] bg-[#D2AC6A]"></div>
            </div>

            {/* Inner Stories Feed List Container containing exactly 3 items */}
            <div className="space-y-3.5 flex-1 pt-2 relative z-10 w-full lg:max-w-[92%]">
              
              {/* Story Entry 1 */}
              <div className="bg-[#FAF9F5] border border-gray-200/60 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center group hover:border-[#5C0612] transition-colors text-left">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-[#D2AC6A]/40 shrink-0 shadow-md">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" className="w-full h-full object-cover" alt="Zainab Khan" />
                </div>
                <div className="space-y-0.5 flex-1">
                  <span className="text-[8px] font-mono font-black text-[#5C0612] block">🎓 CIVIL SERVICES MILESTONE</span>
                  <h3 className="text-sm font-serif font-bold text-gray-950 leading-tight">Zainab Khan — UPSC Sync Achievement</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed line-clamp-2">"AMP's financial scholarship and mentorship cell cleared my pathways natively during my peak preparation months."</p>
                  <Link href="/success-stories/zainab-khan" className="inline-block text-[9px] font-black tracking-widest text-[#5C0612] uppercase border-b border-[#D2AC6A]/60 pt-0.5">Read Journey ➔</Link>
                </div>
              </div>

              {/* Story Entry 2 */}
              <div className="bg-[#FAF9F5] border border-gray-200/60 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center group hover:border-[#5C0612] transition-colors text-left">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-[#D2AC6A]/40 shrink-0 shadow-md">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" className="w-full h-full object-cover" alt="Amaan Profile" />
                </div>
                <div className="space-y-0.5 flex-1">
                  <span className="text-[8px] font-mono font-black text-emerald-700 block">💼 TECH PLACEMENT INDEX</span>
                  <h3 className="text-sm font-serif font-bold text-gray-950 leading-tight">Amaan Shaikh — Software Corporate Role</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed line-clamp-2">"Through the AMP Mega Job Fair drive cell, I landed a software engineer role safely, turning our economic structure stable."</p>
                  <Link href="/success-stories/amaan-shaikh" className="inline-block text-[9px] font-black tracking-widest text-[#5C0612] uppercase border-b border-[#D2AC6A]/60 pt-0.5">Read Journey ➔</Link>
                </div>
              </div>

              {/* Story Entry 3 */}
              <div className="bg-[#FAF9F5] border border-gray-200/60 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center group hover:border-[#5C0612] transition-colors text-left">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-[#D2AC6A]/40 shrink-0 shadow-md">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" className="w-full h-full object-cover" alt="Kamruz Profile" />
                </div>
                <div className="space-y-0.5 flex-1">
                  <span className="text-[8px] font-mono font-black text-amber-700 block">📝 ACADEMIC EXCELLENCE CELLS</span>
                  <h3 className="text-sm font-serif font-bold text-gray-950 leading-tight">Kamruz Zaman Khan — Board Preparation Sync</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed line-clamp-2">Coordinating national student felicitation series blueprints to scale high-impact results cleanly across regional chapters.</p>
                  <Link href="/success-stories/kamruz-zaman" className="inline-block text-[9px] font-black tracking-widest text-[#5C0612] uppercase border-b border-[#D2AC6A]/60 pt-0.5">Read Journey ➔</Link>
                </div>
              </div>

            </div>
          </div>


          {/* 📄 RIGHT PIECE: Testimonials */}
          <div className="lg:col-span-6 bg-white text-gray-900 p-4 sm:p-6 lg:pl-10 rounded-2xl lg:rounded-r-2xl lg:rounded-l-none ripped-edge-right flex flex-col justify-between space-y-6 shadow-xl relative min-h-[500px] lg:-ml-6">
            
            {/* Header Area */}
            <div className="text-left space-y-1 relative z-10 lg:pl-4">
              <span className="text-[9px] font-mono font-black text-gray-500 tracking-widest uppercase block">
                // EXECUTIVE COUNSEL REVIEWS
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-black text-gray-950 tracking-tight">
                Testimonials
              </h2>
              <div className="w-10 h-[2px] bg-[#D2AC6A]"></div>
            </div>

            {/* Inner Testimonials Cards Stack Container containing exactly 3 items */}
            <div className="space-y-3.5 flex-1 pt-2 relative z-10 w-full lg:pl-4">
              
              {/* Testimonial Slab 1 */}
              <div className="bg-[#FAF9F5] border border-gray-200/60 rounded-2xl p-4 text-left space-y-1.5 relative group hover:border-[#5C0612] transition-colors">
                <span className="text-2xl font-serif font-black text-[#D2AC6A]/40 leading-none block">“</span>
                <p className="text-[11px] text-gray-600 font-medium italic leading-relaxed">
                  "The operational transparency in allocation schedules is commendable. AMP ensures every scholarship metric connects flawlessly with student databases."
                </p>
                <div className="pt-2 border-t border-gray-200/40 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#5C0612]/5 flex items-center justify-center font-mono text-[9px] font-black text-[#5C0612]">RK</div>
                  <div>
                    <h4 className="text-xs font-serif font-black text-gray-950">Prof. R. Khan</h4>
                    <span className="text-[8px] font-mono font-bold text-gray-400 block">Academic Coordinator</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Slab 2 */}
              <div className="bg-[#FAF9F5] border border-gray-200/60 rounded-2xl p-4 text-left space-y-1.5 relative group hover:border-[#5C0612] transition-colors">
                <span className="text-2xl font-serif font-black text-[#D2AC6A]/40 leading-none block">“</span>
                <p className="text-[11px] text-gray-600 font-medium italic leading-relaxed">
                  "Participating in corporate placement drives organized by regional volunteer cells proved highly professional, structured, and cleanly monitored."
                </p>
                <div className="pt-2 border-t border-gray-200/40 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#5C0612]/5 flex items-center justify-center font-mono text-[9px] font-black text-[#5C0612]">SM</div>
                  <div>
                    <h4 className="text-xs font-serif font-black text-gray-950">S. Mehra</h4>
                    <span className="text-[8px] font-mono font-bold text-gray-400 block">HR Lead, Nexus Corp</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Slab 3 */}
              <div className="bg-[#FAF9F5] border border-gray-200/60 rounded-2xl p-4 text-left space-y-1.5 relative group hover:border-[#5C0612] transition-colors">
                <span className="text-2xl font-serif font-black text-[#D2AC6A]/40 leading-none block">“</span>
                <p className="text-[11px] text-gray-600 font-medium italic leading-relaxed">
                  "Coordinating strategic meetings across regional hubs delivers clean, scalable results for long-term mapping blueprints."
                </p>
                <div className="pt-2 border-t border-gray-200/40 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#5C0612]/5 flex items-center justify-center font-mono text-[9px] font-black text-[#5C0612]">AA</div>
                  <div>
                    <h4 className="text-xs font-serif font-black text-gray-950">A. Ahmed</h4>
                    <span className="text-[8px] font-mono font-bold text-gray-400 block">Regional Logistics Lead</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* =========================================================================
          👑 SECTION 8: MEDIA & EVENTS GALLERY (8-Box Matrix Grid Continuum)
          ✨ Fix Check: Removed the "// VISUAL REGISTERS" top text badge.
          ✨ Responsive Fix: Forces exactly a 2-column layout on mobile instead of long 1-column stack.
          ✨ Rule Check: 100% Self-contained independent layout section block.
         ========================================================================= */}
      <section id="homepage-media-gallery" className="py-12 px-4 md:px-12 lg:px-6 xl:px-24 bg-[#FCFBFA] border-b border-gray-200/20 relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-6">
          
          {/* Centered Section Header */}
          <div className="text-center w-full flex flex-col items-center justify-center space-y-1 mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-black text-gray-950 tracking-tight text-center">
              Our Media Gallery
            </h2>
            <div className="w-12 h-[2px] bg-[#D2AC6A] mx-auto mt-1.5"></div>
          </div>

          {/* 📊 The 8-Card Framework: `grid-cols-2` forces side-by-side blocks on tiny mobile screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 pt-2">
            
            {/* Box 1: Mega Job Fair Cell */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1521791136368-1a46827d091c?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-[#D2AC6A] text-gray-900 px-1.5 py-0.5 rounded uppercase block w-max">Placement</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Mega Job Fair Drive</h4>
              </div>
            </div>

            {/* Box 2: National Talent Search Exam */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-[#5C0612] text-white px-1.5 py-0.5 rounded uppercase block w-max">NTS 2025</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Talent Search Centre</h4>
              </div>
            </div>

            {/* Box 3: Scholarship Distribution */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-emerald-600 text-white px-1.5 py-0.5 rounded uppercase block w-max">Scholarships</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Higher Education Meet</h4>
              </div>
            </div>

            {/* Box 4: Chapters Forum */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-indigo-600 text-white px-1.5 py-0.5 rounded uppercase block w-max">Chapters</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Mumbai Consultative Forum</h4>
              </div>
            </div>

            {/* Box 5: Academic Felicitation Series */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-amber-600 text-white px-1.5 py-0.5 rounded uppercase block w-max">Honors</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Student Felicitation Drive</h4>
              </div>
            </div>

            {/* Box 6: Skill Development Bootcamp */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-cyan-600 text-white px-1.5 py-0.5 rounded uppercase block w-max">Training</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Youth Skill Tech Camp</h4>
              </div>
            </div>

            {/* Box 7: Board Prep Seminar */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-rose-700 text-white px-1.5 py-0.5 rounded uppercase block w-max">Education</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">Board Exam Prep Series</h4>
              </div>
            </div>

            {/* Box 8: National Campaign Hub */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-950 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 z-0" alt="Drive" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0004]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-3 left-3 right-3 z-20 text-left">
                <span className="text-[7px] font-mono font-black bg-purple-600 text-white px-1.5 py-0.5 rounded uppercase block w-max">Campaign</span>
                <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white tracking-tight mt-1 line-clamp-1">National Growth Sync Logs</h4>
              </div>
            </div>

          </div>

          {/* View Full Gallery Link Hub */}
          <div className="pt-2 flex justify-center md:justify-end w-full">
            <Link href="/resource-center/gallery" className="text-[10px] font-black uppercase tracking-widest text-[#5C0612] border-b-2 border-b-[#D2AC6A]/50 pb-0.5 hover:border-b-[#5C0612] transition-all">
              View All Media Logs ➔
            </Link>
          </div>

        </div>
      </section>
      {/* =========================================================================
          👑 LAYER 4: BRAND TRANSPARENCY DEEP FOOTER
         ========================================================================= */}
      <footer className="bg-[#100002] text-white py-12 px-6 border-t-4 border-[#D2AC6A] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#D2AC6A]">Central Governance & Transparency Labs Core</h4>
            <p className="text-gray-400 text-xs mt-2 max-w-sm font-medium">All financial ledgers, scholarship metrics logs, and compliance candidate files are integrated safely.</p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono font-black uppercase tracking-wider">
            © 2026 AMP INDIA • CENTRAL NODE SECURED
          </div>
        </div>
      </footer>

    </div>
  );
}
