'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function StartOfMonthListing() {
  const [searchQuery, setSearchQuery] = useState('');

  const monthlyLogs = [
    { id: 'july-2026-kickoff', title: 'July 2026 Operational Milestone Kickoff', monthName: 'July 2026', scope: 'Strategic Launch', status: 'Active Release' },
    { id: 'june-2026-review', title: 'June 2026 Nationwide Incubation Logging', monthName: 'June 2026', scope: 'Performance Review', status: 'Archived Node' },
    { id: 'may-2026-audit', title: 'May 2026 Core Resource Grid Allocation', monthName: 'May 2026', scope: 'Asset Distribution', status: 'Archived Node' }
  ];

  const filteredLogs = monthlyLogs.filter(log => 
    log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.monthName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans antialiased selection:bg-[#6B001A]/10 selection:text-[#6B001A] text-left">
      
      {/* 🟦 BANNER HEADER */}
      <section className="w-full bg-[#6B001A] text-white pt-24 pb-32 px-6 md:px-12 relative rounded-b-[40px] md:rounded-b-[80px] shadow-lg text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <p className="text-stone-300 text-xs font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full w-fit mx-auto border border-white/10">
            System Synchronizer Log
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight text-white">
            Start of the Month <br/>Ecosystem Feed
          </h1>
        </div>
      </section>

      {/* 👥 LISTING DECK CONTAINER */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-10 border-b border-slate-100">
          <h3 className="text-xl font-black text-black tracking-tight">Monthly Accounts Ledger</h3>
          
          <div className="w-full sm:w-64 relative">
            <input 
              type="text"
              placeholder="Filter by month name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-black text-xs px-4 py-2 rounded-xl outline-none focus:border-[#6B001A] font-semibold"
            />
          </div>
        </div>

        {/* Dynamic Cards Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLogs.map((log) => (
            <div key={log.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative">
              
              {/* Maroon Box Fill Graphic Frame Container with White Vector Icon */}
              <div className="relative h-48 w-full bg-[#2A000A] flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <svg className="w-20 h-20 text-white/80 transition-transform duration-300 group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-stone-200 text-[9px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {log.scope}
                </span>
              </div>

              {/* Minimalist Data Layer */}
              <div className="p-6 text-center space-y-4 bg-white rounded-b-3xl">
                <h4 className="text-lg font-black text-black group-hover:text-[#6B001A] transition-colors leading-tight">
                  {log.name || log.title}
                </h4>
                
                <Link href={`/happenings/${log.id}`} className="inline-flex items-center justify-center gap-1 text-xs font-bold text-slate-400 group-hover:text-[#6B001A] transition-colors border-t border-slate-100 pt-3 w-full cursor-pointer">
                  <span>Read Full Story</span>
                  <span>➔</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}