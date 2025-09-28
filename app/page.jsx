"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ==== 可配置区 ====
const CONFIG = {
  name: "Tiansong Wang",
  titleWords: ["Researcher", "Engineer", "Maker", "Reader", "Gamer"],
  tagline:
    "Flexible electronics • Additive Manufacturing • Project Management • Industry 4.0",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tiansong-wang-245489189/" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=D8PvHpsAAAAJ&hl=en" },
    { label: "Steam", href: "https://steamcommunity.com/profiles/76561198799869495/" },
    { label: "Contact", href: "mailto:tiansong.wang@outlook.com" },
  ],
};

// ==== 打字机效果 ====
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
    <span className="relative after:content-[''] after:inline-block after:w-[2px] after:h-[1.1em] after:align-[-0.2em] after:bg-white after:animate-pulse">
      {display}
    </span>
  );
}

// ==== 首页主体 ====
export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto flex flex-col items-center justify-center pt-4 md:pt-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            {CONFIG.name}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          className="mt-8 text-center text-lg text-white/80 sm:text-xl"
        >
          <Typewriter words={CONFIG.titleWords} />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
          className="mt-8 max-w-3xl text-center text-base text-white/70"
        >
          {CONFIG.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
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

        {/* === 诗句部分 === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.45 } }}
          className="mt-20 text-center text-sm text-white/70 leading-relaxed"
        >
          <p>你展开的历史折扇，合上是孤独的歌</p>
          <p className="mt-3 italic">
            History opens like a bustling stage; folded, it retreats into a solo tale</p>
        </motion.div>
      </section>
    </div>
  );
}
