'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function SuccessStoriesLandingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const storiesData = [
    { id: 'sajid-ansari', name: 'Sajid Ansari', category: 'Employment Integration' },
    { id: 'zainab-sheikh', name: 'Zainab Sheikh', category: 'Academic Excellence' },
    { id: 'faisal-khan', name: 'Faisal Khan', category: 'Enterprise Incubator' }
  ];

  const filteredStories = storiesData.filter(story => 
    story.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans antialiased selection:bg-[#6B001A]/10 selection:text-[#6B001A] text-left">
      
      {/* ================= 🟦 1. HERO HEADER ================= */}
      <section className="w-full bg-[#6B001A] text-white pt-24 pb-32 px-6 md:px-12 relative rounded-b-[40px] md:rounded-b-[80px] shadow-lg text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <p className="text-stone-300 text-xs font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full w-fit mx-auto border border-white/10">
            Our Impact Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight text-white">
            The conviction in <br/>our mission
          </h1>
          <p className="text-stone-200 text-xs md:text-sm max-w-xl mx-auto font-medium opacity-90 leading-relaxed">
            Empowering potential across generations through systematic mentorship configurations, technical baseline incubation, and centralized community networks.
          </p>
        </div>
      </section>

      {/* ================= 📝 2. INTRODUCTORY NARRATIVE ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Our Story</h2>
        <div className="h-1 w-12 bg-[#6B001A] mx-auto rounded-full"></div>
        <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
          The conviction in our model came after systematic research across specialized professional fields. We realize that socioeconomic challenges cannot be solved without deep technical exposure, active interview profiling, and automated mentorship workflows. 
        </p>
        <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-2xl mx-auto opacity-80">
          Thus, we run standardized tracking parameters pan-India to fetch real-time updates directly into our secure verification ledger streams.
        </p>
      </section>

      {/* ================= 👥 3. CANDIDATES PROFILE GRID ================= */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-slate-100">
          <div className="text-left">
            <h3 className="text-xl font-black text-black tracking-tight">Meet our achievers</h3>
          </div>
          
          {/* Search Box Filter */}
          <div className="w-full sm:w-64 relative">
            <input 
              type="text"
              placeholder="Search by candidate name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-black text-xs px-4 py-2 rounded-xl outline-none focus:border-[#6B001A] font-semibold"
            />
          </div>
        </div>

        {/* Profiles Grid Layer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xs transition-all duration-300 hover:shadow-md flex flex-col justify-between group relative">
              
              {/* ✨ BACK TO RICH MAROON BACKGROUND FOR AVATAR FILL */}
              <div className="relative h-60 w-full bg-[#2A000A] flex items-center justify-center overflow-hidden border-b border-slate-100">
                <svg className="w-28 h-28 text-white/80 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
                </svg>
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-stone-200 text-[9px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {story.category}
                </span>
              </div>

              {/* Bottom Card Identity Layer - Pure minimal name look */}
              <div className="p-6 text-center space-y-4 bg-white rounded-b-3xl">
                <div>
                  <h4 className="text-lg font-black text-black group-hover:text-[#6B001A] transition-colors leading-none">
                    {story.name}
                  </h4>
                </div>
                
                {/* Read Full Story Redirect Link */}
                <Link href={`/success-stories/${story.id}`} className="inline-flex items-center justify-center gap-1 text-xs font-bold text-slate-400 group-hover:text-[#6B001A] transition-colors border-t border-slate-100 pt-3 w-full cursor-pointer">
                  <span>Read Full Story</span>
                  <span>➔</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= 📉 4. FOOTER BLOCK ================= */}
      <footer className="w-full bg-[#6B001A] text-white/70 text-xs py-12 mt-20 rounded-t-[30px] md:rounded-t-[60px] text-center border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 space-y-2">
          <p className="font-serif font-black text-lg text-white">AMP Hub Operations</p>
          <p className="font-medium opacity-75">All layout structures adapt seamlessly to dynamic screen configurations automatically.</p>
        </div>
      </footer>

    </div>
  );
}