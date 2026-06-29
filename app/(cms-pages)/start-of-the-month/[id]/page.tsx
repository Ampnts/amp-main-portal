'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MonthlyLogDetail() {
  const params = useParams();
  const logId = params.id;

  const logsDatabase: Record<string, { title: string; date: string; scope: string; description: string; manager: string; status: string }> = {
    'july-2026-kickoff': {
      title: 'July 2026 Operational Milestone Kickoff',
      date: '01 July 2026',
      scope: 'Strategic Launch',
      manager: 'Senior Operations Desk',
      status: 'Active Live System',
      description: 'The beginning of July operational streams marks deep target allocations across technical placement workflows. This milestone introduces revamped resource pipelines and standardized tracking criteria for upcoming candidate evaluations.'
    },
    'june-2026-review': {
      title: 'June 2026 Nationwide Incubation Logging',
      date: '01 June 2026',
      scope: 'Performance Review',
      manager: 'Ecosystem Analytics Team',
      status: 'Archived Reference Node',
      description: 'Comprehensive analysis of the nationwide incubation support metrics compiled over the previous monthly cycles. This data-backed log verifies corporate integration baselines and structural scaling indexes.'
    },
    'may-2026-audit': {
      title: 'May 2026 Core Resource Grid Allocation',
      date: '01 May 2026',
      scope: 'Asset Distribution',
      manager: 'Infrastructure Management Group',
      status: 'Archived Reference Node',
      description: 'Systematic alignment metrics auditing the core structural asset pools distributed across collaborative network hubs. Verification loops confirm asset balance parameters remain within targeted limits.'
    }
  };

  const currentLog = logsDatabase[logId as string] || logsDatabase['july-2026-kickoff'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased text-left relative pb-20">
      
      {/* HEADER NAVBAR CONTAINER */}
      <div className="w-full bg-white/80 border-b border-slate-100 py-5 px-6 md:px-12 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/start-of-the-month" className="text-xs font-bold text-slate-500 hover:text-[rgb(18,34,64)] transition-colors flex items-center gap-1 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Master Ledger
          </Link>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[rgb(18,34,64)] bg-[#fbca01]/10 px-3 py-1 rounded-md border border-[#fbca01]/20">
            SYSTEM NODE ACTIVE
          </span>
        </div>
      </div>

      {/* CORE DISPLAY SHEET */}
      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* LEFT INSIGHT STICKY CARD */}
        <div className="space-y-6 md:sticky md:top-28 animate-[sidebarSlide_0.5s_ease-out]">
          <div className="relative aspect-video md:aspect-square w-full bg-[rgb(18,34,64)] rounded-2xl shadow-md flex flex-col items-center justify-center overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbca01]/10 rounded-full blur-2xl pointer-events-none"></div>
            <svg className="w-16 h-16 text-[#fbca01]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <p className="text-white/60 text-[10px] font-mono uppercase tracking-widest mt-4">Verified Log Structure</p>
          </div>
          
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-4">
            <div>
              <p className="text-slate-400 text-[10px] font-mono uppercase">Ownership Scope</p>
              <p className="text-[rgb(18,34,64)] font-bold text-sm mt-0.5">{currentLog.manager}</p>
            </div>
            <div className="h-px w-full bg-slate-100"></div>
            <div>
              <p className="text-slate-400 text-[10px] font-mono uppercase">System Status</p>
              <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md mt-1">
                {currentLog.status}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT ANALYTICAL SPECIFICATION SHEET */}
        <div className="md:col-span-2 space-y-8 bg-white border border-slate-100 p-6 md:p-12 rounded-3xl shadow-sm animate-[contentSlide_0.6s_ease-out]">
          <div className="space-y-3">
            <div className="bg-[#fbca01]/10 text-[rgb(18,34,64)] text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-md w-fit">
              {currentLog.scope}
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-[rgb(18,34,64)] tracking-tight leading-tight pt-1">
              {currentLog.title}
            </h1>
            <p className="text-xs text-slate-400 font-mono font-bold tracking-wide uppercase">RECORD TIMESTAMP: {currentLog.date}</p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent"></div>

          <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:text-[rgb(18,34,64)] first-letter:mr-2 first-letter:float-left first-letter:bg-[#fbca01] first-letter:px-3 first-letter:rounded-xl">
            {currentLog.description}
          </p>
        </div>

      </main>

      <style jsx global>{`
        @keyframes sidebarSlide {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes contentSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}