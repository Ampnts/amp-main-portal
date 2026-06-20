import Link from 'next/link';

export default function HappeningsPage() {
  // Mock Data: Jab backend judega toh ye data database se aayega
  const newsList = [
    { 
      id: 'nts-2026-launch', 
      title: 'National Talent Search 2026 Exam Registrations Opened', 
      date: 'June 05, 2026', 
      desc: 'AMP launches its annual mega talent search exam across India to reward and support brilliant student minds.' 
    },
    { 
      id: 'mumbai-mega-job-fair', 
      title: 'Mega Job Fair in Mumbai: Over 500+ Openings Available', 
      date: 'May 28, 2026', 
      desc: 'Our Employment Assistance Cell is organizing a massive recruitment drive for both IT and non-IT freshers.' 
    },
    { 
      id: 'national-ngo-conference', 
      title: 'National NGO Conference Scheduled for Next Month', 
      date: 'May 15, 2026', 
      desc: 'Bringing together more than 200 social organizations to coordinate grassroot community development.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-[#800000]">AMP Latest Happenings</h1>
        <p className="text-gray-500 mt-2">Daily News, Media Mentions & Community Updates</p>
      </header>

      {/* News Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {newsList.map((news) => (
          <div key={news.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition bg-white flex flex-col justify-between">
            <div>
              <span className="text-xs text-gray-400 font-semibold">{news.date}</span>
              <h2 className="text-xl font-bold text-[#800000] mt-2 mb-3 line-clamp-2">{news.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{news.desc}</p>
            </div>
            
            {/* Dynamic Link */}
            <Link href={`/happenings/${news.id}`} className="mt-6 inline-block text-sm font-bold text-[#800000] hover:underline">
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}