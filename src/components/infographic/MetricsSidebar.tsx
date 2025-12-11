import React from 'react';
import { FileText, Users, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface MetricsSidebarProps {
  totalWords: string;
  documentsProduced: number;
  stakeholdersInvolved: number;
  stagesCompleted: number;
  totalStages: number;
}

const MetricsSidebar: React.FC<MetricsSidebarProps> = ({
  totalWords,
  documentsProduced,
  stakeholdersInvolved,
  stagesCompleted,
  totalStages
}) => {
  const metrics = [
    {
      icon: FileText,
      label: 'Total Documentation',
      value: totalWords,
      subtext: 'words produced',
      color: '#1A365D'
    },
    {
      icon: CheckCircle2,
      label: 'Documents Completed',
      value: documentsProduced.toString(),
      subtext: 'formal submissions',
      color: '#0D9488'
    },
    {
      icon: Users,
      label: 'Stakeholders',
      value: stakeholdersInvolved.toString(),
      subtext: 'parties involved',
      color: '#4F46E5'
    },
    {
      icon: Clock,
      label: 'Process Progress',
      value: `${stagesCompleted}/${totalStages}`,
      subtext: 'stages completed',
      color: '#D97706'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <h3 className="text-white font-semibold text-lg">Cumulative Metrics</h3>
        <p className="text-slate-300 text-sm">Documentation effort to date</p>
      </div>
      
      <div className="p-4 space-y-4">
        {metrics.map((metric, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${metric.color}15` }}
              >
                <metric.icon 
                  className="w-5 h-5" 
                  style={{ color: metric.color }}
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  {metric.label}
                </p>
                <p 
                  className="text-2xl font-bold mt-0.5"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500">{metric.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="px-6 pb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 font-medium">Overall Progress</span>
          <span className="text-teal-600 font-semibold">
            {Math.round((stagesCompleted / totalStages) * 100)}%
          </span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500"
            style={{ width: `${(stagesCompleted / totalStages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MetricsSidebar;
