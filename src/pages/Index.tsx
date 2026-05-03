import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Linkedin, Github, Phone, Sparkles, Code2, Database, Server } from "lucide-react";

const skills = {
  Languages: ["Python", "JavaScript", "Java", "SQL"],
  Backend: ["Node.js", "Express", "REST APIs", "JWT Auth", "Microservices"],
  "Database & Tools": ["PostgreSQL", "MongoDB", "Docker", "Git", "Postman", "Linux"],
};

const experience = [
  {
    period: "05/2025 — 04/2026",
    company: "The Objects",
    badge: "Full-Time",
    role: "Operations Executive",
    points: [
      "Diagnosed and resolved 400+ technical issues with structured debugging — zero repeat escalation.",
      "Operated Future Rip production software for print job scheduling.",
      "Awarded Silver Coin Recognition for outstanding performance.",
    ],
  },
  {
    period: "03/2025 — 04/2025",
    company: "The Objects",
    badge: "Intern → FTE",
    role: "Operations Intern",
    points: [
      "Supported technical operations and debugging in a fast-paced environment.",
      "Recognized for adaptability — converted to full-time within 2 months.",
    ],
  },
  {
    period: "06/2024 — 07/2024",
    company: "Flextronics Technologies",
    badge: "Fortune 500",
    role: "EDI & API Systems Intern",
    points: [
      "Built integrations using REST, SOAP, AS2, EDIFACT, and XML.",
      "Optimized 5+ EDI workflows, reducing onboarding time by 30%.",
      "Designed integration workflows improving system transparency.",
    ],
  },
];

const projects = [
  {
    n: "01",
    title: "PortfolioAI Pro — Stock Market Simulation",
    desc: "A full-featured financial platform for Indian NSE/BSE markets. Real-time data, virtual paper trading, financial calculators (SIP, CAGR, XIRR), and AI-powered portfolio analysis.",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "MongoDB", "Twelve Data", "Alpha Vantage"],
    link: "https://github.com/Ajai21456/PORTFOLIO-Financial-",
    accent: "bg-sunset",
    featured: true,
  },
  {
    n: "02",
    title: "Online File Management System",
    desc: "Secure multi-user file management with email login, JWT auth, and role-based access across 3 permission tiers.",
    stack: ["Python", "React", "PostgreSQL", "Appwrite", "JWT"],
    link: "https://github.com/Ajai21456/file_management-",
    accent: "bg-mint-grad",
  },
  {
    n: "03",
    title: "Java Enterprise Lab Suite",
    desc: "Java enterprise experiments — RMI Calculator, cookie HTTP server, KBC quiz, and JSP equivalents using com.sun.net.httpserver.",
    stack: ["Java", "RMI", "JSP", "HTTP Server"],
    link: "https://github.com/Ajai21456",
    accent: "bg-aurora",
  },
  {
    n: "04",
    title: "NSE Stock Performance Tracker",
    desc: "Excel/Sheets-based tracker comparing NSE stocks against the Nifty 50 using CAGR formulas and conditional formatting.",
    stack: ["Excel", "Google Sheets", "CAGR", "NSE"],
    link: "https://github.com/Ajai21456",
    accent: "bg-aurora",
  },
];

const education = [
  { degree: "Master of Science in Computer Science", school: "Hindustan College of Arts and Science", period: "2025 – 2027 (Expected)" },
  { degree: "Bachelor of Science in Computer Science", school: "Asan Memorial College of Arts and Science", period: "2022 – 2025" },
];

const certs = [
  { name: "Oracle Certified Foundations Associate", issuer: "Oracle University", date: "Mar 2024" },
  { name: "MongoDB, Node.js & CRUD Operations", issuer: "MongoDB University", date: "Mar 2024" },
  { name: "Cloud Computing & Distributed Systems — Elite", issuer: "NPTEL", date: "Jan – Mar 2026" },
  { name: "AI For Everyone", issuer: "Coursera · DeepLearning.AI", date: "Jul 2025" },
  { name: "Software Development Job Simulation", issuer: "CITI Program", date: "May 2026" },
  { name: "Consultant Job Simulation", issuer: "Accenture", date: "May 2025" },
];

const tickerItems = ["Node.js", "Python", "PostgreSQL", "REST APIs", "Java", "MongoDB", "Docker", "Git", "Microservices", "JWT", "Oracle Certified", "EDI"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const dur = 1600;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const Index = () => {
  useReveal();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrollY > 40 ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#home" className="font-display text-2xl font-semibold tracking-tight">
            Ajai<span className="text-gradient">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["About", "Skills", "Work", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:ajai21456@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:scale-105 transition-transform"
          >
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative pt-40 pb-32 px-6 md:px-10 overflow-hidden">
        <div className="blob bg-aurora w-[500px] h-[500px] -top-32 -left-32" style={{ animationDelay: "0s" }} />
        <div className="blob bg-mint-grad w-[400px] h-[400px] top-20 right-0" style={{ animationDelay: "-5s" }} />
        <div className="blob bg-sunset w-[450px] h-[450px] bottom-0 left-1/3 opacity-40" style={{ animationDelay: "-9s" }} />

        <div className="relative max-w-6xl mx-auto">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-card"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            Software Developer · Chennai, India · Open to opportunities
          </div>

          <h1 className="reveal mt-8 font-display font-light text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tighter">
            Hi, I'm <span className="text-gradient italic font-normal">Ajai.</span>
            <br />
            I build the
            <br />
            <span className="italic">backend</span> behind ideas.
          </h1>

          <p className="reveal mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Backend-focused developer crafting scalable, clean, production-ready systems.
            Fortune 500 intern. MSc Computer Science candidate.
            <span className="text-foreground font-medium"> 400+ issues resolved, zero repeat escalation.</span>
          </p>

          <div className="reveal mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:shadow-soft hover:scale-105 transition-all"
            >
              View my work
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="mailto:ajai21456@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border bg-card font-medium hover:border-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Stats */}
          <div className="reveal mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: 400, s: "+", l: "Issues Resolved" },
              { n: 3, s: "", l: "Live APIs" },
              { n: 6, s: "+", l: "Certifications" },
              { n: 4, s: "", l: "Major Projects" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-card/60 backdrop-blur border border-border shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="font-display text-5xl font-light text-gradient">
                  <Counter to={stat.n} suffix={stat.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative py-8 border-y border-border bg-card/40 overflow-hidden">
        <div className="marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-3xl md:text-5xl font-light italic text-foreground/80 whitespace-nowrap">
                {t}
              </span>
              <span className="w-2 h-2 rounded-full bg-secondary" />
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionLabel num="01" label="About" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-7xl font-light leading-tight tracking-tight">
            Developer by <em className="text-gradient">craft,</em>
            <br />
            problem-solver by nature.
          </h2>

          <div className="mt-16 grid md:grid-cols-5 gap-12">
            <div className="reveal md:col-span-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-medium">backend-focused software developer</span> from
                Chennai, currently pursuing my MSc in Computer Science at Hindustan College. I specialize in building
                server-side architectures that are clean, scalable, and production-ready.
              </p>
              <p>
                My journey spans enterprise-level EDI/API integration at{" "}
                <span className="text-foreground font-medium">Flextronics (Fortune 500)</span>, full-time operations
                engineering at a growing startup, and academic deep-dives into distributed systems and ML.
              </p>
              <p>
                I write systems that hold up under pressure. I debug with discipline. I ship things that{" "}
                <span className="text-foreground font-medium">actually work</span>.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora text-foreground text-sm font-medium shadow-card">
                🏅 Silver Coin Recognition — Outstanding Performance
              </div>
            </div>

            <div className="reveal md:col-span-2 grid grid-cols-2 gap-4">
              {[
                { icon: Server, label: "Server-side", color: "bg-aurora" },
                { icon: Database, label: "Databases", color: "bg-mint-grad" },
                { icon: Code2, label: "Clean APIs", color: "bg-sunset" },
                { icon: Sparkles, label: "Reliability", color: "bg-aurora" },
              ].map(({ icon: Icon, label, color }, i) => (
                <div
                  key={i}
                  className={`${color} aspect-square rounded-3xl p-6 flex flex-col justify-between shadow-card hover:scale-105 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-foreground" />
                  <div className="font-display text-xl font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-32 px-6 md:px-10 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <SectionLabel num="02" label="Skills" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-7xl font-light leading-tight tracking-tight">
            Built on a <em className="text-gradient">solid</em>
            <br />
            technical foundation.
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, items], idx) => (
              <div
                key={group}
                className="reveal p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  0{idx + 1} / {group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / EXPERIENCE */}
      <section id="work" className="relative py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionLabel num="03" label="Experience" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-7xl font-light leading-tight tracking-tight">
            Where I've <em className="text-gradient">built</em>
            <br />
            real things.
          </h2>

          <div className="mt-16 space-y-4">
            {experience.map((e, i) => (
              <div
                key={i}
                className="reveal group grid md:grid-cols-12 gap-6 p-8 rounded-3xl border border-border bg-card hover:bg-aurora hover:border-transparent hover:shadow-soft transition-all duration-500"
              >
                <div className="md:col-span-3 text-sm text-muted-foreground group-hover:text-foreground/80">
                  {e.period}
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-2xl md:text-3xl font-medium">{e.company}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-foreground text-background">{e.badge}</span>
                  </div>
                  <div className="mt-1 text-base font-medium text-muted-foreground group-hover:text-foreground/80">
                    {e.role}
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground group-hover:text-foreground/90">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-32 px-6 md:px-10 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <SectionLabel num="04" label="Projects" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-7xl font-light leading-tight tracking-tight">
            Things I've <em className="text-gradient">shipped</em>
            <br />
            from scratch.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`reveal group relative overflow-hidden rounded-3xl p-8 md:p-10 border border-border shadow-card hover:shadow-soft hover:-translate-y-2 transition-all duration-500 ${
                  p.featured ? "md:col-span-2 min-h-[420px]" : "min-h-[360px]"
                } ${p.accent}`}
              >
                <div className="absolute inset-0 bg-background/85 group-hover:bg-background/70 transition-colors" />
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-muted-foreground">/ {p.n}</span>
                      <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                    </div>
                    <h3 className="mt-6 font-display text-3xl md:text-4xl font-medium leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-background border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section className="relative py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel num="05" label="Education" />
            <h2 className="reveal mt-6 font-display text-4xl md:text-5xl font-light leading-tight">
              Always <em className="text-gradient">learning.</em>
            </h2>
            <div className="mt-10 space-y-4">
              {education.map((e, i) => (
                <div
                  key={i}
                  className="reveal p-6 rounded-2xl border border-border bg-card hover:border-foreground transition-colors"
                >
                  <div className="font-display text-xl font-medium">{e.degree}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{e.school}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel num="06" label="Certifications" />
            <h2 className="reveal mt-6 font-display text-4xl md:text-5xl font-light leading-tight">
              Verified <em className="text-gradient">expertise.</em>
            </h2>
            <div className="mt-10 space-y-1">
              {certs.map((c, i) => (
                <div
                  key={i}
                  className="reveal group flex items-center justify-between gap-4 py-4 border-b border-border hover:px-3 transition-all"
                >
                  <div>
                    <div className="font-medium group-hover:text-gradient transition-colors">{c.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground shrink-0">{c.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
        <div className="blob bg-aurora w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-60" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel num="07" label="Contact" centered />
          <h2 className="reveal mt-8 font-display text-6xl md:text-8xl font-light leading-[0.95] tracking-tighter">
            Let's build
            <br />
            something <em className="text-gradient">great.</em>
          </h2>
          <p className="reveal mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Open to Backend Developer & Software Developer opportunities — Chennai or remote across India.
          </p>
          <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
            {[
              { icon: Mail, label: "ajai21456@gmail.com", href: "mailto:ajai21456@gmail.com" },
              { icon: Linkedin, label: "linkedin.com/in/ajai-c", href: "https://linkedin.com/in/ajai-c" },
              { icon: Github, label: "github.com/Ajai21456", href: "https://github.com/Ajai21456" },
              { icon: Phone, label: "+91 7338 759 144", href: "tel:+917338759144" },
            ].map(({ icon: Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:bg-foreground hover:text-background transition-colors text-sm font-medium"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <div>© 2026 Ajai C. All rights reserved.</div>
          <div>
            Crafted with <span className="text-gradient">✦</span> in Chennai, Tamil Nadu
          </div>
        </div>
      </footer>
    </div>
  );
};

function SectionLabel({ num, label, centered = false }: { num: string; label: string; centered?: boolean }) {
  return (
    <div
      className={`reveal flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="font-mono">{num}</span>
      <span className="w-8 h-px bg-foreground/30" />
      <span>{label}</span>
    </div>
  );
}

export default Index;