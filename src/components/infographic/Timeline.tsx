import React from 'react';
import TimelineStep from './TimelineStep';
import PhaseHeader from './PhaseHeader';
import { timelineSteps, phases, PHASE_COLORS } from './timelineData';
import { Lightbulb, PoundSterling } from 'lucide-react';

const Timeline: React.FC = () => {
  // Group steps by phase
  const getStepsForPhase = (phaseSteps: number[]) => {
    return timelineSteps.filter(step => phaseSteps.includes(step.stepNumber));
  };

  // Special Stage Zero component with intertwined lightbulb and £ symbol
  const StageZero = () => {
    const stageZeroStep = timelineSteps.find(step => step.stepNumber === 0);
    if (!stageZeroStep) return null;

    return (
      <div className="mb-12">
        {/* Stage Zero Header */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #7C3AED 100%)',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4)'
            }}
          >
            {/* Intertwined Lightbulb and £ symbol */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-yellow-300 absolute" style={{ transform: 'translate(-3px, -2px)' }} />
              <PoundSterling className="w-6 h-6 text-white absolute" style={{ transform: 'translate(4px, 3px)' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: PHASE_COLORS.origin }}
              >
                STAGE 0
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">The Origin</h2>
          </div>
        </div>

        {/* Stage Zero Content Card */}
        <div 
          className="relative p-6 rounded-2xl border-2 ml-8"
          style={{ 
            borderColor: PHASE_COLORS.origin,
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(168, 85, 247, 0.1) 100%)'
          }}
        >
          {/* Decorative corner elements */}
          <div 
            className="absolute top-0 left-0 w-16 h-16 rounded-br-3xl opacity-20"
            style={{ backgroundColor: PHASE_COLORS.origin }}
          />
          <div 
            className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-20"
            style={{ backgroundColor: PHASE_COLORS.origin }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: PHASE_COLORS.origin }}
              >
                <span className="text-white font-bold text-lg">0</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{stageZeroStep.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              {stageZeroStep.description}
            </p>
          </div>
        </div>

        {/* Connecting line to next phase */}
        <div className="flex justify-center my-6">
          <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-slate-800"></div>
        </div>
      </div>
    );
  };

  return (
    <div id="timeline" className="py-12">
      {/* Stage Zero - Special rendering */}
      <StageZero />

      {/* Regular phases (skip the origin phase as it's rendered above) */}
      {phases.filter(phase => phase.number !== 0).map((phase, phaseIdx) => {
        const phaseSteps = getStepsForPhase(phase.steps);
        const isLastPhase = phaseIdx === phases.filter(p => p.number !== 0).length - 1;
        
        return (
          <div key={phase.number} className="mb-8">
            {/* Phase header */}
            <PhaseHeader
              phaseNumber={phase.number}
              title={phase.title}
              description={phase.description}
              color={phase.color}
            />
            
            {/* Steps in this phase */}
            <div className="mt-8 pl-4 md:pl-8">
              {phaseSteps.map((step, stepIdx) => {
                const isLastStep = isLastPhase && stepIdx === phaseSteps.length - 1;
                
                return (
                  <TimelineStep
                    key={step.stepNumber}
                    stepNumber={step.stepNumber}
                    title={step.title}
                    description={step.description}
                    subheader={step.subheader}
                    wordCount={step.wordCount}
                    icon={step.icon}
                    isLast={isLastStep}
                    phaseColor={PHASE_COLORS[step.phase]}
                    notes={step.notes}
                  />
                );

              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
