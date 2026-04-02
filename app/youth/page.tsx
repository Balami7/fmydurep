import React from 'react';
import Link from 'next/link'; // Import Link for Next.js routing
import { ArrowLeft } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Back to Home Link */}
        <Link href="/" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-600 border border-green-600 rounded-full hover:bg-green-50 transition-all">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-32 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black text-black mb-6 tracking-tighter">
          Youth Databank
        </h1>
        
        {/* Hero subtext - set to text-black */}
       {/*<p className="text-xl md:text-2xl text-black mb-8 max-w-2xl leading-relaxed font-medium">
          A one stop shop for all youth activities.
        </p>*/}

        {/* Detailed Write-up Section */}
        <div className="max-w-3xl mb-12 text-left bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h2 className= "text-center text-2xl font-bold text-green-700 mb-4">
            Youth Data Bank for Nigerian Youth
          </h2>
          <div className="space-y-4 text-black leading-relaxed text-lg">
            <p>
              The Youth Data Bank is a digital platfzorm designed to create a centralized database for Nigerian youth, capturing important information such as identity, education, skills, employment status, interests, and career aspirations. The purpose of this platform is to bridge the gap between young people and opportunities by making it easier for government agencies, private organizations, NGOs, and employers to identify, support, and empower youth across the country.
            </p>
            <p>
              Through verified profiles and skill-based records, the platform can connect young Nigerians to jobs, training programs, grants, internships, scholarships, and empowerment initiatives. It also serves as a reliable tool for data-driven decision-making, helping institutions understand youth needs by location, sector, and skill level.
            </p>
            <p className="font-bold">
              The Youth Data Bank aims to promote inclusion, reduce unemployment, and create a stronger pathway for youth development, innovation, and national growth in Nigeria.
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link 
            href="https://urep-ng.vercel.app/databank" 
            className="flex-1 text-center px-8 py-4 bg-green-600 text-white rounded-2xl text-lg font-bold hover:bg-green-700 hover:-translate-y-1 transition-all shadow-xl shadow-green-100"
          >
            Register
          </Link>
          <Link 
            href="https://urep-ng.vercel.app/login" 
            className="flex-1 text-center px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-2xl text-lg font-bold hover:bg-green-50 transition-all"
          >
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
