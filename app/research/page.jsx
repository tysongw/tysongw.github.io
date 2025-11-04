"use client";

export default function ResearchPage() {
  const cards = [
    {
      title: "Neural probe",
      //subtitle: "Flexible Electronics · Waveform Optimization",
     // period: "2023 — Present",
      desc:
        "Our neural probe is still in the research stage. We are currently conducting in-vitro experiments to detect substances such as dopamine and glutamate.",
      media: { type: "image", src: "/images/research1.png" },
      //tags: ["Inkjet", "PEDOT:PSS", "Flexible"],
      //links: [{ label: "Preprint", href: "/papers/inkjet_pedot_preprint.pdf" }],
      
    },
    {
      title: "Inkjet printing optimization",
      //subtitle: "PLC · MQTT · Flask · PostgreSQL",
      //period: "2024 — Present",
      desc:
        "In the piezoelectric-driven inkjet printhead, we investigated the influence of waveform design on the droplet diameter and ejection velocity.",
      media: { type: "image", src: "/images/research2.png" },
      //tags: ["Digital Twin", "PLC", "MQTT"],
      //links: [],
    },
    {
      title: "Nonplanar transfer printing",
      //subtitle: "Concept Laser · 50 μm beam",
      //period: "2023 — 2024",
      desc:
        "See this beautiful sphere? Our inkjet-printed pattern was perfectly transferred onto its surface, and it’s remarkably robust!",
      media: { type: "image", src: "/images/research3.png" },
      //tags: ["AM (L-PBF)", "Metals"],
      //links: [],
    },
    {
      title: "Juggling",
      //subtitle: "Electrochemical Sensing on Flexible Substrates",
      //period: "2024 — Present",
      desc:
        "Hmmm, still practicing it... during a break after being subbed out in a tennis match.",
      media: { type: "video", src: "/videos/fun.mp4" },
      //tags: ["OECT", "Sensors"],
      //links: [],
    },
    {
      title: "Graphene based pressure sensor",
      //subtitle: "Hull (MJ), Rudder (SLS), Prop (SLA)",
      //period: "2024",
      desc:
        "A sensor we built together with undergraduate students! The internal structure is stunning, it looks just like a crystal!",
      media: { type: "image", src: "/images/research4.png" },
      //tags: ["AM", "Design"],
      //links: [],
    },
    {
      title: "Soft electronics",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "The moment my hand glowed for the first time...",
      media: { type: "image", src: "/images/research5.png" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
    {
      title: "Fix PS5 controller drift",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "After playing 2K, Dr. Li's controller started drifting, we probably need to replace the joystick analog.",
      media: { type: "image", src: "/images/research6.png" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
    {
      title: "Joule-heating-driven underwater robot",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "An unfinished project... using silver nanowires to generate Joule heating for powering an underwater robot...",
      media: { type: "video", src: "/videos/hydrogel.mp4" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
    {
      title: "Chromogenic hydrogel",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "This is a fun demo, a thermochromic hydrogel reveals the letters NCSU when the temperature changes.",
      media: { type: "video", src: "/videos/color.mp4" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
    {
      title: "Support-free 3D printed conductive hydrogel",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "An unfinished project... but a fascinating one, we used silver nanowires and PEG hydrogel to 3D print conductive gel circuits without any supporting structures.",
      media: { type: "video", src: "/videos/3D.mp4" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
    {
      title: "LSPR based pH sensor",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "We arranged gold nanoparticles in an ordered manner within a hydrogel matrix. Under different pH conditions, the hydrogel exhibits varying degrees of swelling, which alters the spacing between nanoparticles, the resulting optical changes are then detected by an optical sensor.",
      media: { type: "image", src: "/images/research7.png" },
      //tags: ["CNC", "Fabrication"],
      //links: [],
    },
    {
      title: "Hydrogel based temperature sensor",
      //subtitle: "CAMAL · CNC Machining + Laser",
      //period: "2024",
      desc:
        "It’s just a simple temperature sensor, but assembling the incubator, camera, and sensor together was an incredibly satisfying process.",
      media: { type: "image", src: "/images/research8.png" },
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
          And I’m deeply grateful to everyone who has supported and encouraged me along the way.<br />
          The papers are merely by-products of my curiosity-driven exploration of the fascinating world of science.<br />
          If you’re interested in what I’ve published, please visit my Google Scholar.<br />
          Here, I just want to share some fun photos and videos from my experiments.<br />
          Many more were lost when my phone once broke, yet they live on vividly in my memory, reminders that the most meaningful discoveries often lie not in the results, but in the process itself.<br />
          ...
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
