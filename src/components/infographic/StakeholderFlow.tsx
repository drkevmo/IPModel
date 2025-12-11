import React from 'react';
import { User, Building2, Calculator, FileCheck, ArrowRight } from 'lucide-react';

const StakeholderFlow: React.FC = () => {
  const stakeholders = [
    {
      icon: User,
      name: 'Creator',
      role: 'Inventor / Academic',
      color: '#1A365D',
      actions: ['Completes all documentation', 'Interprets requirements', 'Responds to requests']
    },
    {
      icon: Building2,
      name: 'RIO',
      role: 'Research & Innovation Office',
      color: '#0D9488',
      actions: ['Receives disclosures', 'Meets Academic', 'Requests documentation']
    },
    {
      icon: User,
      name: 'Dean',
      role: 'Academic Leadership',
      color: '#4F46E5',
      actions: ['Strategic review', 'Only source of formal support', 'Academic approval']
    },
    {
      icon: Calculator,
      name: 'Internal Colleague / Finance',
      role: 'Review / Financial Due Diligence',
      color: '#D97706',
      actions: ['Reviews projections', 'Suggests refinements']
    },
    {
      icon: FileCheck,
      name: 'Decision',
      role: 'Institutional Outcome',
      color: '#059669',
      actions: ['Final determination', 'Resource allocation']
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-6">
        <h3 className="text-xl font-bold text-white">Stakeholder Flow</h3>
        <p className="text-indigo-100 text-sm mt-1">Key parties in the IP protection pathway</p>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-center gap-4">
          {stakeholders.map((stakeholder, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center w-32">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-lg"
                  style={{ backgroundColor: stakeholder.color }}
                >
                  <stakeholder.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{stakeholder.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{stakeholder.role}</p>
                <div className="mt-2 space-y-1">
                  {stakeholder.actions.map((action, actionIdx) => (
                    <p key={actionIdx} className="text-xs text-gray-400">{action}</p>
                  ))}
                </div>
              </div>
              {idx < stakeholders.length - 1 && (
                <div className="flex items-center pt-6">
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakeholderFlow;
