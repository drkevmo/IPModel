import React from 'react';

interface PhaseHeaderProps {
  phaseNumber: number;
  title: string;
  description: string;
  color: string;
}

const PhaseHeader: React.FC<PhaseHeaderProps> = ({
  phaseNumber,
  title,
  description,
  color
}) => {
  return (
    <div className="relative py-8">
      {/* Decorative line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
      
      {/* Phase badge */}
      <div className="relative flex justify-center">
        <div 
          className="px-8 py-4 rounded-2xl shadow-lg"
          style={{ backgroundColor: color }}
        >
          <div className="text-center">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Phase {phaseNumber}
            </span>
            <h2 className="text-xl font-bold text-white mt-1">{title}</h2>
            <p className="text-white/90 text-sm mt-1 max-w-md">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseHeader;
