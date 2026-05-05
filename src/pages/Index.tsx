import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Linkedin, Github, Phone, Star, Sparkles, Zap, Code2, Terminal, Database } from "lucide-react";

const tickerWords = ["BACKEND", "NODE.JS", "PYTHON", "POSTGRESQL", "REST APIs", "MICROSERVICES", "MONGODB", "JAVA", "JWT AUTH", "EXPRESS"];

const skills = {
  Languages: ["Python", "JavaScript", "Java", "SQL"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices", "REST API Design"],
  Database: ["PostgreSQL", "MongoDB", "SQL"],
  Tools: ["Git", "GitHub", "Postman", "Linux", "VS Code"],
  Concepts: ["System Design", "Scalable Architecture", "API Security", "Real-time Data"],
};

const experience = [
  {
    period: "May 2025 — Apr 2026",
    role: "Operations Executive",
    company: "The Objects",
    badge: "Full-Time",
    color: "bg-lime",
    points: [
      "Cleared a 4-day backlog of 400+ pending print production orders in a single day through systematic workflow restructuring.",
      "Awarded 🥈 Silver Coin Recognition for outstanding performance.",
      "Operated and monitored Future Rip production software, resolving workflow interruptions to maintain on-time delivery.",
    ],
  },
  {
    period: "Mar 2025 — Apr 2025",
    role: "Operations Executive Intern",
    company: "The Objects",
    badge: "Intern → FTE",
    color: "bg-bubblegum",
    points: [
      "Supported technical operations & debugging in a fast-paced print production environment.",
      "Recognized for adaptability and converted to full-time within 2 months.",
    ],
  },
  {
    period: "Jun 2024 — Jul 2024",
    role: "Summer Intern – EDI & API Systems",
    company: "Flextronics Technologies (India) Pvt. Ltd.",
    badge: "Fortune 500",
    color: "bg-butter",
    points: [
      "Contributed to enterprise-scale API and EDI integration systems handling B2B and A2A communication across global partners.",
      "Implemented and analysed integrations using REST, SOAP, AS2, EDIFACT, and XML for secure and standardised data exchange.",
      "Optimised 5+ EDI integration workflows across global partner systems, reducing onboarding documentation time by 30%.",
      "Designed and documented integration workflows, improving system transparency for new developers.",
    ],
  },
];

const projects = [
  {
    n: "01",
    title: "Portfolio Management System",
    sub: "Real-time Financial Stock Market Simulation",
    desc: "Real-time stock market simulation app integrating 3 live market APIs (Twelve Data, Alpha Vantage, Yahoo Finance), processing 1,000+ data points daily. Includes a paper trading system with virtual funds, buy/sell order execution, and portfolio performance tracking. Built RESTful APIs with Node.js and Express.js for transactions and stock data processing.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "React.js", "PostgreSQL", "MongoDB"],
    link: "https://github.com/Ajai21456/PORTFOLIO-Financial",
    color: "bg-lime",
    big: true,
  },
  {
    n: "02",
    title: "Online File Management System",
    sub: "Secure Multi-User Platform",
    desc: "Secure multi-user file management system with a Python backend and React.js frontend, supporting 5+ file formats. Implemented JWT-based authentication and role-based access control across 3 permission levels. Designed and tested REST APIs for file upload, sharing, and retrieval using Postman.",
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "PostgreSQL", "Appwrite", "Python"],
    link: "https://github.com/Ajai21456/file_management",
    color: "bg-cobalt",
    inverse: true,
    big: true,
  },
];

const education = [
  { degree: "M.Sc. Computer Science", school: "Hindustan College of Arts & Science", period: "2025 — 2027 (Expected)", color: "bg-mint" },
  { degree: "B.Sc. Computer Science", school: "Asan Memorial College of Arts & Science", period: "2022 — 2025", color: "bg-butter" },
];

const certs = [
  { name: "Oracle Certified Foundations Associate", issuer: "Oracle University", date: "Mar 2024" },
  { name: "MongoDB, Node.js, CRUD Operations", issuer: "MongoDB University", date: "Mar 2024" },
  { name: "Cloud Computing & Distributed Systems — Elite", issuer: "NPTEL", date: "Jan – Mar 2026" },
  { name: "AI For Everyone", issuer: "DeepLearning.AI · Coursera", date: "Jul 2025" },
  { name: "Technology Software Development Job Simulation", issuer: "CITI", date: "May 2026" },
  { name: "Consultant Job Simulation", issuer: "Accenture", date: "May 2025" },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
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
      if (!e.isIntersecting) return;
      const t0 = performance.now();
      const dur = 1500;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        setN(Math.floor((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const Index = () => {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const updateTime = () => {
      const t = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata",
      });
      setTime(t);
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => { window.removeEventListener("scroll", onScroll); clearInterval(id); };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-background/90 backdrop-blur border-b-2 border-foreground" : ""}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display text-2xl">
            <span className="w-8 h-8 bg-foreground text-background rounded-full grid place-items-center font-mono text-sm">A</span>
            <span>Ajai<span className="text-tangerine">.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm font-mono uppercase">
            {["About", "Skills", "Work", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="px-3 py-2 hover:bg-foreground hover:text-background transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:ajai21456@gmail.com" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-secondary border-2 border-foreground font-mono text-xs uppercase shadow-brutal hover-lift">
            Hire me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-20 px-5 md:px-8 grid-bg">
        {/* Top status bar */}
        <div className="max-w-7xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase border-b-2 border-foreground pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-mint rounded-full blink" />
            Available for hire
          </div>
          <div>📍 Chennai, IND · {time} IST</div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 items-start">
          {/* Left big text */}
          <div className="lg:col-span-8">
            <div className="reveal flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-foreground text-background font-mono text-xs uppercase">Backend Developer</span>
              <span className="px-3 py-1 bg-tangerine text-background font-mono text-xs uppercase">Open to Work</span>
              <span className="px-3 py-1 border-2 border-foreground font-mono text-xs uppercase">MSc CS Candidate</span>
            </div>
            <h1 className="reveal font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85]">
              Hi, I'm
              <br />
              <span className="italic">Ajai C</span>
              <span className="inline-block ml-2 w-4 h-4 md:w-6 md:h-6 bg-tangerine rounded-full align-top mt-4" />
            </h1>
            <p className="reveal mt-8 max-w-xl text-lg md:text-xl leading-relaxed">
              I architect <span className="bg-secondary px-1">scalable backends</span>, design <span className="bg-bubblegum px-1">clean REST APIs</span>, and ship things that hold up under pressure. <span className="font-mono text-sm text-muted-foreground">// 400+ issues resolved · zero repeat escalation</span>
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background font-mono text-sm uppercase border-2 border-foreground shadow-brutal hover-lift">
                See my work
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a href="mailto:ajai21456@gmail.com" className="inline-flex items-center gap-2 px-6 py-4 bg-card font-mono text-sm uppercase border-2 border-foreground shadow-brutal hover-lift">
                Say hello
              </a>
              <a href="/Ajai_C_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-4 bg-tangerine text-background font-mono text-sm uppercase border-2 border-foreground shadow-brutal hover-lift">
                ↓ Download Resume
              </a>
            </div>
          </div>

          {/* Right sticker stack */}
          <div className="lg:col-span-4 relative h-[420px] hidden lg:block">
            <div className="absolute top-0 right-0 w-56 h-56 bg-cobalt border-2 border-foreground shadow-brutal-lg p-5 flex flex-col justify-between sticker">
              <Terminal className="w-8 h-8 text-background" />
              <div className="text-background font-mono text-xs">$ node server.js</div>
              <div className="font-display text-background text-3xl italic">backend.</div>
            </div>
            <div className="absolute top-32 left-4 w-48 h-48 bg-tangerine border-2 border-foreground shadow-brutal-lg p-5 flex flex-col justify-between sticker" style={{ transform: "rotate(6deg)" }}>
              <Database className="w-8 h-8 text-background" />
              <div className="font-display text-background text-2xl italic">postgres</div>
              <div className="text-background font-mono text-xs">SELECT * FROM ideas;</div>
            </div>
            <div className="absolute bottom-0 right-8 w-44 h-44 bg-secondary border-2 border-foreground shadow-brutal-lg p-5 flex flex-col justify-between sticker" style={{ transform: "rotate(-6deg)" }}>
              <Star className="w-8 h-8 fill-foreground" />
              <div className="font-display text-3xl italic">400+</div>
              <div className="font-mono text-xs uppercase">Issues Solved</div>
            </div>
            <div className="absolute top-4 left-0 w-16 h-16 rounded-full bg-foreground text-background grid place-items-center animate-spin-slow">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 border-2 border-foreground bg-card">
          {[
            { n: 400, s: "+", l: "Orders Cleared" },
            { n: 3, s: "", l: "Live Market APIs" },
            { n: 6, s: "", l: "Certifications" },
            { n: 2, s: "", l: "Projects Shipped" },
          ].map((s, i) => (
            <div key={i} className={`p-6 md:p-8 ${i < 3 ? "border-r-2 border-foreground" : ""} ${i === 1 ? "bg-secondary" : ""} ${i === 2 ? "bg-butter" : ""}`}>
              <div className="font-display text-5xl md:text-6xl">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="font-mono text-xs uppercase mt-2 text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y-2 border-foreground bg-foreground text-background py-5 overflow-hidden">
        <div className="marquee-track">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span className="font-display text-4xl md:text-6xl italic">{w}</span>
              <Star className="w-6 h-6 fill-secondary text-secondary" />
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel num="01" label="The Story" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-8xl leading-[0.95]">
            A developer who <em className="text-tangerine">debugs</em> with discipline.
          </h2>

          <div className="mt-16 grid lg:grid-cols-12 gap-6">
            <div className="reveal lg:col-span-7 p-8 md:p-10 bg-card border-2 border-foreground shadow-brutal">
              <p className="text-lg md:text-xl leading-relaxed">
                I'm a <span className="bg-secondary px-1 font-medium">backend-focused software developer</span> from Chennai, currently pursuing my MSc in Computer Science at Hindustan College.
              </p>
              <p className="mt-5 text-lg md:text-xl leading-relaxed">
                My journey spans enterprise EDI/API integration at <span className="font-medium">Flextronics (Fortune 500)</span>, full-time operations engineering at a fast-growing startup, and academic deep-dives into distributed systems.
              </p>
              <p className="mt-5 text-lg md:text-xl leading-relaxed">
                I write systems that hold up under pressure. I ship things that <em className="text-tangerine">actually work</em>.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-butter border-2 border-foreground font-mono text-xs uppercase">
                🏅 Silver Coin · Outstanding Performance
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Clean Code", color: "bg-lime" },
                { icon: Database, label: "Schemas", color: "bg-bubblegum" },
                { icon: Zap, label: "Fast APIs", color: "bg-tangerine" },
                { icon: Terminal, label: "CLI Native", color: "bg-cobalt", text: "text-background" },
              ].map(({ icon: Icon, label, color, text }, i) => (
                <div key={i} className={`reveal aspect-square p-5 border-2 border-foreground shadow-brutal hover-lift ${color} ${text || ""} flex flex-col justify-between`}>
                  <Icon className="w-8 h-8" />
                  <div className="font-display text-2xl">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-24 px-5 md:px-8 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono">
            <span>02</span><span className="w-8 h-px bg-background/40" /><span>Stack</span>
          </div>
          <h2 className="reveal mt-6 font-display text-5xl md:text-8xl leading-[0.95]">
            Tools I <em className="text-secondary">reach for</em> daily.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skills).map(([group, items], idx) => (
              <div key={group} className="reveal p-6 border-2 border-background bg-foreground hover:bg-background hover:text-foreground transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs uppercase opacity-60">/{idx + 1}</span>
                  <span className="font-display text-2xl italic">{group}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="px-3 py-1.5 border border-current font-mono text-xs">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel num="03" label="Work History" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-8xl leading-[0.95]">
            Where I've <em className="text-tangerine">built</em>.
          </h2>

          <div className="mt-16 space-y-6">
            {experience.map((e, i) => (
              <div key={i} className={`reveal grid md:grid-cols-12 gap-4 p-6 md:p-8 border-2 border-foreground shadow-brutal hover-lift ${e.color}`}>
                <div className="md:col-span-3 font-mono text-xs uppercase">{e.period}</div>
                <div className="md:col-span-9">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-3xl md:text-4xl">{e.company}</h3>
                    <span className="px-2 py-1 bg-foreground text-background text-xs font-mono uppercase">{e.badge}</span>
                  </div>
                  <div className="mt-1 font-mono text-sm">{e.role}</div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2.5 w-2 h-2 bg-foreground shrink-0" />
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
      <section id="projects" className="relative py-24 px-5 md:px-8 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <SectionLabel num="04" label="Selected Work" />
          <h2 className="reveal mt-6 font-display text-5xl md:text-8xl leading-[0.95]">
            Things I <em className="text-tangerine">shipped</em>.
          </h2>

          <div className="mt-16 grid md:grid-cols-6 gap-6">
            {projects.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer"
                className={`reveal group block p-7 md:p-9 border-2 border-foreground shadow-brutal hover-lift ${p.color} ${p.inverse ? "text-background" : ""} ${p.big ? "md:col-span-6" : "md:col-span-3"}`}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs">// PROJECT_{p.n}</span>
                  <ArrowUpRight className="w-7 h-7 group-hover:rotate-45 transition-transform" />
                </div>
                <h3 className={`mt-6 font-display ${p.big ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"} leading-[0.95]`}>
                  {p.title}
                </h3>
                <div className="mt-2 font-mono text-xs uppercase opacity-80">{p.sub}</div>
                <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={`px-3 py-1 border ${p.inverse ? "border-background" : "border-foreground"} font-mono text-xs`}>{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section className="relative py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel num="05" label="Education" />
            <h2 className="reveal mt-6 font-display text-4xl md:text-6xl leading-[0.95]">
              Always <em className="text-tangerine">learning</em>.
            </h2>
            <div className="mt-10 space-y-5">
              {education.map((e, i) => (
                <div key={i} className={`reveal p-6 border-2 border-foreground shadow-brutal hover-lift ${e.color}`}>
                  <div className="font-display text-2xl md:text-3xl">{e.degree}</div>
                  <div className="mt-2 text-sm font-medium">{e.school}</div>
                  <div className="mt-1 font-mono text-xs uppercase">{e.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel num="06" label="Certifications" />
            <h2 className="reveal mt-6 font-display text-4xl md:text-6xl leading-[0.95]">
              Verified <em className="text-tangerine">expertise</em>.
            </h2>
            <div className="mt-10 border-2 border-foreground bg-card divide-y-2 divide-foreground shadow-brutal">
              {certs.map((c, i) => (
                <div key={i} className="reveal flex items-center justify-between gap-4 p-4 hover:bg-secondary transition-colors">
                  <div className="min-w-0">
                    <div className="font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 font-mono">{c.issuer}</div>
                  </div>
                  <div className="font-mono text-xs shrink-0">{c.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 px-5 md:px-8 bg-foreground text-background overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-tangerine rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary rounded-full opacity-20 blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-background font-mono text-xs uppercase mb-8">
            <span className="w-2 h-2 bg-mint rounded-full blink" />
            07 / Get in touch
          </div>
          <h2 className="reveal font-display text-6xl md:text-9xl leading-[0.9]">
            Let's build
            <br />
            something <em className="text-secondary">unreal</em>.
          </h2>
          <p className="reveal mt-8 text-lg max-w-xl mx-auto opacity-80">
            Open to <span className="bg-secondary text-foreground px-1">Backend</span> & <span className="bg-tangerine text-background px-1">Software Developer</span> roles — Chennai or remote across India.
          </p>
          <div className="reveal mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              { icon: Mail, label: "ajai21456@gmail.com", href: "mailto:ajai21456@gmail.com" },
              { icon: Linkedin, label: "linkedin.com/in/ajai-c", href: "https://linkedin.com/in/ajai-c" },
              { icon: Github, label: "github.com/Ajai21456", href: "https://github.com/Ajai21456" },
              { icon: Phone, label: "+91 7338 759 144", href: "tel:+917338759144" },
            ].map(({ icon: Icon, label, href }, i) => (
              <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="group flex items-center justify-between gap-3 p-5 border-2 border-background hover:bg-background hover:text-foreground transition-colors text-left">
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="font-mono text-sm truncate">{label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:rotate-45 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-foreground py-6 px-5 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-xs uppercase">
          <div>© 2026 Ajai C — All systems operational</div>
          <div>Crafted with <span className="text-tangerine">✦</span> in Chennai</div>
        </div>
      </footer>
    </div>
  );
};

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="reveal flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-muted-foreground">
      <span>{num}</span>
      <span className="w-8 h-px bg-foreground/30" />
      <span>{label}</span>
    </div>
  );
}

export default Index;