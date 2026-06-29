'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CandidateDetailPage() {
  const params = useParams();
  const candidateId = params.id; // URL se automatic slug id nikal lega (jaise: sajid-ansari)

  // --- 📝 MOCK DATASET FOR DETAILED PROFILES ---
  // Backend integrate hone par ye specific content Flask/SQL se automatic fetch hoga
  const database: Record<string, { name: string; title: string; category: string; fullStory: string }> = {
    'sajid-ansari': {
      name: 'Sajid Ansari',
      title: 'Placed at Tata Consultancy Services (TCS) as Systems Architect',
      category: 'Employment Integration',
      fullStory: 'Sajid came from a modest background but had great proficiency in coding. Through the continuous industry-aligned mock placement drives and cloud architecture mentorship sessions, he successfully cracked the multi-tiered selection panel at TCS. His determination has set a true example for incoming batches.'
    },
    'zainab-sheikh': {
      name: 'Zainab Sheikh',
      title: 'Cleared National Level Higher Education Merit Scholarship',
      category: 'Academic Excellence',
      fullStory: 'Zainab consistency shone through our nationwide talent search screening logs. With dedicated access to premium study resource repositories and digital financial aids, she secured her admission pathway without any economic hurdles. She is currently pursuing her advanced data research programs.'
    },
    'faisal-khan': {
      name: 'Faisal Khan',
      title: 'Successfully Launched Agro-Tech Startup Infrastructure',
      category: 'Enterprise Development',
      fullStory: 'Faisal utilized our unified seed incubation support to transform a simple automated blueprint into a registered enterprise entity. He currently leads a field workforce team of seven core members directly driving rural impact and establishing smart supply chain automation processes.'
    }
  };

  // Agar database mein ID match na ho, toh default data fetch karega break hone se bachane ke liye
  const currentCandidate = database[candidateId as string] || database['sajid-ansari'];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-sans antialiased text-left relative">
      
      {/* ================= 🏢 TOP ACCENT NAVIGATION BAR ================= */}
      <div className="w-full bg-white border-b border-slate-200 py-5 px-4 md:px-12 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/success-stories" className="text-xs font-bold text-slate-400 hover:text-[#6B001A] transition-colors flex items-center gap-1">
            <span>←</span> Back to Achievers Hub
          </Link>
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
            Profile Verified Node
          </span>
        </div>
      </div>

      {/* ================= 📦 MAIN LAYOUT CONTAINER GRID ================= */}
      <main className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* 👤 LEFT COLUMN: CLEAN FIXED USER AVATAR FRAME (As per image_319481 layout style) */}
        <div className="space-y-6 md:sticky md:top-24">
          <div className="relative aspect-square w-full bg-slate-100 rounded-3xl border border-slate-200 shadow-2xs flex items-center justify-center overflow-hidden">
            {/* White/Sleek User Dummy Vector Graphic */}
            <svg className="w-32 h-32 text-[#6B001A]/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
            </svg>
          </div>
          
          {/* Candidate Quick Identity Block */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-2xs text-left space-y-3">
            <div>
              <span className="text-[9px] font-mono font-bold uppercase text-[#6B001A] bg-[#FAECEF] px-2.5 py-0.5 rounded tracking-wider inline-block">
                {currentCandidate.category}
              </span>
              <h2 className="text-2xl font-bold text-black tracking-tight mt-2 leading-none">{currentCandidate.name}</h2>
            </div>
            <div className="h-px w-full bg-slate-100"></div>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Verification ID: {candidateId}</p>
          </div>
        </div>

        {/* 📄 RIGHT COLUMN: COMPREHENSIVE SUCCESS STORY PROFILE */}
        <div className="md:col-span-2 space-y-8 bg-white border border-slate-200 p-6 md:p-10 rounded-3xl shadow-2xs">
          <div className="space-y-3 text-left">
            <p className="text-[#6B001A] text-[10px] font-mono font-bold uppercase tracking-widest">— Case Narrative Portfolio</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight leading-tight">
              {currentCandidate.title}
            </h1>
          </div>

          {/* Symmetrical divider line */}
          <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent"></div>

          {/* Large Editorial Text Layout */}
          <div className="text-left">
            <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed opacity-95 first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:text-[#6B001A] first-letter:mr-2 first-letter:float-left">
              {currentCandidate.fullStory}
            </p>
          </div>

          {/* Verification Details Footer inside card */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-left w-full">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Active Core Ledger Stream Verified</span>
            </div>
            <span className="text-xs font-serif italic text-slate-400">AMP Terminal</span>
          </div>
        </div>

      </main>

    </div>
  );
} 