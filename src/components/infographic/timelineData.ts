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
  Building2,
  Share2,
  RotateCcw,
  Search,
  CircleDashed
} from 'lucide-react';


// Single color for all steps (teal)
export const STEP_COLOR = '#0D9488';

export interface TimelineStepData {
  stepNumber: number;
  title: string;
  description: string;
  subheader?: string;
  wordCount?: string;
  icon: any;
  notes?: string[];
  isStageZero?: boolean;
}

export const timelineSteps: TimelineStepData[] = [
  // Stage Zero - The Origin
  {
    stepNumber: 0,
    title: 'The Idea',
    description: 'A methodology that sits at the leading edge of generative and synthetic AI and has the potential to differentiate the School in a crowded market. It enhances the learning experience, improves quality relative to existing approaches, reduces delivery bottlenecks and lead times, and has been developed at no direct cost to the University. The capability is already operational and, to the best of our knowledge, currently has no close equivalents in the market. Appropriate protection is required both to preserve strategic advantage and to enable the capability to be offered confidently to external partners.',
    icon: Sparkles,
    isStageZero: true
  },

  {
    stepNumber: 1,
    title: 'Initial Enquiry to RIO',
    description: 'Asking how to protect and commercialise a novel simulation methodology.',
    icon: MessageSquare,
  },
  {
    stepNumber: 2,
    title: 'Instruction to Complete Invention Disclosure Form',
    description: 'A complex legal-style disclosure with no exemplar provided.',
    icon: FileText,
  },
  
  {
    stepNumber: 3,
    title: 'Completion & Submission of Invention Disclosure Form',
    description: 'Comprehensive invention disclosure document completed and submitted. Requires interpreting IP ownership, contracts, confidentiality, export control, and software licensing without legal training. Key sections: Invention Summary, Novelty, Benefits, Prior Art, Barriers, Inventorship, Schedule 1 Technical Description.',
    wordCount: '8,000 words',
    icon: ClipboardCheck,
  },
  {
    stepNumber: 4,
    title: 'Instruction to Complete Due-Diligence Checklist',
    description: 'Requires understanding of nature of intellectual property with no legal training or guidance. Eg question 1: Type of IP – Patent, Trademark, Knowhow, copyright and Designs. The type of IP this is - Knowhow was completely new to me.',
    icon: ClipboardList,
  },

  {
    stepNumber: 5,
    title: 'Completion and Submission of Due-Diligence Checklist',
    description: 'Due-diligence checklist completed and submitted, addressing IP type classification, ownership verification, and compliance requirements.',
    wordCount: '3–4 pages',
    icon: FileCheck,
  },
  {
    stepNumber: 6,
    title: 'Meeting with RIO',
    description: 'Clarifies assignment of IP to University.',
    icon: Users,
  },
  {

    stepNumber: 7,
    title: 'Instruction to Complete Know-How Summary (High-Level) Password Protected',
    description: 'High-level documentation of the conceptual and technical framework.',
    icon: ClipboardList,
  },
  {
    stepNumber: 8,
    title: 'Completion and Submission of Know-How Summary',
    description: 'Know-How Summary document completed and submitted, detailing the conceptual architecture and technical framework of the methodology. Key sections: Conceptual Layer, Generative Layer, Synthetic-AI Layer, Boundaries, Governance.',
    wordCount: '1,500–2,500 words',
    icon: BookCheck,
  },
  {
    stepNumber: 9,
    title: 'Instruction to Complete Operational Trade-Secret Layer Password Protected',
    description: 'Detailed documentation of proprietary operational methodologies.',
    icon: ClipboardList,
  },

  {
    stepNumber: 10,
    title: 'Completion and Submission of Operational Trade-Secret Layer',
    description: 'Operational Trade-Secret Layer document completed and submitted, capturing proprietary methodologies and decision architectures. Key sections: Decision Architecture, Scoring Logic, Narrative Engine, Design Cycle, Pedagogical Integration, Turning-Point Structures.',
    wordCount: '3,000–5,000 words',
    icon: ShieldCheck,
  },
  {
    stepNumber: 11,
    title: 'Instruction to Complete Business Case',
    description: 'No templates or guidance given.',
    icon: ClipboardList,
  },
  {
    stepNumber: 12,
    title: 'Shared Draft Business Case Requesting Approval',
    description: 'Draft business case shared internally requesting approval to proceed.',
    icon: Share2,
  },
  {
    stepNumber: 13,
    title: 'Completion and Submission of first business case to RIO',
    description: 'This was done before receiving internal feedback because RIO chased and since no template was available it wasn\'t clear if this draft would be sufficient.',
    wordCount: '2,000–3,000 words',
    icon: CheckSquare,
  },
  {
    stepNumber: 14,
    title: 'Instruction to Complete More Detailed Business Case from RIO',
    description: 'Draft case shared with RIO. RIO explains the case is a business model not a business case, and request a 5 year revenue forecast.',
    icon: MessageSquare,
  },

  {
    stepNumber: 15,
    title: 'Internal Reviewer Questions Business Continuity',
    description: 'The reviewer raised questions about continuity and resourcing, though the model is not yet approved. This was based on an assumption the capability could be readily transferred. In practice, the underlying skill set blends narrative design, strategic judgement, and emerging AI techniques, which makes it inherently specialised and not straightforward to replicate.',
    icon: OctagonX,
  },
  {
    stepNumber: 16,
    title: 'Revised Case to Address Concerns About Business Continuity',
    description: 'Business case revised and updated to address the business continuity concerns raised during internal review.',
    icon: CheckCircle,
  },
  {
    stepNumber: 17,
    title: 'Business Case Sent to Colleague to Help Project Revenue and Identify Revenue Streams',
    description: 'Business case sent to colleague who leads on negotiating contracts for games with clients, asking for support with adding numbers in and a historical case as a basis for projection.',
    icon: Send,
  },
  {
    stepNumber: 18,
    title: 'Text Updated Without Numerical Inputs',
    description: 'Colleague made multiple changes to the text but did not add any numbers.',
    icon: XCircle,
  },

  {
    stepNumber: 19,
    title: 'Meeting with Colleague to Request Numbers',
    description: 'Meeting with colleague, asked again to include some numbers which they agree to do. They share a historical case.',
    icon: Users,
  },
  {
    stepNumber: 20,
    title: 'Numerical Inputs Not Added Within Expected Timeframe',
    description: 'Colleague did not add any numbers within agreed timeframe so progressed with revenue projections based on historical case.',
    icon: Clock,
  },

  {
    stepNumber: 21,
    title: 'Draft of More Detailed Business Case with 5-Year Revenue Projections',
    description: 'Comprehensive business case document with detailed financial projections including multiple revenue streams. Key sections: Strategic Rationale, Value Proposition, Commercial Model, 5-Year Revenue Projections, Medium Programmes, Large Multi-Cohort Bids, Recruitment Uplift, Licensing Income.',
    wordCount: '5,000–7,000 words + tables',
    icon: TrendingUp,
  },
  {
    stepNumber: 22,
    title: 'Internal Reviewer Raised Early Concerns Prior to Full Review',
    description: 'Raised concerns at an early stage relating to costing approaches, prior to full review of the document. "I should make you aware that all costings go outside of FBAM including business case need to be reviewed/approved by me. FBAM doesn\'t have a costing model so I am not sure what you have been using." The requirement from RIO was about potential revenue not costings and no costing model was used.',
    icon: OctagonX,
  },


  {
    stepNumber: 23,
    title: 'Document Currently Under Review',
    description: 'Awaiting review outcome. Changes have already been instructed.',
    icon: HelpCircle,
  },

  {
    stepNumber: 24,
    title: 'Prepare Sixth Version of Business Case',
    description: 'Business case needs to be revised again to address latest feedback and requirements.',
    icon: RotateCcw,
  },

  {
    stepNumber: 25,
    title: 'Revised Document to be Reviewed Internally by RIO',
    description: 'Updated business case submitted for internal review by the Research and Innovation Office.',
    icon: Search,
  },

  {
    stepNumber: 26,
    title: '26+ - Unclear',
    description: 'Future steps in the process remain to be determined.',
    icon: CircleDashed,
  },

];

