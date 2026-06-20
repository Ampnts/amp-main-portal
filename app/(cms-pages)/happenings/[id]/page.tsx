"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HappeningDetailPage() {
  const params = useParams();
  const id = params?.id;

  // Mock Dynamic CMS Data Database Node
  const articlesData: Record<string, { 
    title: string; 
    date: string; 
    category: string; 
    content: string[]; 
    location: string;
    bannerImg?: string;
    subtitle?: string;
  }> = {
    "january-stars-2026": {
      title: "AMP Stars of the Month – January 2026!",
      date: "JANUARY 2026",
      category: "HONORS SYNC",
      location: "Melvisharam, Tamil Nadu",
      subtitle: "“The greatness of a community is most accurately measured by the compassionate actions of its members.”",
      content: [
        "Association of Muslim Professionals (AMP) extends its congratulations to Mr. Mohammed Zachid Wasim (Tamil Nadu) for being recognized for his outstanding dedication and impactful contributions. A passionate trainer who loves spreading knowledge and a creative designer who transforms ideas into powerful visual materials.",
        "Founded Zahra Academy to develop quality learning materials for students and to conduct workshops and training programs. Served as an Ambassador for AMP, promoting NTS and appointing Observers for Chennai, and also worked as a Cause Manager for IndiaZakat.com.",
        "Actively working with the community to uplift deserving and needy individuals who require financial assistance."
      ]
    },
    "amp-achievements-2025": {
      title: "AMP Achievements 2025",
      date: "DECEMBER 2025",
      category: "ANNUAL REPORT",
      location: "National Head Node",
      subtitle: "Transforming Lives Through Education, Economy & Empowerment",
      // Reliable fallback image placeholder that won't block loading
      bannerImg: "https://picsum.photos/id/1067/1200/600", 
      content: [
        "Alhamdulillah! 2025 stands as a milestone year in AMP's journey of nation-building through community empowerment. Guided by our unwavering focus in Education, Economy & Empowerment, AMP's volunteers, State & Chapter teams, partners, and supporters came together with a shared purpose.",
        "What we witnessed this year was not incremental growth, but collective momentum. Thousands of committed volunteers, institutions, NGOs, educators, donors, and well-wishers collaborated to turn vision into action.",
        "Our strategic initiatives across massive job drives and educational setups scaled cleanly past all projected internal thresholds seamlessly."
      ]
    }
  };

  const currentArticle = articlesData[id as string] || articlesData["january-stars-2026"];

  return (
    <div className="w-full min-h-screen bg-[#FCFBFA] text-gray-950 font-sans antialiased pb-20">
      
      {/* Signature Ripped Cut Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .ripped-bottom-divider {
          clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 96% 96%, 93% 91%, 88% 95%, 82% 91%, 76% 96%, 70% 92%, 63% 96%, 57% 91%, 50% 95%, 44% 92%, 37% 96%, 31% 91%, 25% 95%, 19% 91%, 13% 96%, 7% 91%, 0% 95%);
        }
      `}} />

      {/* 👑 LAYER 1: DYNAMIC DUAL-MODE HEADER BANNER */}
      {currentArticle.bannerImg ? (
        /* 🖼️ CASE A: Banner Image Mode (With absolute positioning to guarantee overlay shows) */
        <div className="w-full h-[320px] md:h-[420px] relative bg-[#122240] overflow-hidden ripped-bottom-divider">
          <img 
            src={currentArticle.bannerImg} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 scale-100 transition-transform duration-700"
            alt="Report Banner"
            onError={(e) => {
              // Target fallback if image network fails completely
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122240] via-[#122240]/40 to-transparent"></div>
          
          <div className="absolute bottom-16 left-0 right-0 px-4 md:px-12 lg:px-24 text-left text-white max-w-[1200px] mx-auto space-y-3 z-10">
            <div className="flex items-center gap-2 text-[10px] font-mono font-black tracking-widest text-[#fbca01] uppercase">
              <span>{currentArticle.date}</span>
              <span>•</span>
              <span className="bg-[#fbca01]/20 text-[#fbca01] px-2 py-0.5 rounded">{currentArticle.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-none text-white drop-shadow-lg">
              {currentArticle.title}
            </h1>
          </div>
        </div>
      ) : (
        /* 📄 CASE B: No Banner Image Mode (Sir's Custom Simple Text Base Banner) */
        <div className="w-full bg-gradient-to-b from-[#122240] to-[#0b1528] text-white pt-20 pb-24 px-4 md:px-12 lg:px-24 ripped-bottom-divider text-left relative z-0">
          <div className="max-w-[1200px] mx-auto space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-black tracking-widest text-[#fbca01] uppercase">
              <span>{currentArticle.date}</span>
              <span>•</span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-white">{currentArticle.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight max-w-4xl text-white">
              {currentArticle.title}
            </h1>
          </div>
        </div>
      )}

      {/* 📄 LAYER 2: ASYMMETRIC CONTENT BLOCK MATRIX */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 -mt-6 md:-mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Editorial Reading Area */}
        <div className="lg:col-span-8 bg-white border border-gray-200/80 rounded-[24px] md:rounded-[32px] shadow-xl p-6 md:p-10 text-left space-y-6">
          
          <div className="pb-4 border-b border-gray-100 flex items-center justify-between">
            <Link href="/" className="text-[10px] font-mono font-black uppercase tracking-widest text-[#122240] hover:text-[#fbca01] transition-colors flex items-center gap-1.5">
              <span>🡸 Return To Central Hub</span>
            </Link>
            <span className="text-[9px] font-mono font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
              AMP CMS Verified Ledger
            </span>
          </div>

          {currentArticle.subtitle && (
            <blockquote className="border-l-4 border-[#fbca01] bg-[#FAF9F5] p-4 rounded-r-xl text-xs md:text-sm font-serif italic text-gray-700 leading-relaxed">
              {currentArticle.subtitle}
            </blockquote>
          )}

          <div className="text-base text-gray-800 leading-relaxed font-serif space-y-6 pt-2">
            {currentArticle.content.map((paragraph, index) => (
              <p key={index} className="first-letter:text-3xl first-letter:font-black first-letter:text-[#122240] first-letter:mr-1.5 first-letter:float-left first-letter:leading-none">
                {paragraph}
              </p>
            ))}
          </div>

          {currentArticle.category === "ANNUAL REPORT" && (
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 bg-[#122240] hover:bg-[#1e355e] text-white font-mono text-xs font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-md">
                📥 Download Full Annual Report PDF
              </a>
            </div>
          )}
        </div>

        {/* Right Side: Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-mono font-black uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-2">
              Metadata Ledger
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Node Context Location:</span>
                <span className="text-xs font-serif font-bold text-gray-900">📍 {currentArticle.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-mono font-black uppercase tracking-wider text-[#122240] border-b border-gray-100 pb-2">
              Latest Highlights
            </h3>
            <ul className="space-y-2.5 text-xs font-serif font-bold text-gray-600">
              <li className="hover:text-[#122240] transition-colors"><Link href="/happenings/january-stars-2026">➔ January Stars of the Month</Link></li>
              <li className="hover:text-[#122240] transition-colors"><Link href="/happenings/amp-achievements-2025">➔ Annual Achievements Grid 2025</Link></li>
            </ul>
          </div>
        </div>

      </section>

    </div>
  );
}