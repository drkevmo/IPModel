import React from 'react';
import { FileText, Calendar, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <footer className="bg-slate-900 rounded-2xl mt-12 overflow-hidden">
      <div className="px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Document info */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
              <FileText className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Document Type</h4>
              <p className="text-slate-400 text-sm mt-1">
                Process Documentation Infographic
              </p>
            </div>
          </div>
          
          {/* Date */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Generated</h4>
              <p className="text-slate-400 text-sm mt-1">{currentDate}</p>
            </div>
          </div>
          
          {/* Classification */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Classification</h4>
              <p className="text-slate-400 text-sm mt-1">
                Internal / Confidential
              </p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-slate-700 my-8" />
        
        {/* Bottom text */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            This document presents an overview of the IP protection pathway. Observations reflect structural process characteristics without attribution to individuals.
          </p>
          <p className="text-slate-600 text-xs mt-4">
            IP Protection Pathway Overview
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
