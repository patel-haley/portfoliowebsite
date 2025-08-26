import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-provider";

const PROFILE = {
  name: "haley patel",
  tagline: "software engineering @ university of waterloo | building human‑centred software ",
  location: "toronto / waterloo, canada",
  email: "haley.patel@uwaterloo.ca",
  resumeUrl: "/resume.pdf",
  avatarSrc: "https://media.licdn.com/dms/image/v2/D5603AQH7OEL_2yMn2w/profile-displayphoto-shrink_400_400/B56ZRTZmdIHQAg-/0/1736566008338?e=1758153600&v=beta&t=N7nYWE8HtXchBCfgjoPIy_YvaaPp9aHcPCG1h0L1SHY",
  social: [
    { label: "github", href: "https://github.com/patel-haley", handle: "@patel-haley" },
    { label: "linkedin", href: "https://www.linkedin.com/in/-haleyp/", handle: "@-haleyp" },
    { label: "email", href: "mailto:haley.patel@uwaterloo.ca", handle: "haley.patel@uwaterloo.ca" },
  ],
};

const PROJECTS = [
  {
    title: "skycraft",
    description: "drone prototype designed to assist first responders by providing 3D renders of disaster-affected areas using video footage. utilizes temperature/humidity sensors and gaussian splatting to provide real-time updates.",
    tags: ["ai", "embedded systems"],
    image: "",
    links: [{ label: "github", href: "https://github.com/vaishvijs13/sky-craft" }]
  },
  {
    title: "insureply",
    description: "built for a fast-scaling insurance company with 500+ clients, the all-in-one dashboard allows each client to securely access and manage their approved insurance policies",
    tags: ["ui/ux", "web development"],
    image: "",
    links: [{ label: "github", href: "https://github.com/patel-haley/insureply" }]
  },
  {
    title: "aikya's shakti",
    description: "aikya, my space settlement  design research project, won 3rd place internationally in the nasa-founded, national space society space settlement contest out of 29,000 competitors. shakti was developed as a digital therapist to support the well-being of aikya's residents.",
    tags: ["ai", "hci", "research"],
    image: "",
    links: [{ label: "project", href: "https://35241227-95db-4791-8d6f-e78f71be0b18.filesusr.com/ugd/dee340_d2adbbd77b5b4119a3e019831cd466e0.pdf" }, { label: "github", href: "https://github.com/patel-haley/aikya-shakti" }]
  },
  {
    title: "shipora",
    description: "international shipping company website developed during my internship at finabot canada inc. focused on seamless ui/ux integration with backend functionality, ensuring optimal user experience for shipping logistics.",
    tags: ["ui/ux", "web development"],
    image: "",
    links: []
  }
];

const EXPERIENCE = [
  {
    role: "undergraduate research assistant",
    org: "university of waterloo",
    dates: "sept 2025 – present",
    location: "",
    points: [
      ],
    tags: ["hci", "ml", "research"]
  },
  {
    role: "software engineering intern",
    org: "bell canada",
    dates: "may 2025 – aug 2025",
    location: "",
    points: [
      "developed Python script automations & APIs to sync SAP & JIRA, streamlining 15+ field mappings and minimizing manual updates by 80%",
      "built data pipelines with SQL/Trino to process 10K+ SAP records for seamless JIRA integration",
      "automated JIRA workflows for Bell’s network team, boosting project tracking efficiency across 50+ teams"
    ],
    tags: ["python", "SAP", "JIRA", "api development", "automation"]
  },
  {
    role: "full-stack development intern",
    org: "finabot canada inc.",
    dates: "jul 2023 – mar 2024",
    location: "",
    points: [
      "built website prototypes for a 250+ user client, enhancing ui functionality and responsive design",
      "led cross-functional meetings to align prototypes with business goals"
    ],
    tags: ["html/css", "javascript", "ui/ux", "full-stack", "project management"]
  }
];

const LEADERSHIP = [
  {
    role: "founder",
    org: "amnesty international chapter",
    dates: "sep 2022 – jun 2024",
    points: [
      "founded and led team of 10+ members",
      "highlighted the importance of tech in activism and driving social change",
      "raised $1000+ and petitioned 3000+ signatures for write for rights, earning the title of GTA’s top chapter contributor in 2022 and 2023"
    ]
  },
  {
    role: "president",
    org: "rotary international: interact chapter",
    dates: "jun 2022 – jun 2024",
    points: [
      "led executive team of 15+ members and 100+ general members in community service initiatives",
      "raising over $1,000 worth of food donations for local food bank",
      "recognized as one of the most active chapters in district 7080 brampton rotary branch"
    ]
  }
];



function Header({ shadow }: { shadow: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 transition-all ${
          shadow ? "shadow-sm dark:shadow-black/40" : ""
        }`}
        data-testid="header-main"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-lg" data-testid="link-home">
            {PROFILE.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#experience" className="hover:opacity-80 transition-opacity" data-testid="link-experience">experience</a>
            <a href="#projects" className="hover:opacity-80 transition-opacity" data-testid="link-projects">projects</a>
            <a href="#leadership" className="hover:opacity-80 transition-opacity" data-testid="link-leadership">leadership</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity" data-testid="link-contact">contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <div className="w-5 h-0.5 bg-black dark:bg-white mb-1"></div>
              <div className="w-5 h-0.5 bg-black dark:bg-white mb-1"></div>
              <div className="w-5 h-0.5 bg-black dark:bg-white"></div>
            </button>
            <a
              href={PROFILE.resumeUrl}
              className="rounded-xl px-3 py-1.5 text-sm bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
              data-testid="link-resume"
            >
              resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-black/10 dark:border-white/10" data-testid="mobile-menu">
          <nav className="mx-auto max-w-6xl px-4 py-4 space-y-2">
            <a href="#experience" className="block py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>experience</a>
            <a href="#projects" className="block py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>projects</a>
            <a href="#leadership" className="block py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>leadership</a>
            <a href="#contact" className="block py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>contact</a>
          </nav>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="-top-24 -left-16 absolute h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 dark:opacity-30 bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 animate-pulse"></div>
        <div className="-bottom-24 -right-32 absolute h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 dark:opacity-20 bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-500 animate-pulse-slow"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Professional headshot */}
          <img 
            src={PROFILE.avatarSrc}
            alt="" 
            className="h-32 w-32 rounded-2xl object-cover ring-4 ring-white/70 dark:ring-white/10 shadow-xl"
            data-testid="img-profile-picture"
          />
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" data-testid="text-hero-title">
              hi, i'm haley patel.
            </h1>
            <p className="text-base md:text-lg text-black/70 dark:text-white/70 mb-6 max-w-4xl" data-testid="text-hero-subtitle">
              {PROFILE.tagline}
            </p>
            
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-2 w-full lg:w-80">
            {[
              ["2A", "term @ uwaterloo"],
              ["prev. @ bell canada", "experience"],
              ["hci + ai", "specializations"],
              ["code + cognition", "passion"]
            ].map(([big, small]) => (
              <div key={small} className="glass-card rounded-2xl border p-4 backdrop-blur bg-white/50 dark:bg-white/5 hover:scale-105 transition-transform" data-testid={`stat-${small}`}>
                <div className="text-2xl font-semibold">{big}</div>
                <div className="text-xs opacity-60">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" data-testid="text-projects-title">projects</h2>
        <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity" data-testid="link-projects-all">See all →</a>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className="glass-card group rounded-2xl border overflow-hidden hover:shadow-xl transition-all backdrop-blur bg-white/60 dark:bg-white/5" data-testid={`card-project-${index}`}>
            <img 
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              data-testid={`img-project-${index}`}
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs mb-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-2 py-0.5 opacity-70" data-testid={`tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-semibold tracking-tight group-hover:underline mb-2" data-testid={`text-project-title-${index}`}>{project.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed" data-testid={`text-project-description-${index}`}>{project.description}</p>
              <div className="mt-4 flex gap-3 text-sm">
                {project.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.href} className="text-blue-600 dark:text-blue-400 hover:underline" data-testid={`link-project-${index}-${linkIndex}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8" data-testid="text-experience-title">experience</h2>
      
      <div className="space-y-6">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="glass-card rounded-2xl border p-6 bg-white/60 dark:bg-white/5 hover:shadow-lg transition-shadow" data-testid={`card-experience-${index}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="font-semibold text-lg" data-testid={`text-experience-role-${index}`}>{exp.role}</div>
                <div className="text-black/70 dark:text-white/70" data-testid={`text-experience-org-${index}`}>{exp.org}</div>
              </div>
              <div className="text-sm opacity-60 md:text-right">
                <div data-testid={`text-experience-dates-${index}`}>{exp.dates}</div>
                <div data-testid={`text-experience-location-${index}`}>{exp.location}</div>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed opacity-90">
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex} data-testid={`text-experience-point-${index}-${pointIndex}`}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="rounded-full border px-2 py-0.5 text-xs opacity-70" data-testid={`tag-experience-${index}-${tagIndex}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8" data-testid="text-leadership-title">leadership</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {LEADERSHIP.map((leadership, index) => (
          <div key={index} className="glass-card rounded-2xl border p-6 bg-white/60 dark:bg-white/5 hover:shadow-lg transition-shadow" data-testid={`card-leadership-${index}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="font-semibold text-lg" data-testid={`text-leadership-role-${index}`}>{leadership.role}</div>
                <div className="text-black/70 dark:text-white/70" data-testid={`text-leadership-org-${index}`}>{leadership.org}</div>
              </div>
              <div className="text-sm opacity-60 text-right">
                <div data-testid={`text-leadership-dates-${index}`}>{leadership.dates}</div>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed opacity-90">
              {leadership.points.map((point, pointIndex) => (
                <li key={pointIndex} data-testid={`text-leadership-point-${index}-${pointIndex}`}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8" data-testid="text-leadership-title">contact</h2>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
        {PROFILE.social.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="glass-card rounded-xl border px-3 py-1.5 text-l hover:bg-black/5 dark:hover:bg-white/10 transition-colors bg-white/50 dark:bg-white/5 leading-relaxed"
            data-testid={`link-social-${social.label.toLowerCase()}`}
          >
            {social.label} <span className="opacity-60">{social.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 border-t border-black/10 dark:border-white/10" data-testid="footer-main">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 opacity-70 text-sm">
        <div data-testid="text-footer-copyright">© 2025 {PROFILE.name}. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#top" className="hover:opacity-100 transition-opacity" data-testid="link-footer-top">Back to top ↑</a>
          <span data-testid="text-footer-location">{PROFILE.location}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <Header shadow={shadow} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
