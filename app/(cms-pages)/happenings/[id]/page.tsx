'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MonthlyLogDetail() {
  const params = useParams();
  const logId = params.id;

  const logsDatabase: Record<string, { title: string; date: string; scope: string; description: string }> = {
    'july-2026-kickoff': {
      title: 'July 2026 Operational Milestone Kickoff',
      date: '01 July 2026',
      scope: 'Strategic Launch',
      description: 'The beginning of July operational streams marks deep target allocations across technical placement workflows. This milestone introduces revamped resource pipelines and standardized tracking criteria for upcoming candidate evaluations.'
    },
    'june-2026-review': {
      title: 'June 2026 Nationwide Incubation Logging',
      date: '01 June 2026',
      scope: 'Performance Review',
      description: 'Comprehensive analysis of the nationwide incubation support metrics compiled over the previous monthly cycles. This data-backed log verifies corporate integration baselines and structural scaling indexes.'
    }
  };

  const currentLog = logsDatabase[logId as string] || logsDatabase['july-2026-kickoff'];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-sans antialiased text-left relative">
      
      {/* NAVIGATION HEADER */}
      <div className="w-full bg-white border-b border-slate-200 py-5 px-4 md:px-12 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/happenings" className="text-xs font-bold text-slate-400 hover:text-[#6B001A] transition-colors flex items-center gap-1">
            <span>←</span> Back to Monthly Ledger
          </Link>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B001A] bg-[#FAECEF] px-2.5 py-1 rounded-md border border-[#6B001A]/10">
            Archive Frame Secured
          </span>
        </div>
      </div>

      {/* CORE SYMMETRICAL SHEET */}
      <main className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* LEFT COLUMN ELEMENT */}
        <div className="space-y-6 md:sticky md:top-24">
          <div className="relative aspect-square w-full bg-[#2A000A] rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-center overflow-hidden">
            <svg className="w-24 h-24 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
          </div>
          
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-2xs text-left space-y-3">
            <span className="text-[9px] font-mono font-bold uppercase text-[#6B001A] bg-[#FAECEF] px-2.5 py-0.5 rounded tracking-wider inline-block">
              {currentLog.scope}
            </span>
            <div className="h-px w-full bg-slate-100"></div>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Log Sequence: {logId}</p>
          </div>
        </div>

        {/* RIGHT COLUMN DETAILS */}
        <div className="md:col-span-2 space-y-8 bg-white border border-slate-200 p-6 md:p-10 rounded-3xl shadow-2xs">
          <div className="space-y-3 text-left">
            <p className="text-[#6B001A] text-[10px] font-mono font-bold uppercase tracking-widest">— Manifest Account</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight leading-tight">
              {currentLog.title}
            </h1>
            <p className="text-xs text-slate-400 font-mono font-bold">RELEASE TIMESTAMP: {currentLog.date}</p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent"></div>

          <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:text-[#6B001A] first-letter:mr-2 first-letter:float-left">
            {currentLog.description}
          </p>
        </div>

      </main>
    </div>
  );
}