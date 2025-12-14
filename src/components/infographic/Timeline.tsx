import React from 'react';
import TimelineStep from './TimelineStep';
import { timelineSteps, STEP_COLOR } from './timelineData';

const Timeline: React.FC = () => {
  // Get all steps except Stage Zero
  const regularSteps = timelineSteps.filter(step => step.stepNumber !== 0);
  const stageZeroStep = timelineSteps.find(step => step.stepNumber === 0);

  // Special Stage Zero component with bold green £ symbol
  const StageZero = () => {
    if (!stageZeroStep) return null;

    return (
      <div className="mb-12">
        {/* Stage Zero Header */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #059669 100%)',
              boxShadow: '0 8px 32px rgba(5, 150, 105, 0.4)'
            }}
          >
            {/* Bold green £ symbol */}
            <span className="text-3xl font-black text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>£</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: '#059669' }}
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
            borderColor: '#059669',
            background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%)'
          }}
        >
          {/* Decorative corner elements */}
          <div 
            className="absolute top-0 left-0 w-16 h-16 rounded-br-3xl opacity-20"
            style={{ backgroundColor: '#059669' }}
          />
          <div 
            className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-20"
            style={{ backgroundColor: '#059669' }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#059669' }}
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

        {/* Connecting line to next steps */}
        <div className="flex justify-center my-6">
          <div className="w-0.5 h-12 bg-gradient-to-b from-emerald-500 to-teal-600"></div>
        </div>
      </div>
    );
  };

  return (
    <div id="timeline" className="py-12">
      {/* Stage Zero - Special rendering */}
      <StageZero />

      {/* All steps rendered in sequence with same color */}
      <div className="pl-4 md:pl-8">
        {regularSteps.map((step, stepIdx) => {
          const isLastStep = stepIdx === regularSteps.length - 1;
          
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
              phaseColor={STEP_COLOR}
              notes={step.notes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
