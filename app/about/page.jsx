"use client";

const workAreas = [
  {
    label: "FE",
    title: "Flexible Electronics",
    description:
      "Inkjet printing, PEDOT:PSS, OECT sensors, soft devices, and curved electronics.",
  },
  {
    label: "AM",
    title: "Advanced Manufacturing",
    description:
      "Transfer printing, additive manufacturing, nonplanar integration, and process development.",
  },
  {
    label: "DT",
    title: "Automation & Digital Manufacturing",
    description:
      "PLC systems, MQTT workflows, Factory I/O, PostgreSQL, and digital twin automation.",
  },
  {
    label: "ES",
    title: "Engineering Systems",
    description:
      "Project planning, system optimization, product prototyping, and cross-functional engineering.",
  },
];

const pathway = ["Materials", "Devices", "Manufacturing", "Automation", "Product"];

const education = [
  {
    school: "North Carolina State University",
    location: "Raleigh, North Carolina, USA",
    degree: "Ph.D. in Industrial and Systems Engineering",
    details: [
      "Advanced Manufacturing & Engineering Management",
      "Minor in Mechanical Engineering",
    ],
    href: "https://www.ncsu.edu/",
    logo: "/images/NCSU.png",
    logoAlt: "NCSU Logo",
    accent: "border-sky-400/50",
  },
  {
    school: "Lawrence Technological University",
    location: "Southfield, Michigan, USA",
    degree: "Master of Science in Biomedical Engineering",
    details: [],
    href: "https://www.ltu.edu/",
    logo: "/images/LTU.png",
    logoAlt: "LTU Logo",
    accent: "border-amber-300/50",
  },
  {
    school: "Northeastern University",
    location: "Shenyang, Liaoning, China",
    degree: "Bachelor of Science in Materials Science and Engineering",
    details: [],
    href: "https://www.neu.edu.cn/",
    logo: "/images/NEU.png",
    logoAlt: "NEU Logo",
    accent: "border-emerald-300/50",
  },
];

const personalRoots = [
  {
    school: "Xi’an No. 3 High School （西安市第三中学）",
    logo: "/images/sanzhong.png",
    logoAlt: "Xi’an No. 3 High School Logo",
  },
  {
    school:
      "Affiliated Middle School of Xi’an Jiaotong University （西安交通大学附属中学）",
    logo: "/images/XJTU.png",
    logoAlt: "XJTU Middle School Logo",
  },
  {
    school:
      "Affiliated Primary School of Xi’an University of Architecture and Technology （西安建筑科技大学附属小学）",
    logo: "/images/XJ.jpg",
    logoAlt: "XAUAT Primary School Logo",
  },
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/65">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {children && (
        <p className="mt-3 text-sm leading-relaxed text-white/68">{children}</p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/70">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Me
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/76">
            <p>
              Hi, I am{" "}
              <span className="font-semibold text-white">Tiansong Wang</span>,
              a Ph.D. candidate in Industrial and Systems Engineering at North
              Carolina State University. My work sits at the intersection of
              advanced manufacturing, flexible electronics, additive
              manufacturing, and intelligent automation.
            </p>
            <p>
              I am interested in how materials, devices, and manufacturing
              processes can become integrated engineering systems. My projects
              range from inkjet-printed PEDOT:PSS electronics and
              transfer-printed OECT sensors to digital twin automation, product
              prototyping, and manufacturing process development.
            </p>
            <p>
              I enjoy working across scales, from material interfaces and
              device behavior to manufacturing workflows, automation systems,
              and real-world applications.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rounded-3xl bg-sky-300/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.06] p-3 shadow-[0_20px_70px_rgba(14,165,233,0.16)]">
            <img
              src="/images/anshangge1.png"
              alt="Tiansong Wang portrait"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="Focus Areas" title="What I Work On">
          A concise view of the research, engineering, and product spaces that
          shape my work.
        </SectionTitle>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:border-sky-300/30 hover:bg-white/[0.075]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/25 bg-sky-300/10 text-xs font-bold text-sky-100">
                {area.label}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:p-8">
        <SectionTitle eyebrow="Mindset" title="How I Think">
          My work is shaped by a systems-level mindset. I like to connect
          materials, devices, fabrication processes, automation workflows, and
          product-level applications instead of treating them as separate
          pieces.
        </SectionTitle>

        <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center">
          {pathway.map((item, index) => (
            <div key={item} className="flex flex-col gap-3 md:flex-row md:items-center">
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/78">
                {item}
              </span>
              {index < pathway.length - 1 && (
                <span className="hidden text-white/35 md:inline">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="Academic Background" title="Education">
          University-level training across industrial engineering, biomedical
          engineering, materials science, and advanced manufacturing.
        </SectionTitle>

        <div className="mt-6 space-y-4">
          {education.map((item) => (
            <article
              key={item.school}
              className={`rounded-2xl border border-white/10 border-l-4 ${item.accent} bg-white/[0.05] p-5 shadow-[0_14px_44px_rgba(0,0,0,0.18)] transition hover:bg-white/[0.07]`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${item.school} Website`}
                    className="shrink-0"
                  >
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 object-contain p-1 opacity-85 transition hover:opacity-100"
                    />
                  </a>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {item.school}
                    </h3>
                    <p className="mt-1 text-sm italic text-white/55">
                      {item.location}
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/82">
                      {item.degree}
                    </p>
                    {item.details.length > 0 && (
                      <ul className="mt-2 space-y-1 text-sm text-white/66">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="Early Path" title="Personal Roots">
          Before my engineering journey in the United States, I grew up and
          studied in Xi’an and Shenyang, experiences that shaped my curiosity,
          discipline, and long-term interest in science and technology.
        </SectionTitle>

        <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {personalRoots.map((item) => (
            <article
              key={item.school}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4"
            >
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="h-10 w-10 shrink-0 rounded-lg border border-white/10 bg-white/5 object-contain p-1 opacity-70"
              />
              <p className="text-sm leading-relaxed text-white/65">
                {item.school}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] md:p-7">
        <SectionTitle eyebrow="Outside The Lab" title="Beyond Research">
          Outside the lab, I enjoy tennis, frisbee, juggling, traveling, and
          exploring games on Switch and PS5. These hobbies keep me active,
          curious, and open to unfamiliar experiences.
        </SectionTitle>
      </section>
    </div>
  );
}
