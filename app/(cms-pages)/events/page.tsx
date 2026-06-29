'use client';
import React from 'react';
import Link from 'next/link';

export default function AdvancedEventsFeed() {
  const liveFeeds = [
    { id: 'career-guidance-2026', title: 'National Career Guidance Seminar 2026', date: '15 July 2026', time: '04:00 PM', location: 'Online via Zoom', scope: 'Pan-India Wing', highlight: 'Most Popular' },
    { id: 'mega-job-fair', title: 'Mega Job Fair & Employment Drive', date: '02 August 2026', time: '11:00 AM', location: 'AMP Mumbai Head Office', scope: 'Corporate Alignment', highlight: '15+ Panels' },
    { id: 'teacher-training', title: 'Teacher Training Excellence Workshop', date: '18 August 2026', time: '02:30 PM', location: 'Anjuman-I-Islam Campus', scope: 'Academic Infrastructure', highlight: 'Certification' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E1E1E] font-sans antialiased flex flex-col md:flex-row relative">
      
      {/* ⚡ LEFT STICKY PANEL */}
      <aside className="w-full md:w-[380px] bg-[#6B001A] text-white p-8 md:p-12 md:sticky md:top-0 md:h-screen flex flex-col justify-between border-r border-black/10 shadow-xl">
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[10px] font-mono tracking-widest uppercase">System Core Live</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-none">
              Operations <br/><span className="italic font-normal text-stone-300">Stream.</span>
            </h1>
            <p className="text-stone-300 text-xs font-medium leading-relaxed opacity-80">
              A premium technical command grid logging real-time operational milestones, placement pipelines, and workshop modules.
            </p>
          </div>
        </div>
      </aside>

      {/* 🚀 RIGHT DYNAMIC TIMELINE STREAM */}
      <main className="flex-1 p-6 md:p-16 max-w-4xl">
        {/* PRO-LEVEL OVERLAPPING DECK STACK */}
        <div className="space-y-6">
          {liveFeeds.map((feed) => (
            <div key={feed.id} className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group relative overflow-hidden text-left">
              
              {/* Highlight Tag */}
              <div className="absolute top-0 right-0 bg-[#6B001A] text-white font-mono text-[9px] font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                {feed.highlight}
              </div>

              {/* Core Context */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-black text-[#6B001A] bg-[#FAECEF] px-2.5 py-0.5 rounded-sm uppercase">
                    {feed.scope}
                  </span>
                  <span className="text-xs font-mono text-stone-400 font-bold">/ {feed.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-black text-black tracking-tight leading-tight group-hover:text-[#6B001A] transition-colors">
                  {feed.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-stone-500 text-xs font-semibold pt-1">
                  <span className="flex items-center gap-1">🕒 {feed.time}</span>
                  <span className="flex items-center gap-1">📍 {feed.location}</span>
                </div>
              </div>

              {/* Action Trigger Tab */}
              <div className="sm:border-l border-stone-100 sm:pl-6 flex items-center">
                <Link href={`/events/${feed.id}`} className="inline-flex items-center justify-center gap-2 bg-stone-50 group-hover:bg-[#6B001A] text-stone-800 group-hover:text-white border border-stone-200 group-hover:border-[#6B001A] px-5 py-3 rounded-xl transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider w-full sm:w-auto cursor-pointer">
                  <span>Initialize</span>
                  <span>➔</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </main>

    </div>
  );
}