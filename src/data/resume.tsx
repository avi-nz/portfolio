import { Icons } from "@/components/icons";
import {
  Box,
  Calculator,
  ChartLine,
  Cpu,
  Dice5,
  Grid3x3,
  HomeIcon,
  Network,
  NotebookIcon,
  SquareFunction,
  Target,
  Waves,
  Workflow,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { CLogo, CppLogo, MatlabLogo } from "@/components/ui/svgs/logo-image";

export const DATA = {
  name: "Avishai Narsey",
  initials: "AN",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "**Engineering Science @ The University of Auckland**\\\nMachine Learning & Mathematical Modelling",
  plainDescription:
    "Engineering Science @ The University of Auckland | Machine Learning & Mathematical Modelling",
  summary:
    "I'm studying **Engineering Science at the University of Auckland**, with interests spanning **quantitative development**, **mathematical modelling**, and **systems programming**. I enjoy exploring how things work, from mathematical models to computer architecture, and **turning ideas into practical projects**. Outside university, I create **educational content**.",
  avatarUrl: "/avishai.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "C", icon: CLogo },
    { name: "C++", icon: CppLogo },
    { name: "MATLAB", icon: MatlabLogo },
    { name: "Linear Programming", icon: Target },
    { name: "Operations Research", icon: Network },
    { name: "Simulation Modelling", icon: Workflow },
    { name: "Differential Equations", icon: SquareFunction },
    { name: "Linear Algebra", icon: Grid3x3 },
    { name: "Numerical Methods", icon: Calculator },
    { name: "Probability & Stochastic Processes", icon: Dice5 },
    { name: "Statistical Modelling & Regression", icon: ChartLine },
    { name: "Computational Modelling", icon: Box },
    { name: "Solid & Fluid Mechanics", icon: Waves },
    { name: "Computer Architecture", icon: Cpu },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://avishainarsey.substack.com/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/avi-nz",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/avishai-narsey/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@theaceify",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DEVS - Developers Society",
      href: "",
      badges: [],
      location: "Auckland, New Zealand",
      title: "Marketing Executive",
      logoUrl: "/devs.jpg",
      start: "Jul 2026",
      end: "Present",
      description: "",
    },
    {
      company: "Aceify",
      href: "https://www.youtube.com/@theaceify",
      badges: [],
      location: "Remote",
      title: "Educational Content Creator",
      logoUrl: "/aceify.jpg",
      start: "Nov 2024",
      end: "Present",
      description: (
        <>
          Grew an educational YouTube channel to{" "}
          <strong className="underline underline-offset-2">1,400+ subscribers</strong>,{" "}
          <strong className="underline underline-offset-2">130,000+ total views</strong>, and an{" "}
          <strong className="underline underline-offset-2">8,000+ monthly audience</strong>. Produced
          educational content covering{" "}
          <strong className="underline underline-offset-2">NCEA Level 3 and Scholarship Physics</strong>,
          making complex technical concepts accessible through clear explanations and engaging
          storytelling.
        </>
      ),
    },
    {
      company: "Thinking Caps For Kids",
      href: "",
      badges: [],
      location: "Auckland, New Zealand",
      title: "NCEA Level 1, 2, & 3 Tutor",
      logoUrl: "/thinking-caps.jpg",
      start: "Mar 2024",
      end: "Nov 2025",
      description:
        "Provided one-on-one online tutoring for students in NCEA Levels 1–3, helping them understand course content, improve problem-solving skills, and prepare for internal and external assessments. Adapted teaching methods to suit different learning styles and provided constructive feedback to support academic progress.",
    },
    {
      company: "Rangitoto College McMullen & Wing EVolocity",
      href: "",
      badges: [],
      location: "Auckland, New Zealand",
      title: "Mechanical Design & Fabrication Specialist",
      logoUrl: "/evolocity.jpg",
      start: "Jan 2022",
      end: "Nov 2024",
      description: "",
    },
    {
      company: "ITW Fastex New Zealand",
      href: "",
      badges: [],
      location: "Auckland, New Zealand",
      title: "Semi-Automated Manufacturing Machine Operator",
      logoUrl: "/itw.jpg",
      start: "Dec 2021, Dec 2022",
      end: "",
      description:
        "Operated a semi-automated manufacturing machine to produce plastic tap components, ensuring consistent product quality and efficient production. Monitored machine performance, performed basic adjustments, and followed safety and quality control procedures.",
    },
  ],
  education: [
    {
      school: "University of Auckland",
      href: "https://www.auckland.ac.nz",
      degree: "Bachelor of Engineering (Honours), Engineering Science",
      logoUrl: "/uoa.jpg",
      start: "2025",
      end: "Present",
    },
    {
      school: "Rangitoto College",
      href: "https://www.rangitoto.school.nz",
      degree: "NCEA Level 1, 2 & 3, Excellence Endorsed",
      logoUrl: "/rangitoto.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "NBA Playoff Prediction Simulation",
      href: "https://github.com/avi-nz/NBA-Playoff-Prediction-Simulation",
      dates: "Jun 2026 - Present",
      active: true,
      description:
        "How predictable are the NBA playoffs? Built six forecasting models using Elo ratings, Monte Carlo bracket simulation, injury modelling and statistical testing, using only information available before the playoffs begin. The surprise: none of the basketball-specific features beat the plain Elo baseline, a small-scale lesson in [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html).",
      technologies: ["Python", "Monte Carlo", "Elo Ratings", "Statistics"],
      links: [
        {
          type: "Source",
          href: "https://github.com/avi-nz/NBA-Playoff-Prediction-Simulation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nba-bracket.svg",
      video: "",
    },
    {
      title: "Rare Event Simulation Framework",
      href: "https://github.com/avi-nz/Rare-Event-Simulation-Framework",
      dates: "Jun 2026 - Present",
      active: true,
      description:
        "Estimating extremely unlikely events, with probabilities of 10⁻⁶ or lower, where standard Monte Carlo breaks down. Compares Monte Carlo, importance sampling, cross-entropy optimisation and adaptive machine learning methods, with applications to Value at Risk, Expected Shortfall and portfolio ruin.",
      technologies: ["C++", "Python", "Monte Carlo", "Importance Sampling"],
      links: [
        {
          type: "Source",
          href: "https://github.com/avi-nz/Rare-Event-Simulation-Framework",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/rare-event.svg",
      video: "",
    },
    {
      title: "EVolocity EV Go Kart",
      href: "https://github.com/avi-nz/evolocity-ev-project",
      dates: "Jan 2022 - Nov 2024",
      active: false,
      description:
        "Designed and built a functional electric race kart for the EVolocity competition. Fabricated the MIG-welded steel chassis, designed a custom steering wheel moulded to the driver's hand using CAD, CNC and 3D printing, and partnered with McMullen & Wing to make a carbon fibre floor.",
      technologies: ["CAD", "CNC", "3D Printing", "MIG Welding", "Carbon Fibre"],
      links: [
        {
          type: "Source",
          href: "https://github.com/avi-nz/evolocity-ev-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/evolocity.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "UoA Data Science Club x dataengine Datathon 2026",
      dates: "September 2026",
      location: "Auckland, New Zealand",
      description:
        "🏆 1st Place, with a fast-track interview at dataengine. Built an AI-assisted GP referral triage system: referrals land in S3, Snowflake standardises them, a batch pipeline classifies urgency and writes a justification with Claude on AWS Bedrock, and a dashboard served from Lambda and CloudFront shows coordinators which referrals need attention first and why.",
      image: "/dataengine.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/avi-nz/datathon-2026",
        },
      ],
    },
    {
      title: "Zeil Hackathon 2026",
      dates: "October 2026",
      location: "Auckland, New Zealand",
      description:
        "Built an evidence-based AI interviewer. Recruiters generate role-specific scenarios with evidence rubrics; candidates answer by voice, Gemini transcribes, and a classifier scores five evidence dimensions while adaptive follow-ups target missing evidence. Includes fairness checks across native and second-language phrasing and flags borderline scores for human review.",
      image: "/zeil.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/avi-nz/zeil-hackathon-2026",
        },
      ],
    },
  ],
} as const;
