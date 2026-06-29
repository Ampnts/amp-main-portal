'use client';
import React, { useState } from 'react';

export default function AnnualReportsDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // --- 📝 CMS-FRIENDLY SIMPLIFIED DATASET (Strictly 2025 to 2013) ---
  const annualReports = [
    { year: '2025', fiscal: 'FY 2025-26', title: 'Empowering Through Enterprise', pdfUrl: '#' },
    { year: '2024', fiscal: 'FY 2024-25', title: 'Decade of Dedication', pdfUrl: '#' },
    { year: '2023', fiscal: 'FY 2023-24', title: 'Resilience & Regional Growth', pdfUrl: '#' },
    { year: '2022', fiscal: 'FY 2022-23', title: 'The Technology Leap', pdfUrl: '#' },
    { year: '2021', fiscal: 'FY 2021-22', title: 'Rebuilding Communities', pdfUrl: '#' },
    { year: '2020', fiscal: 'FY 2020-21', title: 'Standing in Solidarity', pdfUrl: '#' },
    { year: '2019', fiscal: 'FY 2019-20', title: 'Transforming Lives Together', pdfUrl: '#' },
    { year: '2018', fiscal: 'FY 2018-19', title: 'Roots of Change', pdfUrl: '#' },
    { year: '2017', fiscal: 'FY 2017-18', title: 'Scaling Sustainable Impact', pdfUrl: '#' },
    { year: '2016', fiscal: 'FY 2016-17', title: 'Foundations of Welfare', pdfUrl: '#' },
    { year: '2015', fiscal: 'FY 2015-16', title: 'The Early Momentum', pdfUrl: '#' },
    { year: '2014', fiscal: 'FY 2014-15', title: 'Structuring the Vision', pdfUrl: '#' },
    { year: '2013', fiscal: 'FY 2013-14', title: 'Where the Journey Began', pdfUrl: '#' },
  ];

  const filteredReports = annualReports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          report.year.includes(searchQuery);

    if (searchQuery.trim() !== '') return matchesSearch;
    if (activeTab === 'Recent') return parseInt(report.year) >= 2022;
    if (activeTab === 'Archive') return parseInt(report.year) < 2022;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans antialiased selection:bg-[#6B001A]/10 selection:text-[#6B001A]">
      
      {/* Forced Left-Right Row Framework for both Web & Mobile */}
      <div className="flex flex-row min-h-screen relative w-full overflow-x-hidden items-stretch">
        
        {/* ================= 🏢 LEFT COLUMN: FIXED PRESTIGE PANEL ================= */}
        <div className="w-[35%] sm:w-[38%] md:w-[40%] bg-gradient-to-br from-[#3D000E] via-[#6B001A] to-[#8A0022] text-white p-3 sm:p-8 md:p-12 fixed h-screen flex flex-col justify-between z-20 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px] pointer-events-none"></div>
          
          {/* Top Branding Section */}
          <div className="space-y-2 sm:space-y-4 relative z-10 text-left">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-lg">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-[7px] sm:text-[10px] font-black uppercase tracking-widest text-stone-200 scale-90 sm:scale-100 origin-left">Repository</span>
            </div>
            <h1 className="text-sm sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              AMP Annual <br/>
              <span className="font-sans font-extrabold italic text-white tracking-normal block mt-0.5 sm:mt-1">Impact Timeline</span>
            </h1>
            <p className="text-stone-200 text-xs md:text-sm max-w-sm font-medium leading-relaxed opacity-90 hidden md:block pt-2">
              A comprehensive archive detailing over a decade of financial transparency, strategic milestones, and nationwide community empowerment.
            </p>
          </div>

          {/* Bottom Analytical Vault Card Layout */}
          <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 p-2 sm:p-5 rounded-xl text-left relative z-10">
            <span className="text-[6px] sm:text-[9px] font-mono tracking-widest text-stone-300 uppercase block mb-0.5 sm:mb-1">Document Vault</span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="text-xs sm:text-2xl md:text-4xl font-black tracking-tight whitespace-nowrap">13+ Years</span>
            </div>
            <div className="h-px w-full bg-white/10 my-1 sm:my-3"></div>
            <p className="text-[7px] sm:text-[11px] text-stone-200 font-medium leading-tight opacity-80">
              Secure CMS Powered.
            </p>
          </div>
        </div>

        {/* ================= 📦 RIGHT COLUMN: SMOOTH SCROLL CHRONO STREAM ================= */}
        <div className="w-[65%] sm:w-[62%] md:w-[60%] ml-[35%] sm:ml-[38%] md:ml-[40%] p-3 sm:p-8 md:p-12 flex flex-col justify-start">
          
          {/* Live Navigation Filters & Input Row Setup */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 border-b border-slate-200 pb-4 mb-5">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none">
              {['All', 'Recent', 'Archive'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                  className={`text-[9px] sm:text-xs font-bold px-2 sm:px-4 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    activeTab === tab && searchQuery === ''
                      ? 'bg-[#6B001A] text-white border-[#6B001A] shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {tab === 'All' ? 'All' : tab === 'Recent' ? 'Recent' : 'Archives'}
                </button>
              ))}
            </div>

            {/* Compact Custom Form Search Box */}
            <div className="w-full xl:w-56 relative">
              <input 
                type="text"
                placeholder="Query year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-black text-[11px] sm:text-xs px-2.5 py-1.5 pl-8 rounded-lg outline-none focus:border-[#6B001A] font-semibold"
              />
              <span className="absolute left-2.5 top-2.5 text-slate-400 text-[9px] sm:text-[11px]">🔍</span>
            </div>
          </div>

          {/* Symmetrical Inline Row Arrays */}
          {filteredReports.length > 0 ? (
            <div className="space-y-2.5">
              {filteredReports.map((report) => (
                <div 
                  key={report.year} 
                  className="bg-white border border-slate-200 hover:border-[#6B001A] p-2 sm:p-4 rounded-xl shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-row items-center justify-between gap-2 text-left group"
                >
                  {/* Left Column Structural Flow */}
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    {/* Minimalist Year Circle Tag Node */}
                    <div className="h-9 w-9 sm:h-14 sm:w-14 rounded-lg bg-slate-50 border border-slate-200 group-hover:bg-[#FAECEF] group-hover:border-[#6B001A] transition-all flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs sm:text-lg font-black text-black tracking-tight leading-none">{report.year}</span>
                      <span className="text-[5px] sm:text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 hidden sm:block">Log</span>
                    </div>

                    {/* Text Metadata Stack */}
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[6px] sm:text-[9px] font-bold text-[#6B001A] bg-[#FAECEF] px-1 sm:px-1.5 py-0.5 rounded uppercase tracking-wider inline-block">
                        {report.fiscal}
                      </span>
                      <h4 className="text-[10px] sm:text-base md:text-lg font-bold sm:font-black text-black group-hover:text-[#6B001A] transition-colors tracking-tight leading-snug truncate">
                        {report.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Column Core Action Buttons Layout */}
                  <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                    <a 
                      href={report.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#6B001A] hover:bg-[#520014] text-white text-[8px] sm:text-xs font-bold px-2 sm:px-4 py-1.5 rounded-md sm:rounded-lg text-center uppercase tracking-wider cursor-pointer"
                    >
                      View
                    </a>
                    <a 
                      href={report.pdfUrl} 
                      download 
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-300 text-black text-[9px] sm:text-xs font-bold p-1.5 sm:p-2 rounded-md sm:rounded-lg text-center cursor-pointer flex items-center justify-center"
                      title="Download PDF"
                    >
                      📥
                    </a>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white border border-dashed border-slate-300 rounded-xl max-w-xs mx-auto mt-6">
              <p className="text-slate-500 text-[10px] sm:text-xs font-bold">No results matched.</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}