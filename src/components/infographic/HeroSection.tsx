import React from 'react';
import { FileText, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl" />
      
      {/* Content */}
      <div className="relative px-8 py-16 md:px-16 md:py-20">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30">
            <FileText className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Internal use</span>
          </div>
        </div>
        
        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white leading-tight mb-6"><span className="block text-teal-400 mt-2">Overview</span>IP Protection Pathway</h1>
        
        {/* Subtitle */}
        <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">Documenting the journey from initial enquiry to present review stage</p>
        
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">19</div>
            <div className="text-slate-400 text-sm mt-1">Process Stages</div>
          </div>
          <div className="w-px h-16 bg-slate-600 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400">25,000+</div>
            <div className="text-slate-400 text-sm mt-1">Words</div>
          </div>
          <div className="w-px h-16 bg-slate-600 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">5</div>
            <div className="text-slate-400 text-sm mt-1">Core documents</div>
          </div>
          <div className="w-px h-16 bg-slate-600 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">13</div>
            <div className="text-slate-400 text-sm mt-1">Revisions</div>
          </div>
        </div>
        
        {/* Action button */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#timeline" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-teal-500/25">
            <ArrowDown className="w-5 h-5" />
            View Timeline
          </a>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </div>;
};

export default HeroSection;
