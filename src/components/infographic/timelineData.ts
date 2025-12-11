import {
  MessageSquare,
  FileText,
  ClipboardCheck,
  CheckSquare,
  Users,
  Lightbulb,
  Lock,
  Package,
  Briefcase,
  TrendingUp,
  FileCheck,
  BookCheck,
  ShieldCheck,
  FolderCheck,
  HelpCircle,
  FileEdit,
  AlertCircle,
  Sparkles,
  ClipboardList,
  OctagonX,
  CheckCircle,
  Send,
  XCircle,
  Clock,
  AlertTriangle,
  Building2
} from 'lucide-react';


// Phase colors

export const PHASE_COLORS = {
  origin: '#7C3AED',              // Purple for Stage Zero
  initiation: '#1A365D',          // Deep Navy
  documentation: '#0D9488',       // Teal
  review: '#4F46E5',              // Indigo
  status: '#059669',              // Emerald
  challenges: '#D97706',          // Amber
  observations: '#DC2626'         // Red for Observations
};


export interface TimelineStepData {
  stepNumber: number;
  title: string;
  description: string;
  subheader?: string;
  wordCount?: string;
  icon: any;
  phase: keyof typeof PHASE_COLORS;
  notes?: string[];
  isStageZero?: boolean;
}

export const timelineSteps: TimelineStepData[] = [
  // Stage Zero - The Origin
  {
    stepNumber: 0,
    title: 'The Idea',
    description: 'An idea that: is at the cutting edge of generative and synthetic AI, that can differentiate us in a crowded market, that improves the learning experience, saves us money at zero risk, has cost the university nothing to develop, improves quality over existing products, removes bottlenecks, radically reduces lead times, is already working, and is something no-one else can do yet. As a capability it needs protection so we can stay ahead of competitors.',
    icon: Sparkles,
    phase: 'origin',
    isStageZero: true
  },

  // Phase 1: Initiation
  {
    stepNumber: 1,
    title: 'Initial Enquiry to RIO',
    description: 'Asking how to protect and commercialise a novel simulation methodology.',
    icon: MessageSquare,
    phase: 'initiation'
  },
  {
    stepNumber: 2,
    title: 'Instruction to Complete Invention Disclosure Form',
    description: 'A complex legal-style disclosure with no exemplar provided.',
    icon: FileText,
    phase: 'initiation'
  },
  
  // Phase 2: Core Documentation
  {
    stepNumber: 3,
    title: 'Completion & Submission of Invention Disclosure Form',
    description: 'Comprehensive invention disclosure document completed and submitted. Requires interpreting IP ownership, contracts, confidentiality, export control, and software licensing without legal training. Key sections: Invention Summary, Novelty, Benefits, Prior Art, Barriers, Inventorship, Schedule 1 Technical Description.',
    wordCount: '5,500–7,000 words',
    icon: ClipboardCheck,
    phase: 'documentation'
  },
  {
    stepNumber: 4,
    title: 'Instruction to Complete Due-Diligence Checklist',
    description: 'Requires understanding of nature of intellectual property with no legal training or guidance. Eg question 1: Type of IP – Patent, Trademark, Knowhow, copyright and Designs. The type of IP this is - Knowhow was completely new to me.',
    icon: ClipboardList,
    phase: 'documentation'
  },

  {
    stepNumber: 5,
    title: 'Completion and Submission of Due-Diligence Checklist',
    description: 'Due-diligence checklist completed and submitted, addressing IP type classification, ownership verification, and compliance requirements.',
    wordCount: '3–4 pages',
    icon: FileCheck,
    phase: 'documentation'
  },
  {
    stepNumber: 6,
    title: 'Meeting with RIO',
    description: 'Clarifies assignment of IP to University.',
    icon: Users,
    phase: 'documentation'
  },
  {
    stepNumber: 7,
    title: 'Instruction to Complete Know-How Summary (High-Level) Password Protected',
    description: 'High-level documentation of the conceptual and technical framework. Key sections: Conceptual Layer, Generative Layer, Synthetic-AI Layer, Boundaries, Governance.',
    icon: ClipboardList,
    phase: 'documentation'
  },
  {
    stepNumber: 8,
    title: 'Completion and Submission of Know-How Summary',
    description: 'Know-How Summary document completed and submitted, detailing the conceptual architecture and technical framework of the methodology. Key sections: Conceptual Layer, Generative Layer, Synthetic-AI Layer, Boundaries, Governance.',
    wordCount: '1,500–2,500 words',
    icon: BookCheck,
    phase: 'documentation'
  },
  {
    stepNumber: 9,
    title: 'Instruction to Complete Operational Trade-Secret Layer Password Protected',
    description: 'Detailed documentation of proprietary operational methodologies. Key sections: Decision Architecture, Scoring Logic, Narrative Engine, Design Cycle, Pedagogical Integration, Turning-Point Structures.',
    icon: ClipboardList,
    phase: 'documentation'
  },
  {
    stepNumber: 10,
    title: 'Completion and Submission of Operational Trade-Secret Layer',
    description: 'Operational Trade-Secret Layer document completed and submitted, capturing proprietary methodologies and decision architectures. Key sections: Decision Architecture, Scoring Logic, Narrative Engine, Design Cycle, Pedagogical Integration, Turning-Point Structures.',
    wordCount: '3,000–5,000 words',
    icon: ShieldCheck,
    phase: 'documentation'
  },
  {
    stepNumber: 11,
    title: 'Instruction to Complete Business Case',
    description: 'No templates or guidance given.',
    icon: ClipboardList,
    phase: 'documentation'
  },
  {
    stepNumber: 12,
    title: 'Completion and Submission of Business Case',
    description: 'Initial business case document completed and submitted for institutional review.',
    wordCount: '3,000 words',
    icon: FolderCheck,
    phase: 'documentation'
  },
  {
    stepNumber: 13,
    title: 'Instruction to Complete More Detailed Business Case',
    description: 'Request for comprehensive business case with additional financial detail and projections. Key sections: Strategic Rationale, Value Proposition, Commercial Model, Operational Model, Governance, Pipeline, Risks, Testimonials.',
    icon: ClipboardList,
    phase: 'documentation'
  },
  {
    stepNumber: 14,
    title: 'Business Case Sent to Colleague for Pricing Support',
    description: 'Business case sent to colleague who leads on negotiating pricing of games, asking for support with adding numbers in and a historical case as a basis for projection.',
    icon: Send,
    phase: 'documentation'
  },
  {
    stepNumber: 15,
    title: 'Text Updated Without Numerical Inputs',
    description: 'The text was updated, but numerical inputs were not yet included, so further revision was required.',
    icon: XCircle,
    phase: 'documentation'
  },

  {
    stepNumber: 16,
    title: 'Meeting with Colleague to Request Numbers',
    description: 'Meeting with colleague, asked again to include some numbers which they agree to do. They share a historical case.',
    icon: Users,
    phase: 'documentation'
  },
  {
    stepNumber: 17,
    title: 'Numerical Inputs Not Added Within Expected Timeframe',
    description: 'Numerical inputs were not added within the expected timeframe, requiring additional follow-up.',
    icon: Clock,
    phase: 'documentation'
  },

  {
    stepNumber: 18,
    title: 'Draft of More Detailed Business Case with 5-Year Revenue Projections',
    description: 'Comprehensive business case document with detailed financial projections including multiple revenue streams. Key sections: Strategic Rationale, Value Proposition, Commercial Model, 5-Year Revenue Projections, Medium Programmes, Large Multi-Cohort Bids, Recruitment Uplift, Licensing Income.',
    wordCount: '5,000–7,000 words + tables',
    icon: TrendingUp,
    phase: 'documentation'
  },
  {
    stepNumber: 19,
    title: 'Review by Internal Colleague Raising Questions About Business Continuity',
    description: 'The review raised questions about continuity and resourcing, based on an assumption that the capability could be readily transferred. In practice, the underlying skill set blends narrative design, strategic judgement, and emerging AI techniques, which makes it inherently specialised and not straightforward to replicate.',
    icon: OctagonX,
    phase: 'review'
  },
  {
    stepNumber: 20,
    title: 'Revised Case to Address Concerns About Business Continuity',
    description: 'Business case revised and updated to address the business continuity concerns raised during internal review.',
    icon: CheckCircle,
    phase: 'review'
  },
  {
    stepNumber: 21,
    title: 'Internal Reviewer Raised Concerns Prior to Seeing the Document',
    description: 'This stage emphasised the need for costings and approval of pricing, querying the use of a costing model although the requirement from RIO was projected revenue not costings and no costing model was used.',
    subheader: 'Their comments: Lynette has asked me to review the costings. I should make you aware that all costings go outside of FBAM including business case need to be reviewed/approved by me. FBAM doesn\'t have a costing model so I am not sure what you have been using. Please provide me with a copy of the business case and costings so I can review please.',
    icon: OctagonX,
    phase: 'review'
  },

  {
    stepNumber: 22,
    title: 'Document Currently Under Review',
    description: 'Awaiting review outcome.',
    icon: HelpCircle,
    phase: 'review'
  },

];


export const phases = [

  {
    number: 0,
    title: 'Origin',
    description: 'The starting point',
    color: PHASE_COLORS.origin,
    steps: [0]
  },
  {
    number: 1,
    title: 'Initiation',
    description: 'Search to see if idea is novel, review relevant university policies and initial research into nature of intellectual property, identify RIO as the main stakeholder',
    color: PHASE_COLORS.initiation,
    steps: [1, 2]
  },
  {
    number: 2,
    title: 'Core Documentation',
    description: 'Comprehensive document production',
    color: PHASE_COLORS.documentation,
    steps: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    number: 3,
    title: 'Strategic Review',
    description: 'Institutional review and refinement',
    color: PHASE_COLORS.review,
    steps: [19, 20, 21, 22]
  }
];
