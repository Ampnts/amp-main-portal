'use client';
import React, { useState } from 'react';

export default function MonthlyReportsDashboard() {
  // --- ADMIN PANEL CONTROLS ---
  const headerSection = {
    title: "AMP Monthly Impact Reports",
    subtitle: "Tracking Progress, Transparency & Community Transformation Across India — One Month at a Time"
  };

  const topMetrics = [
    { value: "13+", label: "Years of Reports", icon: "📈" },
    { value: "150+", label: "Monthly Publications", icon: "📖" },
    { value: "18", label: "States Reached", icon: "🗺️" },
    { value: "68+", label: "Active Programs", icon: "📋" }
  ];

  const analyticalMetrics = [
    { value: "78,000+", label: "Beneficiaries Served", desc: "Direct impact on families and individuals", icon: "👥" },
    { value: "1,900+", label: "Active Volunteers", desc: "Dedicated change-makers across 18 states", icon: "🌟" },
    { value: "68", label: "Ongoing Programs", desc: "From education to healthcare to employment", icon: "🎯" },
    { value: "12,400+", label: "Families Assisted", desc: "Housing support and social welfare programs", icon: "🏠" },
    { value: "95,000+", label: "Health Checkups", desc: "Free medical camps and health awareness drives", icon: "🏥" }
  ];

  // --- 🗓️ DATASETS ---
  const baseYears = ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013'];
  const months = [
    'December', 'November', 'October', 'September', 'August', 'July', 
    'June', 'May', 'April', 'March', 'February', 'January'
  ];

  // 🔒 FIXED IMAGE UNIFORM COVER PAGE
  // Humne ek premium flat corporate pattern template fix kar diya hai jo har card par ek jaisa dikhega
  const fixedCoverImage = 'SCHOOLAR.png';

  const allReportsData: any[] = [];
  
  baseYears.forEach((year) => {
    months.forEach((month, index) => {
      allReportsData.push({
        id: `${month.toLowerCase()}-${year}`,
        name: `${month} ${year} Monthly Report`,
        pages: `${30 + (index * 2)} pages`,
        img: fixedCoverImage, // Constantly applying the absolute same layout cover
        year: year,
        pdfUrl: '#'
      });
    });
  });

  const [activeFilter, setActiveFilter] = useState('Latest');
  const [searchQuery, setSearchQuery] = useState('');

  // --- ⚡ DROPDOWN SYSTEM ---
  const uploadedYears = Array.from(new Set(allReportsData.map(r => r.year)));
  const futureYears = uploadedYears.filter(year => !baseYears.includes(year) && parseInt(year) > 2026);
  const allDropdownYears = [...futureYears, ...baseYears];

  // --- ⚙️ FILTER ENGINE ---
  const filteredReports = allReportsData.filter((report) => {
    const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          report.year.includes(searchQuery);

    if (searchQuery.trim() !== '') {
      return matchesSearch;
    }
    if (activeFilter === 'Latest') {
      return report.year === '2026';
    }
    return report.year === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans antialiased selection:bg-[#6B001A]/10 selection:text-[#6B001A]">
      
      {/* HERO BANNER SECTION */}
      <section className="w-full bg-gradient-to-br from-[#4A0012] via-[#6B001A] to-[#800020] text-white py-24 px-4 relative overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">{headerSection.title}</h1>
          <p className="text-stone-100 text-sm md:text-lg max-w-3xl mx-auto font-normal leading-relaxed">{headerSection.subtitle}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 max-w-5xl mx-auto">
            {topMetrics.map((metric, index) => (
              <div key={index} className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-2xl p-5">
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-2xl md:text-4xl font-black text-white tracking-tight">{metric.value}</div>
                <div className="text-[11px] text-stone-200 font-bold uppercase tracking-wider mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS AREA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticalMetrics.slice(0, 3).map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-300 rounded-2xl p-6 text-left shadow-xs">
              <span className="text-[11px] font-bold text-[#6B001A] bg-[#FAECEF] px-3 py-1 rounded-md tracking-wide flex items-center gap-1.5">
                <span>{item.icon}</span> {item.label}
              </span>
              <div className="mt-4">
                <div className="text-3xl font-black text-black tracking-tight">{item.value}</div>
                <div className="text-xs text-black font-semibold mt-1 leading-snug">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BROWSE CATALOG ================= */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div className="space-y-1 text-left">
              <h2 className="text-3xl font-extrabold text-black tracking-tight">Browse All Reports</h2>
              <p className="text-black text-xs font-semibold">Search across years or use the dropdown selector below</p>
            </div>
            
            {/* SEARCH */}
            <div className="w-full md:w-80 relative">
              <input 
                type="text" 
                placeholder="Type any month or year to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 text-black text-sm px-4 py-2.5 pl-10 rounded-xl outline-none focus:border-[#6B001A] focus:ring-1 focus:ring-[#6B001A] shadow-xs font-semibold placeholder-slate-500"
              />
              <span className="absolute left-3.5 top-3.5 text-black text-xs">🔍</span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-4 border-b border-slate-300">
            <button
              onClick={() => {
                setActiveFilter('Latest');
                setSearchQuery('');
              }}
              className={`text-xs font-bold px-5 py-2.5 rounded-xl transition-all border cursor-pointer ${
                activeFilter === 'Latest' && searchQuery === ''
                  ? 'bg-[#6B001A] text-white border-[#6B001A] shadow-sm' 
                  : 'bg-white text-black border-slate-300 hover:border-slate-400'
              }`}
            >
              Latest Reports
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black uppercase tracking-wider">Select Archive Year:</span>
              <select
                value={activeFilter === 'Latest' ? '2026' : activeFilter}
                onChange={(e) => {
                  setActiveFilter(e.target.value);
                  setSearchQuery(''); 
                }}
                className="bg-white border border-slate-300 text-black text-xs font-bold px-4 py-2.5 rounded-xl outline-none focus:border-[#6B001A] shadow-xs cursor-pointer min-w-[120px]"
              >
                {allDropdownYears.map((year) => (
                  <option key={year} value={year}>
                    Year {year}
                  </option>
                ))}
              </select>
            </div>

            {searchQuery && (
              <span className="text-xs font-bold bg-[#FAECEF] text-[#6B001A] px-3 py-1.5 rounded-lg">
                Search Results for: "{searchQuery}"
              </span>
            )}
          </div>

          {/* ================= 📦 CARDS TIMELINE GRID (Fixed Uniform Brand Cover) ================= */}
          {filteredReports.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredReports.map((report) => (
                <div key={report.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group">
                  
                  {/* Fixed Cover Image applied globally to all tiles */}
                  <div className="relative h-32 sm:h-48 w-full bg-slate-100 overflow-hidden">
                    <img src={report.img} alt={report.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" />
                    <div className="absolute inset-0 bg-[#6B001A]/5 group-hover:bg-transparent transition-all duration-300" />
                  </div>
                  
                  <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1 sm:space-y-2 text-left">
                      <span className="text-[10px] sm:text-[11px] font-bold text-black flex items-center gap-1">📅 Year {report.year}</span>
                      <h3 className="text-sm sm:text-xl font-black text-black group-hover:text-[#6B001A] transition-colors tracking-tight leading-tight">{report.name}</h3>
                      <p className="text-[10px] sm:text-xs text-black font-medium">AMP Hub — {report.pages}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 sm:pt-5 border-t border-slate-200">
                      <a href={report.pdfUrl} target="_blank" rel="noopener noreferrer" className="bg-[#6B001A] hover:bg-[#520014] text-white text-[10px] sm:text-xs font-bold py-2 sm:py-2.5 rounded-xl text-center uppercase tracking-wide cursor-pointer flex items-center justify-center gap-1">
                        <span>👁️</span> View
                      </a>
                      <a href={report.pdfUrl} download className="bg-white hover:bg-slate-100 border border-slate-300 text-black text-[10px] sm:text-xs font-bold py-2 sm:py-2.5 rounded-xl text-center uppercase tracking-wide cursor-pointer flex items-center justify-center gap-1">
                        <span>📥</span> Download
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-dashed border-slate-300 rounded-2xl">
              <span className="text-4xl block mb-2">📄</span>
              <p className="text-black text-sm font-bold">No matching monthly reports found.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}