"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ParticleField() {
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
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);

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

      for (const p of particles) {
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
