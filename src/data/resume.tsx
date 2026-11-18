import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Avishai Narsey",
  initials: "AN",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/avishai.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
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
