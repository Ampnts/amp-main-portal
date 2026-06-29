'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function StartOfMonthListing() {
  const [searchQuery, setSearchQuery] = useState('');

  const monthlyLogs = [
    { id: 'july-2026-kickoff', title: 'July 2026 Operational Milestone Kickoff', monthName: 'July 2026', scope: 'Strategic Launch', date: 'July 1, 2026' },
    { id: 'june-2026-review', title: 'June 2026 Nationwide Incubation Logging', monthName: 'June 2026', scope: 'Performance Review', date: 'June 1, 2026' },
    { id: 'may-2026-audit', title: 'May 2026 Core Resource Grid Allocation', monthName: 'May 2026', scope: 'Asset Distribution', date: 'May 1, 2026' }
  ];

  const filteredLogs = monthlyLogs.filter(log => 
    log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.monthName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased text-left selection:bg-[#fbca01]/30">
      
      {/* 🟦 LIGHT & AIRY HERO HERO HEADER WITH NAVY & GOLD */}
      <section className="w-full bg-[rgb(18,34,64)] text-white pt-28 pb-36 px-6 md:px-12 relative rounded-b-[50px] shadow-xl overflow-hidden text-center flex flex-col items-center justify-center">
        {/* Subtle grid layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        
        {/* Floating background gradient circles */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#fbca01]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#fbca01]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto space-y-4 relative z-10 animate-[fadeIn_0.8s_ease-out]">
          <span className="text-[#fbca01] text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            ✦ Performance & Matrix Ledger
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight text-white">
            Start of the Month <br/><span className="text-[#fbca01]">Ecosystem Hub</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-medium">
            Review architectural milestones, active release deployments, and performance metrics.
          </p>
        </div>
      </section>

      {/* 👥 LIGHT GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 pb-24">
        
        {/* FILTER BAR PANEL */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <h3 className="text-lg font-bold text-[rgb(18,34,64)] flex items-center gap-2">
            <span className="w-2 h-5 bg-[#fbca01] rounded-full inline-block"></span>
            Monthly Logs Directory
          </h3>
          <div className="w-full sm:w-72">
            <input 
              type="text"
              placeholder="Search target month..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs px-4 py-3 rounded-xl outline-none focus:border-[rgb(18,34,64)] focus:bg-white font-semibold transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* 🚀 CARDS GRID WITH ANTI-GRAVITY / FLOATING ENTRY ANIMATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLogs.map((log, index) => (
            <div 
              key={log.id} 
              style={{ animationDelay: `${index * 150}ms` }}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group animate-[floatUp_0.6s_ease-out_both]"
            >
              {/* Navy Header Block with Gold Accent Vector */}
              <div className="relative h-44 w-full bg-[rgb(18,34,64)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                
                {/* Clean Vector Calender Icon */}
                <svg className="w-16 h-16 text-slate-200/20 group-hover:text-[#fbca01]/40 transition-colors duration-300 z-0 absolute" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>

                <div className="relative z-20 text-center space-y-1">
                  <span className="bg-[#fbca01] text-[rgb(18,34,64)] text-[9px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider block w-fit mx-auto shadow-xs">
                    {log.scope}
                  </span>
                  <p className="text-white font-serif font-black text-xl pt-2">{log.monthName}</p>
                </div>
              </div>

              {/* Text Layer */}
              <div className="p-6 space-y-4 bg-white flex-1 flex flex-col justify-between">
                <h4 className="text-base font-bold text-[rgb(18,34,64)] group-hover:text-amber-600 transition-colors leading-snug">
                  {log.title}
                </h4>
                
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-slate-400">{log.date}</span>
                  <Link href={`/start-of-the-month/${log.id}`} className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(18,34,64)] hover:text-[#fbca01] transition-colors group/btn">
                    <span>View Report</span> 
                    <span className="group-hover/btn:translate-x-1 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Injection of entry animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}