"use client";

export default function ExperiencePage() {
  const experiences = [
    {
      role: "VersaWare Technologies Inc.",
      org: "Founding Team Member",
      time: "2022-2023",
      detail: [
        "Designed and implemented a Qt-based graphical user interface, integrated it with an embedded processor, and performed system loop testing to validate real-time performance, stability, and reliability under operational load",
        "Assisted in building Linux systems using the Yocto toolchain and supported firmware deployment",
        "Represented VersaWare at Consumer Electronics Show (CES) 2023; led technical demos and engaged potential partners during seed funding, highlighting product-market fit and technical differentiators",
      ],
      images: [
        "/images/versaboard.jpg",
        "/images/versabowl.jpg",
        "/images/versame.jpg",
      ],
      link: {
        label: "CES 2023 News Article",
        href: "https://us.aving.net/news/articleView.html?idxno=50125",
      },
    },

    {
      role: "Ær Metrica Air Sensor",
      org: "Product Innovation Institute",
      time: "2023",
      detail: [
        "Our product can evaluate the air quality inside and outside of a vehicle. The information is used to automate onboard systems and improve cabin air quality for a healthier life, while capturing exterior pollution levels into an unprecedented database.",
        "CLEAN AIR, CLEAR MIND",
        "Know how much pollution is around you",
        "Breathe better cabin air with automation",
        "Build the world's most detailed air quality map",
        "As a prototype, we built our air sensor that can detect Carbon Monoxide, Carbon Dioxide, Ammonia, Nitrogen Dioxide, and PM2.5 directly into a Dodge Challenger and used the air intake as the perfect sensor port!"
      ],


    },

    {
      role: "CNC",
      org: "NCSU ISE Department",
      time: "2022 — Present",
      detail:
        "Conducting research on inkjet printing of PEDOT:PSS for flexible electronics. Focus on waveform optimization, droplet dynamics, and film characterization (conductivity, roughness, transfer printing).",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <h1 className="text-3xl font-bold">Experience</h1>

      <div className="mt-8 space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold">{exp.role}</h2>
                <p className="text-sm text-white/70">{exp.org}</p>
              </div>
              <span className="text-sm text-white/50">{exp.time}</span>
            </div>

            {/* detail：字符串 → 段落；数组 → 多段落（无小圆点） */}
            {Array.isArray(exp.detail) ? (
              <div className="mt-3 space-y-2 text-sm text-white/80 leading-relaxed">
                {exp.detail.map((d, j) => (
                  <p key={j}>{d}</p>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                {exp.detail}
              </p>
            )}

            {/* 图片：3列平行（小屏自动单列） */}
            {exp.images && exp.images.length > 0 && (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {exp.images.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={`${exp.role} image ${j + 1}`}
                    className="mx-auto max-w-[200px] rounded-lg border border-white/10 object-cover"
                  />
                ))}
              </div>
            )}

            {/* 外部链接按钮 */}
            {exp.link && (
              <div className="mt-4">
                <a
                  href={exp.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-sky-500 px-3 py-1 text-sm text-white hover:bg-sky-400 transition"
                >
                  {exp.link.label} ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
