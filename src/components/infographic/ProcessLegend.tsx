import React from 'react';
import { PHASE_COLORS } from './timelineData';

const ProcessLegend: React.FC = () => {
  const legendItems = [
    { label: 'Initiation', color: PHASE_COLORS.initiation, description: 'Initial enquiry & instruction' },
    { label: 'Documentation', color: PHASE_COLORS.documentation, description: 'Core document production' },
    { label: 'Review', color: PHASE_COLORS.review, description: 'Institutional review cycle' },
    { label: 'Current Status', color: PHASE_COLORS.status, description: 'Present position' },
    { label: 'Challenges', color: PHASE_COLORS.challenges, description: 'Anticipated issues' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Phase Legend</h3>
      </div>
      
      <div className="p-4 space-y-3">
        {legendItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div 
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <span className="text-sm font-medium text-gray-800">{item.label}</span>
              <span className="text-xs text-gray-500 ml-2">— {item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessLegend;
