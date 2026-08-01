export type CaseStudyBeat = {
  label: string;
  text: string;
  highlights?: string[];
};

export type CaseStudy = {
  stat: string;
  subtitle: string;
  beats: CaseStudyBeat[];
  demoLabel: string;
};

export type BuildStory = {
  problem: string;
  bigPicture: { title: string; detail: string }[];
  nittyGritty: { title: string; detail: string }[];
};

export type FeaturedProject = {
  description: string;
  demoUrl: string;
  demoLabel: string;
  videoLabel: string;
  screenshots: { label: string; src: string }[];
};

export type EntryCategory = "Work" | "Project";

export type EducationEntry = {
  school: string;
  credential: string;
  dates: string;
};

export type RotatorWord = { text: string; holdMs: number };

export type NameFont = { className: string; holdMs: number };

export const nameFonts: NameFont[] = [
  { className: "font-display italic", holdMs: 1800 },
  { className: "font-name-sans font-bold not-italic", holdMs: 1800 },
  { className: "font-mono font-medium not-italic tracking-tight", holdMs: 1800 },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const bioPrefix = "Action-biased ";
export const bioRoles: RotatorWord[] = [
  { text: "Product Manager", holdMs: 1500 },
  { text: "Engineer", holdMs: 1500 },
  { text: "Builder", holdMs: 1500 },
  { text: "Creator", holdMs: 4500 },
];
export const bioSentenceEnd = ".  ";
export const bioSentenceDriveStart =
  "Personally driven to dig directly into problems that matter and talking with the people who're living through them. Zooming that individual story out into a broader data narrative & building a solution at scale- ";
export const bioSentenceDriveHighlight = "now that's Product.";
export const bioSentenceDriveEnd = "  ";
export const bioSentencePassion = "Passionate for making the world a better place, one ";
export const bioSteps: RotatorWord[] = [
  { text: "meeting", holdMs: 1500 },
  { text: "project", holdMs: 1500 },
  { text: "conversation", holdMs: 1500 },
  { text: "prompt", holdMs: 1500 },
  { text: "quarter", holdMs: 1500 },
  { text: "step", holdMs: 4500 },
];
export const bioSuffix = " at a time.";

export const education: EducationEntry[] = [
  {
    school: "University of Michigan",
    credential: "BSE, Mechanical Engineering, Focus in Product Design — Engineering Class of 2022 Valedictorian Speaker",
    dates: "2018 — 2022",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "AI",
    items: ["Claude Code", "Google Gemini"],
  },
  {
    label: "Tools",
    items: ["Python", "SQL", "Figma", "Jira", "Confluence", "Miro"],
  },
  {
    label: "Product",
    items: [
      "Roadmap Planning",
      "OKRs",
      "A/B Testing",
      "Go-to-Market Strategy",
      "0-1 Building",
      "Data Analysis",
      "Agile",
      "Scrum",
    ],
  },
];

export type TimelineEntry = {
  id: string;
  category: EntryCategory;
  company: string;
  dates: string;
  sortKey: string;
  role: string;
  bullets: string[];
  caseStudy?: CaseStudy;
  featured?: FeaturedProject;
  buildStory?: BuildStory;
};

const rawTimeline: TimelineEntry[] = [
  {
    id: "visionary",
    category: "Project",
    company: "Project Visionary",
    dates: "Feb 2026 — Present",
    sortKey: "2026-02",
    role: "Founder, Independent",
    bullets: [],
    featured: {
      description:
        "0-to-1 AI-native product helping creative business owners make smarter business decisions. Data schema, business logic, and UI/UX on Next.js, TypeScript, and Supabase.",
      demoUrl: "https://visionary-mvp50.vercel.app/demo",
      demoLabel: "Live demo",
      videoLabel: "Product demo video",
      screenshots: [
        { label: "Screenshot — Home", src: "/screenshots/visionary-demo.png" },
        { label: "Screenshot — Your Work", src: "/screenshots/visionary-your-work.png" },
      ],
    },
    buildStory: {
      problem:
        "Years working alongside creatives surfaced the same gap, over and over: brilliant execution, no business instinct. Visionary turns that instinct into a system — pricing, sales, manufacturing, and cost decisions a creative business owner can actually act on.",
      bigPicture: [
        {
          title: "Formed the thesis in the field",
          detail:
            "Embedded directly with NYC creatives — live interviews, ongoing consulting — then reverse-engineered what they needed into a repeatable playbook driving Visionary's insights system.",
        },
        {
          title: "Let the research narrow the bet",
          detail:
            "A strategy audit narrowed the ICP to artist-specific, research-backed, and identified the production system as the real moat — that's what collapsed the original 9-path vision to 4, not scope fatigue.",
        },
        {
          title: "Solo builder, 50+ refinement sessions, 35 commits",
          detail: "Took a general idea into a functional product, built for scale.",
        },
        {
          title: "Built on nights & weekends",
          detail:
            "Consulted creatives and shipped alongside a full-time PM role — no dedicated runway, no team to hand off blockers to.",
        },
      ],
      nittyGritty: [
        {
          title: "One schema bet, 20 sessions saved",
          detail:
            "Built one polymorphic user context table instead of one per UI path; that single call prevented 20 additional sessions building & connecting schema, for the cost of two migrations instead of one per pivot.",
        },
        {
          title: "Split the UI, not the data",
          detail:
            "User behavior showed making the same art varies heavily person to person. Split the general 'creation' section into Your Work & Your Process while maintaining the relationship on the backend — restraint to not over-fix the schema for a UI problem.",
        },
        {
          title: "Caught a silent data-loss bug",
          detail:
            "A validation bug was quietly dropping 3 fields on every save — caught and fixed before it hit prod.",
        },
      ],
    },
  },
  {
    id: "capital-one",
    category: "Work",
    company: "Capital One",
    dates: "Aug 2025 — Present",
    sortKey: "2025-08",
    role: "Product Manager, Premium Products",
    bullets: [],
    caseStudy: {
      stat: "$98M incremental volume · 3M annual users",
      subtitle: "ESB Tracker Refresh",
      beats: [
        {
          label: "Ask",
          text: "Given an outdated bonus tracker — built for iOS, retrofitted for Android, missing on several card offerings. Task: fix it.",
          highlights: ["Task: fix it."],
        },
        {
          label: "Bet",
          text: "Not just a rebuild — growth prime real estate. Added Card Provisioning CTAs before customer's bonus, Rewards CTAs post-earn. ESB as a welcome mat to Capital One.",
          highlights: [
            "growth prime real estate",
            "before customer's bonus",
            "Rewards CTAs",
          ],
        },
        {
          label: "Catch",
          text: "Bet paid off on paper — lagged against comparable placements: CTR was lagging. Shipped it, queued design optimization as a fast follow.",
          highlights: ["lagged against comparable placements"],
        },
        {
          label: "Curveball",
          text: "Woke up Tuesday to a thread of customers not receiving their experience. DM'ed customer service agents, traced it back to an unrelated policy change: broke access mid-rollout for a premium customer cohort. XX customers called in, XX,XXX customers affected if nothing changes. Patched in days. Customer calls stop.",
          highlights: ["DM'ed customer service agents", "Patched in days."],
        },
        {
          label: "Result",
          text: "Permanent fix > patch — folded into the AB rollout, launched. CTR recovered, calls remain stable.",
          highlights: ["CTR recovered, calls remain stable."],
        },
      ],
      demoLabel: "ESB Tracker demo",
    },
  },
  {
    id: "microsoft",
    category: "Work",
    company: "Microsoft",
    dates: "Jun 2022 — Jun 2024",
    sortKey: "2022-06",
    role: "Product Manager, Developer Systems Team",
    bullets: [],
    caseStudy: {
      stat: "5,000 developers · 88% 7-day engagement",
      subtitle: "Native AI Assistant for Azure DevOps",
      beats: [
        {
          label: "Ask",
          text: "Explore how this new 'AI stuff' could work in Azure DevOps. No brief beyond that — go figure out if there's a real product here.",
          highlights: ["No brief beyond that"],
        },
        {
          label: "Bet",
          text: "Start small, go big. Worked directly with internal developers to learn what they actually wanted from ADO, built toward that, then iterated and expanded once something held up.",
          highlights: ["Start small, go big."],
        },
        {
          label: "Result",
          text: "Expanded the pilot to 5,000 developers — 88% 7-day engagement, 22% fewer clicks to complete tasks on average. Early proof for native AI in ADO, 12+ months before it became an industry-wide bet.",
          highlights: [
            "Expanded the pilot to 5,000 developers",
            "12+ months before it became an industry-wide bet.",
          ],
        },
      ],
      demoLabel: "ADO AI Pilot",
    },
  },
  {
    id: "sunrise",
    category: "Project",
    company: "Mental Health Startup",
    dates: "Oct 2020 — Dec 2021",
    sortKey: "2020-10",
    role: "Founder",
    bullets: [],
    caseStudy: {
      stat: "1,000+ students served · adopted by U-M Mental Health Services",
      subtitle: "Project Sunrise",
      beats: [
        {
          label: "Problem",
          text: "2020:COVID, George Floyd, 2020 election. Stressed out. Students needed a way to check themselves before mental health became a crisis, and a path to recovery when it did.",
          highlights: ["COVID, George Floyd, 2020 election"],
        },
        {
          label: "Bet",
          text: "A diary app using sentiment analysis to detect \"spiraling\" and route students to on-campus mental health services. Collected 100+ student responses and distilled them into a central product narrative.",
          highlights: ["sentiment analysis to detect \"spiraling\"", "Collected 100+ student responses"],
        },
        {
          label: "Catch",
          text: "It's 2020. Building and launching with a distributed team of students — software, design, and psychology majors — across Michigan, Singapore, and China, under COVID constraints.",
          highlights: ["It's 2020.", "across Michigan, Singapore, and China"],
        },
        {
          label: "Result",
          text: "1,000+ students served + my approach picked up by the University of Michigan student mental health services.",
          highlights: ["1,000+ students served"],
        },
      ],
      demoLabel: "Sunrise app demo",
    },
  },
];

export const timeline: TimelineEntry[] = [...rawTimeline].sort((a, b) =>
  b.sortKey.localeCompare(a.sortKey)
);
