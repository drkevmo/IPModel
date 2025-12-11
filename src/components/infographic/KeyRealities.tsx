import React from 'react';
import { Info, FileQuestion, MessageSquareOff, ClipboardList, Activity, Building2 } from 'lucide-react';

const KeyRealities: React.FC = () => {
  const realities = [
    {
      icon: FileQuestion,
      title: 'Complex Documentation Without Legal Training',
      description: 'Extensive legal-style documentation completed independently, including IP ownership interpretation, export control assessment, and software licensing analysis.'
    },
    {
      icon: MessageSquareOff,
      title: 'No Exemplars or Quality Indicators',
      description: 'No templates, examples, or benchmarks provided at any stage to guide document structure, content depth, or format expectations.'
    },
    {
      icon: ClipboardList,
      title: 'Document Production Over Formative Feedback',
      description: 'The process is structured around sequential document submission, with each stage informing the next leading to potential for delay and focus on process.'
    },
    {
      icon: Activity,
      title: 'Workload Compression',
      description: 'A significant amount of specialist documentation was completed in a short timeframe, creating a demanding workload alongside core responsibilities.'
    },
    {
      icon: Building2,
      title: 'Complex Process in a Constrained Institutional Environment',
      description: 'The documentation process has required extensive legal-style analysis without templates, exemplars, or clear quality indicators. The process involves several stakeholders, each responsible for different components, which naturally extends timelines. With current institutional constraints and heightened sensitivity around resource allocation, progressing innovation at pace can be challenging, and the cumulative workload impact is felt alongside core responsibilities.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
            <Info className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Observations</h2>
          </div>
        </div>
      </div>
      
      {/* Realities list */}
      <div className="p-8 space-y-6">
        {realities.map((reality, idx) => (
          <div 
            key={idx}
            className="flex gap-4 p-5 rounded-xl border transition-colors bg-slate-700/50 border-slate-600/50 hover:bg-slate-700/70"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-500/20">
              <reality.icon className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{reality.title}</h3>
              <p className="leading-relaxed text-slate-300">{reality.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer note */}
      <div className="px-8 pb-8">
        <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
          <p className="text-slate-400 text-sm text-center italic">
            These observations reflect structural process characteristics and are presented without attribution to individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyRealities;
