"use client";

export default function ResearchPage() {
  const cards = [
    {
      title: "1",
      //subtitle: "Flexible Electronics · Waveform Optimization",
     // period: "2023 — Present",
      desc:
        "1111",
      //media: { type: "image", src: "/images/versaboard.jpg" },
      //tags: ["Inkjet", "PEDOT:PSS", "Flexible"],
      //links: [{ label: "Preprint", href: "/papers/inkjet_pedot_preprint.pdf" }],
      
    },
    {
      title: "2",
      //subtitle: "PLC · MQTT · Flask · PostgreSQL",
      //period: "2024 — Present",
      desc:
        "2222",
      //media: { type: "video", src: "/videos/PLC3.mp4" },
      //tags: ["Digital Twin", "PLC", "MQTT"],
      //links: [],
    },
    {
      title: "3",
      //subtitle: "Concept Laser · 50 μm beam",
      //period: "2023 — 2024",
      desc:
        "3333",
      //media: { type: "image", src: "/images/SLM1.jpg" },
      //tags: ["AM (L-PBF)", "Metals"],
      //links: [],
    },
    {
      title: "4",
      //subtitle: "Electrochemical Sensing on Flexible Substrates",
      //period: "2024 — Present",
      desc:
        "4444",
      //media: { type: "image", src: "/images/sensor1.jpg" },
      //tags: ["OECT", "Sensors"],
      //links: [],
    },
    {
      title: "5",
      //subtitle: "Hull (MJ), Rudder (SLS), Prop (SLA)",
      //period: "2024",
      desc:
        "5555",
      //media: { type: "image", src: "/images/Boat1.jpg" },
      //tags: ["AM", "Design"],
      //links: [],
    },
    {
      title: "6",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "6666",
      //media: { type: "image", src: "/images/CNC1.jpg" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* 标题 */}
      <h1 className="mt-2 text-3xl font-bold">Research</h1>

      {/* 纯文字介绍（无背景/边框） */}
      <section className="mt-6">
        <p className="text-white/90 leading-relaxed">
          I feel truly fortunate that every piece of research I do stems from my genuine curiosity and passion.<br />
          And I’m deeply grateful to everyone who has supported and encouraged me along the way.
        </p>
      </section>

      {/* 卡片网格：1/2/3 列 */}
      <section className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              {/* 媒体 */}
              {c.media && (
                <div className="overflow-hidden rounded-lg border border-white/10">
                  {c.media.type === "video" ? (
                    <video
                      src={c.media.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <img
                      src={c.media.src}
                      alt={c.title}
                      className="h-48 w-full object-cover"
                    />
                  )}
                </div>
              )}

              {/* 文本 */}
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-white/60">{c.subtitle}</p>
                <p className="mt-1 text-xs text-white/50">{c.period}</p>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{c.desc}</p>
              </div>

              {/* tags + links */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {c.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
                {c.links?.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-lg border border-sky-400/40 
                               bg-white/10 px-2.5 py-1 text-xs font-medium text-sky-200
                               shadow-[0_0_10px_rgba(56,189,248,0.35)] backdrop-blur-md
                               transition-all hover:scale-105 hover:shadow-[0_0_16px_rgba(56,189,248,0.6)] hover:text-white"
                  >
                    <span className="relative z-10">{l.label} ↗</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500/20 via-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity"></span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* 轻提示（可选） */}
        <p className="mt-6 text-center text-xs text-white/50">
          More publications and projects coming soon.
        </p>
      </section>
    </div>
  );
}
