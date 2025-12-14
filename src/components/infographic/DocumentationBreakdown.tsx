import React from 'react';
import { FileText, Scale, BookOpen, Shield, Briefcase, TrendingUp, BarChart3 } from 'lucide-react';

const DocumentationBreakdown: React.FC = () => {
  const documents = [
    {
      icon: FileText,
      name: 'Invention Disclosure Form',
      wordRange: '8,000 words',
      color: '#1A365D',
      percentage: 25
    },
    {
      icon: Scale,
      name: 'Due-Diligence Checklist',
      wordRange: '800–1,200',
      color: '#0D9488',
      percentage: 5
    },
    {
      icon: BookOpen,
      name: 'Know-How Summary',
      wordRange: '3 pages',
      color: '#4F46E5',
      percentage: 8
    },
    {
      icon: Shield,
      name: 'Trade-Secret Layer',
      wordRange: '2,000 words',
      color: '#7C3AED',
      percentage: 15
    },
    {
      icon: Briefcase,
      name: 'Business Case',
      wordRange: '4,000 words + tables',
      color: '#059669',
      percentage: 25
    },
    {
      icon: TrendingUp,
      name: 'Revenue Projection',
      wordRange: '1,000–1,500',
      color: '#D97706',
      percentage: 6
    },
    {
      icon: BarChart3,
      name: 'Market Evaluation',
      wordRange: '800–1,200',
      color: '#DC2626',
      percentage: 5
    }
  ];


  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-8 py-6">
        <h3 className="text-xl font-bold text-white">Documentation Breakdown</h3>
        <p className="text-slate-300 text-sm mt-1">Word count distribution across major documents</p>
      </div>
      
      <div className="p-6 space-y-4">
        {documents.map((doc, idx) => (
          <div key={idx} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${doc.color}15` }}
                >
                  <doc.icon className="w-4 h-4" style={{ color: doc.color }} />
                </div>
                <span className="text-sm font-medium text-gray-700">{doc.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-600">{doc.wordRange}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 group-hover:opacity-80"
                style={{ 
                  width: `${doc.percentage}%`,
                  backgroundColor: doc.color
                }}
              />
            </div>
          </div>
        ))}
        
        {/* Total */}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-gray-800">Total Documentation</span>
            <span className="text-lg font-bold text-teal-600">~25,000+ words</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationBreakdown;
