import React from 'react';
import { 
  Server, 
  Users, 
  RefreshCw, 
  Clock, 
  Gauge, 
  Shield,
  AlertTriangle,
  AlertOctagon,
  Eye
} from 'lucide-react';

const FutureChallenges: React.FC = () => {
  const challenges = [
    {
      icon: Server,
      title: 'Technology Migration Requirements',
      description: 'Potential requirement to migrate technology to internal university servers, which may be technically challenging or even not possible to reproduce within standard institutional systems that lack memory and learned context. This may create technical friction or reduce agility.'
    },
    {
      icon: Users,
      title: 'Knowledge Transfer Expectations',
      description: 'Expectations that colleagues should be trained to replicate the build process, even though the underlying competencies are specialised and may require significant training to transfer. Some aspects may be difficult to codify because they draw on an emerging mix of narrative design, strategic judgment, and synthetic-AI practice that is still evolving across the sector.'
    },

    {
      icon: RefreshCw,
      title: 'Repeated Revision Cycles',
      description: 'Requests for repeated revisions or re-formatting of documents as they move across different departments, each with their own requirements. This may involve additional rounds of clarification, re-expression, or expansion of material already produced.'
    },
    {
      icon: Clock,
      title: 'Multi-Stage Sign-Off Elongation',
      description: 'Risk of process elongation due to multi-stage sign-off. As documents travel between units such as RIO, Finance, Legal, and senior leadership, each may require adjustments, extending timelines.'
    },
    {
      icon: Gauge,
      title: 'Innovation vs. Governance Pace Mismatch',
      description: 'Misalignment between rapid-innovation cycles and institutional governance cycles. The methodology evolves quickly, while institutional processes are slower by design, creating natural tension between speed of development and pace of approval.'
    },
    {
      icon: Shield,
      title: 'Infrastructure & Policy Constraints',
      description: 'Potential for infrastructure or policy constraints to shape technical decisions. Requirements relating to storage, access, or version-control may reflect university-wide standards that do not map cleanly onto synthetic-AI development workflows.'
    },
    {
      icon: Eye,
      title: 'Loss of Perspective',
      description: 'As documentation moves through multiple specialist reviewers, each focuses on their area of responsibility, which can naturally make it harder to maintain a unified view of the full material. Several games already work, with new builds being developed rapidly as needed. Here is what the methodology can achieve:',
      quote: {
        author: 'Dr Aktas',
        text: '"Wow - this is so impressive! And you built it all over the weekend! I love the theme you chose! So appropriate for an educational institution in the UK! I loved how you translated the [game mechanics] Overall, the game is amazing; I can arrange for a few PhD students to test it in January and then we can deploy it in exec ed in the first opportunity. Fascinating! Thank you so much! Look forward!"'
      },
      additionalNote: 'User-facing feedback has been very positive, while internal review focuses on compliance, governance, and completeness, and involves different stakeholders who lack context which naturally leads to requests for additional detail. There should be a licensing agreement if this is used with 3rd parties because this is very valuable. However I feel we have lost sight of the actual purpose of this process and every stage is about creating more paper.'
    }

  ];

  return (
    <div className="space-y-6">

      {/* Urgency Warning Section */}
      <div className="bg-red-50 border-2 border-red-400 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-700 to-red-600 px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center animate-pulse">
              <AlertOctagon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Urgency</h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-red-800 font-medium leading-relaxed text-lg">
            The games are in demand and in circulation. We are about to share this with our alumni network because we have a seasonal opportunity to do so, but the IP is not yet protected and it is unclear how we sell them if we generate alumni interest and have no agreement in place about licensing.
          </p>
        </div>
      </div>


      {/* Anticipated Structural Challenges */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Anticipated Structural Challenges</h2>
              <p className="text-white/80 text-sm mt-1">
                Potential difficulties reflecting common institutional constraints
              </p>
            </div>
          </div>
        </div>
        
        {/* Challenges grid */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 ${challenge.quote ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-800 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
                    {challenge.quote && (
                      <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-sm text-green-800 italic leading-relaxed">
                          {challenge.quote.text}
                        </p>
                        <p className="text-xs text-green-600 mt-2 font-medium">
                          — {challenge.quote.author}
                        </p>
                      </div>
                    )}
                    {challenge.additionalNote && (
                      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                        {challenge.additionalNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-gray-100 border border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              These challenges reflect common institutional constraints rather than the actions of any individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureChallenges;
