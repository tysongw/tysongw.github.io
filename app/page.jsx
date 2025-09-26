"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ==== 轻量“可配置区”====
const CONFIG = {
  name: "Tiansong Wang",
  titleWords: ["Researcher", "Engineer", "Maker", "Portfolio"],
  tagline:
    "Flexible electronics • Inkjet printing • Micro/Nano fabrication • Industrial digital twins",
  social: [
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=you" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
  highlights: [
    {
      title: "Inkjet-Printed PEDOT:PSS",
      desc:
        "Waveform optimization for sub-50 μm lines; reduced satellites; 8× conductivity with DMSO.",
      tags: ["PEDOT:PSS", "Inkjet", "Advanced Materials"],
      link: "#",
    },
    {
      title: "Silicon Microforce Sensor (~10 nN)",
      desc:
        "SOI piezoresistive cantilever; Johnson-noise-limited readout; bridge linearization.",
      tags: ["MEMS", "Piezoresistive", "SOI"],
      link: "#",
    },
    {
      title: "Smart Assembly Line (Industry 4.0)",
      desc:
        "Micro800 PLC + MQTT + Flask dashboard + Factory I/O digital twin for reconfigurable cells.",
      tags: ["PLC", "MQTT", "Digital Twin"],
      link: "#",
    },
  ],
  publications: [
    {
      title:
        "Advanced Neural Probe Sensors toward Multi-Modal Sensing and Modulation",
      venue: "Advanced Sensor Research, 2024",
      link: "#",
    },
    {
      title: "Materials with Tunable Optical Properties for Wearable Sensing",
      venue: "Advanced Materials, 2022",
      link: "#",
    },
  ],
};

// ==== 简易粒子背景（无第三方库）====
function ParticleField() {
  const canvasRef = useRef(null);
  const reqRef = useRef(0);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    setDpr(Math.min(2, window.devicePixelRatio || 1));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const count = Math.floor((width * height) / (12000 * dpr));
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4 * dpr,
      vy: (Math.random() - 0.5) * 0.4 * dpr,
      r: Math.random() * (1.6 * dpr) + 0.4 * dpr,
    }));

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
    };
    window.addEventListener("resize", onResize);

    function tick() {
      ctx.clearRect(0, 0, width, height);

      // draw links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist2 = dx * dx + dy * dy;
          const maxDist = 120 * dpr;
          if (dist2 < maxDist * maxDist) {
            const alpha = 0.08 * (1 - Math.sqrt(dist2) / (maxDist));
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1 * dpr * alpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // draw particles
      for (const p of particles) {
        // mouse interaction (gentle repulsion)
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        const radius = 90 * dpr;
        if (md2 < radius * radius) {
          const f = 0.08 * (1 - Math.sqrt(md2) / radius);
          p.vx += (mdx / Math.max(1, Math.sqrt(md2))) * f;
          p.vy += (mdy / Math.max(1, Math.sqrt(md2))) * f;
        }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      reqRef.current = requestAnimationFrame(tick);
    }

    tick();
    return () => {
      cancelAnimationFrame(reqRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [dpr]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    />
  );
}

// ==== 简易打字机效果（纯 CSS/JS，免第三方）====
function Typewriter({ words, speed = 120, pause = 1200 }) {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[idx % words.length];
    let timer;
    if (!deleting) {
      timer = setTimeout(() => {
        setDisplay(full.slice(0, display.length + 1));
        if (display.length + 1 === full.length) setTimeout(() => setDeleting(true), pause);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplay(full.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }, Math.max(40, speed / 2));
    }
    return () => clearTimeout(timer);
  }, [display, deleting, idx, words, speed, pause]);

  return (
    <span className="relative after:content-[''] after:inline-block after:w-[2px] after:h-[1.1em] after:align-[-0.2em] after:bg-white after:animate-pulse">{display}</span>
  );
}

// ==== 通用标签组件 ====
function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
      {children}
    </span>
  );
}

// ==== 卡片组件 ====
function GlowCard({ title, desc, tags, link }) {
  return (
    <motion.a
      href={link}
      target={link?.startsWith("#") ? undefined : "_blank"}
      rel="noreferrer"
      className="group relative block rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all hover:border-white/20 hover:bg-white/10"
      whileHover={{ y: -4 }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" style={{
        background:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,.18), transparent 40%)",
      }} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))}
      </div>
    </motion.a>
  );
}

export default function Page() {
  // 追踪鼠标位置"发光"
  useEffect(() => {
    const root = document.documentElement;
    const set = (e) => {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", set);
    return () => window.removeEventListener("mousemove", set);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <ParticleField />

      {/* 顶部导航 */}
      <header className="fixed left-0 right-0 top-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-sm font-bold tracking-wide text-white/90">{CONFIG.name}</a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#work" className="text-white/80 hover:text-white">Work</a>
          <a href="#pubs" className="text-white/80 hover:text-white">Publications</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero 区域 */}
      <section id="top" className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">{CONFIG.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          className="mt-4 text-center text-lg text-white/80 sm:text-xl"
        >
          <Typewriter words={CONFIG.titleWords} />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
          className="mt-4 max-w-3xl text-center text-base text-white/70"
        >
          {CONFIG.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {CONFIG.social.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            >
              {s.label}
            </a>
          ))}
        </motion.div>

        {/* 下拉提示 */}
        <div className="mt-16 animate-bounce text-white/60">↓</div>
      </section>

      {/* 工作/项目 */}
      <section id="work" className="mx-auto mt-20 max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Work</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">View all →</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CONFIG.highlights.map((h, i) => (
            <GlowCard key={i} {...h} />
          ))}
        </div>
      </section>

      {/* 发表 */}
      <section id="pubs" className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="mb-6 text-2xl font-bold">Publications</h2>
        <ul className="space-y-4">
          {CONFIG.publications.map((p, i) => (
            <li key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <a
                href={p.link}
                target={p.link?.startsWith("#") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-white/90 hover:underline"
              >
                {p.title}
              </a>
              <div className="text-sm text-white/60">{p.venue}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* 联系 */}
      <section id="contact" className="mx-auto mt-20 max-w-6xl px-6 pb-28">
        <h2 className="mb-6 text-2xl font-bold">Get in touch</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          <p>
            For collaborations, internships, or speaking invitations, email me at{" "}
            <a className="underline" href="mailto:you@example.com">
              you@example.com
            </a>.
          </p>
        </div>
      </section>

      <footer className="pb-10 text-center text-xs text-white/50">© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</footer>
    </div>
  );
}
