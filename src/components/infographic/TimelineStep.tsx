import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  stepNumber: number;
  title: string;
  description: string;
  subheader?: string;
  wordCount?: string;
  icon: LucideIcon;
  isLast?: boolean;
  phaseColor: string;
  notes?: string[];
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  stepNumber,
  title,
  description,
  subheader,
  wordCount,
  icon: Icon,
  isLast = false,
  phaseColor,
  notes
}) => {
  return (
    <div className="relative flex gap-4 md:gap-6 pb-8">
      {/* Vertical connector line */}
      {!isLast && (
        <div 
          className="absolute left-6 top-14 w-0.5 h-[calc(100%-3.5rem)]"
          style={{ backgroundColor: '#E2E8F0' }}
        />
      )}
      
      {/* Step number badge */}
      <div 
        className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
        style={{ backgroundColor: phaseColor }}
      >
        {stepNumber}
      </div>
      
      {/* Content card */}
      <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Header */}
        <div 
          className="px-4 md:px-6 py-4 flex items-center gap-3 md:gap-4"
          style={{ backgroundColor: `${phaseColor}10` }}
        >
          <div 
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: phaseColor }}
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">{title}</h3>
            {wordCount && (
              <span 
                className="inline-block mt-1 px-2 md:px-3 py-0.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: '#0D9488' }}
              >
                {wordCount}
              </span>
            )}
          </div>
        </div>
        
        {/* Body */}
        <div className="px-4 md:px-6 py-4">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
          
          {/* Subheader quote section */}
          {subheader && (
            <div className="mt-4 p-4 bg-slate-100 border-l-4 border-slate-400 rounded-r-lg">
              <p className="text-slate-700 text-sm italic leading-relaxed">{subheader}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default TimelineStep;
