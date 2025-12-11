import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Timeline from './infographic/Timeline';
import KeyRealities from './infographic/KeyRealities';
import FutureChallenges from './infographic/FutureChallenges';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Print styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Timeline - Full Width */}
        <div>
          <Timeline />
        </div>

        {/* Future Challenges Section */}
        <div className="mt-16 print-break">
          <FutureChallenges />
        </div>

        {/* Key Realities / Observations Section */}
        <div className="mt-12 print-break">
          <KeyRealities />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
