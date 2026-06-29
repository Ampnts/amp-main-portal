'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function AdvancedEventDetail() {
  const params = useParams();
  const eventId = params.id;

  const logsDatabase: Record<string, { title: string; date: string; time: string; location: string; scope: string; description: string }> = {
    'career-guidance-2026': {
      title: 'National Career Guidance Seminar 2026',
      date: '15 July 2026',
      time: '04:00 PM',
      location: 'Online via Zoom',
      scope: 'Pan-India Wing',
      description: 'Join elite industry experts as they unfold critical career pathways, modern cloud architecture roles, and market expectations for the upcoming batches. This session will include live interactive Q&A rounds.'
    },
    'mega-job-fair': {
      title: 'Mega Job Fair & Employment Drive',
      date: '02 August 2026',
      time: '11:00 AM',
      location: 'AMP Mumbai Head Office',
      scope: 'Corporate Alignment',
      description: 'A centralized placement drive bringing over 15+ corporate hiring panels under one roof. Opportunities span across technical engineering fields, business operations, and executive management desks.'
    }
  };

  const currentLog = logsDatabase[eventId as string] || logsDatabase['career-guidance-2026'];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black font-sans antialiased text-left relative flex flex-col">
      
      {/* Header Bar */}
      <header className="w-full bg-white border-b border-stone-200 py-6 px-6 md:px-16 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/events" className="text-xs font-mono font-black text-stone-400 hover:text-[#6B001A] transition-colors flex items-center gap-1">
            <span>←</span> Back to Home
          </Link>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B001A] bg-[#FAECEF] px-3 py-1 rounded border border-[#6B001A]/10 uppercase">
            Data Node: Verified
          </span>
        </div>
      </header>

      {/* Main Container Viewport */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 flex-1 w-full">
        
        {/* Core Layout Narrative Sheet */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="inline-block bg-[#6B001A] text-white font-mono text-[10px] font-bold uppercase px-3 py-0.5 rounded-sm tracking-widest">
              {currentLog.scope}
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-none text-black">
              {currentLog.title}
            </h1>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-stone-200 to-transparent"></div>

          <p className="text-stone-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            {currentLog.description}
          </p>
        </div>

        {/* Manifest Fixed Panel Anchor */}
        <div className="space-y-6 md:sticky md:top-28">
          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs text-left space-y-6">
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-400">DATE NODE</span>
                <span className="font-bold text-black">{currentLog.date}</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-400">TIME STAMP</span>
                <span className="font-bold text-black">{currentLog.time}</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-400">GATEWAY</span>
                <span className="font-bold text-black truncate max-w-[150px]">{currentLog.location}</span>
              </div>
            </div>

            <button className="w-full bg-[#6B001A] hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-xs">
              EXECUTE_REGISTRATION ➔
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}