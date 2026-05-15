"use client";

const experiences = [
  {
    title: "VersaWare Smart Cooking System",
    role: "Founding Team Member",
    org: "VersaWare Technologies Inc.",
    time: "2022-2023",
    category: "Product Development",
    featured: true,
    summary:
      "Developed the technical backbone of a smart cooking appliance prototype, including a Qt-based touchscreen interface, embedded processor integration, and closed-loop system testing.",
    contributions: [
      "Designed and implemented a Qt-based graphical user interface for the touchscreen system.",
      "Integrated the GUI with an embedded processor for real-time appliance control.",
      "Carried out system loop testing to evaluate stability, responsiveness, and reliability under operational load.",
      "Helped transform the first prototype into a second-generation product within six months.",
      "Represented the team at CES 2023 and demonstrated the product to investors, journalists, and potential partners.",
    ],
    tools: [
      "Qt",
      "Embedded Systems",
      "GUI Design",
      "System Integration",
      "Product Development",
      "Startup",
      "CES 2023",
    ],
    outcome:
      "Contributed to a production-ready second-generation smart cooking prototype featuring an interactive touchscreen, recipe library, and AI-assisted meal recommendations.",
    media: [
      {
        type: "image",
        src: "/images/versaboard.jpg",
        caption: "Electronics and control board",
      },
      {
        type: "image",
        src: "/images/versabowl.jpg",
        caption: "Smart cooking appliance prototype",
      },
      {
        type: "image",
        src: "/images/versame.jpg",
        caption: "CES 2023 product demonstration",
      },
    ],
    link: {
      label: "CES 2023 News Article",
      href: "https://us.aving.net/news/articleView.html?idxno=50125",
    },
  },
  {
    title: "PLC-Based Digital Twin Automation System",
    role: "Developer",
    org: "Mechatronics and Automation Center",
    time: "2023",
    category: "Intelligent Manufacturing & Automation",
    featured: true,
    summary:
      "Developed a PLC-based automation system connected to a digital twin environment for real-time visualization and monitoring.",
    contributions: [
      "Programmed PLC logic to coordinate photoelectric sensor signals.",
      "Built a Python gateway for real-time data processing.",
      "Published process data through MQTT for edge-to-cloud communication.",
      "Stored production data in a PostgreSQL database.",
      "Connected the workflow with Factory I/O to create an interactive digital twin environment.",
    ],
    tools: [
      "PLC",
      "Factory I/O",
      "Python",
      "MQTT",
      "PostgreSQL",
      "Digital Twin",
      "Industrial Automation",
    ],
    outcome:
      "Created an interactive automation workflow that connects physical sensing, PLC control, cloud communication, database storage, and digital twin visualization.",
    media: [
      {
        type: "video",
        src: "/videos/PLC2.mp4",
        caption: "PLC-controlled automation workflow",
      },
      {
        type: "video",
        src: "/videos/PLC3.mp4",
        caption: "Real-time process simulation",
      },
      {
        type: "image",
        src: "/images/PLC1.png",
        caption: "Factory I/O digital twin interface",
      },
    ],
  },
  {
    title: "Ær Metrica In-Vehicle Air Quality Sensor",
    role: "Product Development Team Member",
    org: "Product Innovation Institute",
    time: "2023",
    category: "Sensor Systems",
    featured: true,
    summary:
      "Developed a vehicle-integrated air quality sensing prototype designed to monitor cabin and external pollution conditions.",
    contributions: [
      "Built a prototype sensor system for evaluating air quality inside and outside a vehicle.",
      "Integrated the prototype into a Dodge Challenger using the vehicle air intake as the sensing port.",
      "Targeted multiple environmental indicators including CO, CO2, NH3, NO2, and PM2.5.",
      "Explored how vehicle-based sensing could support cabin air automation and large-scale pollution mapping.",
    ],
    tools: [
      "Air Quality Sensing",
      "Vehicle Integration",
      "Product Prototyping",
      "Environmental Monitoring",
      "Sensor Systems",
    ],
    outcome:
      "Demonstrated a vehicle-integrated sensing concept for cabin air quality improvement and exterior pollution data collection.",
    media: [
      {
        type: "image",
        src: "/images/sensor5.jpg",
        caption: "Vehicle-integrated sensor prototype",
      },
      {
        type: "image",
        src: "/images/sensor6.jpg",
        caption: "Air intake as sensing port",
      },
      {
        type: "image",
        src: "/images/sensor1.jpg",
        caption: "Prototype system setup",
      },
    ],
  },
  {
    title: "Laser Powder Bed Fusion of Architected Network Structures",
    role: "Research Project Member",
    org: "CAMAL, Center for Additive Manufacturing and Logistics",
    time: "2023",
    category: "Additive Manufacturing",
    featured: false,
    summary:
      "Investigated the printability of hyperuniform force chain network structures fabricated by Laser Powder Bed Fusion using a Concept Laser system.",
    contributions: [
      "Printed complex architected network structures using metal Laser Powder Bed Fusion.",
      "Studied how feature size and overhang angle affect structural survivability.",
      "Evaluated print fidelity and fabrication limitations for highly complex geometries.",
      "Explored design-for-additive-manufacturing constraints in laser-based metal printing.",
    ],
    tools: [
      "L-PBF",
      "Metal Additive Manufacturing",
      "Architected Materials",
      "Design for AM",
      "Print Fidelity",
      "Overhang Angle",
    ],
    outcome:
      "Developed hands-on understanding of metal additive manufacturing constraints, structural survivability, and geometry-driven printability.",
    media: [
      {
        type: "image",
        src: "/images/SLM1.jpg",
        caption: "L-PBF printed structure",
      },
      {
        type: "image",
        src: "/images/SLM3.png",
        caption: "Print fidelity evaluation",
      },
    ],
  },
  {
    title: "Multi-Process 3D Printed Remote-Controlled Speed Boat",
    role: "Project Member",
    org: "CAMAL, Center for Additive Manufacturing and Logistics",
    time: "2024",
    category: "Additive Manufacturing",
    featured: false,
    summary:
      "Designed and fabricated a functional remote-controlled speed boat through multiple design iterations and multi-process additive manufacturing.",
    contributions: [
      "Iterated the hull geometry to improve structure and performance.",
      "Fabricated different components using material jetting, selective laser sintering, and stereolithography.",
      "Integrated an electric motor and stepper motor control system.",
      "Built a functional remote-controlled prototype.",
    ],
    tools: [
      "Additive Manufacturing",
      "Material Jetting",
      "SLS",
      "SLA",
      "Design Iteration",
      "Mechatronics",
      "Functional Prototype",
    ],
    outcome:
      "Completed a functional multi-process 3D printed speed boat prototype with integrated motion control.",
    media: [
      {
        type: "image",
        src: "/images/Boat1.jpg",
        caption: "Hull design and fabrication",
      },
      {
        type: "video",
        src: "/videos/boatv2.mp4",
        caption: "Functional speed boat demonstration",
      },
    ],
  },
  {
    title: "CNC Machining and Hybrid Fabrication Project",
    role: "Project Member",
    org: "CAMAL, Center for Additive Manufacturing and Logistics",
    time: "2024",
    category: "Manufacturing",
    featured: false,
    summary:
      "Completed a hands-on CNC machining and hybrid fabrication project using aluminum alloy, laser cutting, and 3D printing.",
    contributions: [
      "Machined an aluminum alloy block into the NCSU Wolfpack logo structure.",
      "Practiced CNC machining, 3D scanning, 3D printing, cutting, and surveying workflows.",
      "Combined subtractive and additive manufacturing processes into a finished physical artifact.",
    ],
    tools: [
      "CNC Machining",
      "Hybrid Manufacturing",
      "Laser Cutting",
      "3D Printing",
      "Aluminum Alloy",
      "CAMAL",
    ],
    outcome:
      "Built practical experience in subtractive manufacturing, toolpath execution, material removal, and hybrid fabrication.",
    media: [
      {
        type: "image",
        src: "/images/CNC2.jpg",
        caption: "Machined aluminum feature",
      },
      {
        type: "image",
        src: "/images/CNC4.jpg",
        caption: "Final fabricated artifact",
      },
    ],
  },
  {
    title: "Quality Engineering Internship in Copper Alloy Tube Manufacturing",
    role: "Quality Engineer Intern",
    org: "HAILIANG Group",
    time: "2020",
    category: "Industrial Experience",
    featured: false,
    summary:
      "Worked in the production and quality inspection division for copper alloy tube manufacturing.",
    contributions: [
      "Gained hands-on exposure to melting and casting, extrusion, rolling, and drawing workflows.",
      "Assisted with dimensional and mechanical inspections of copper alloy tubes.",
      "Supported quality evaluation and process consistency in large-scale metal forming.",
    ],
    tools: [
      "Quality Engineering",
      "Metal Forming",
      "Dimensional Inspection",
      "Mechanical Testing",
      "Copper Alloy Tubes",
      "Manufacturing Process",
    ],
    outcome:
      "Developed practical understanding of industrial manufacturing workflows and quality control for copper-based materials.",
    media: [
      {
        type: "image",
        src: "/images/hailiang3.png",
        caption: "Copper alloy tube manufacturing",
      },
      {
        type: "image",
        src: "/images/hailiang1.png",
        caption: "Production environment",
      },
    ],
  },
  {
    title: "Project Management",
    role: "Project Management",
    org: "Real Sales Construction Project",
    time: "2025",
    category: "Project Management",
    featured: false,
    summary: "Adding...",
    contributions: [],
    tools: ["Project Management"],
    outcome: "Adding...",
    media: [],
  },
];

function MediaItem({ item, title }) {
  const alt = `${title}, ${item.caption}`;
  const mediaClass =
    "h-full min-h-[180px] w-full rounded-lg border border-white/10 bg-black/30 object-cover";

  return (
    <figure className="group overflow-hidden rounded-xl bg-white/[0.03]">
      <div className="aspect-[4/3] overflow-hidden">
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            playsInline
            preload="metadata"
            className={mediaClass}
          />
        ) : (
          <img src={item.src} alt={alt} className={mediaClass} />
        )}
      </div>
      {item.caption && (
        <figcaption className="px-3 py-2 text-xs text-white/55">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectCard({ exp, featured = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:border-sky-300/30 hover:bg-white/[0.075] ${
        featured ? "p-6 md:p-8" : "p-5"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent opacity-60" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">
              {exp.category}
            </span>
            <h2
              className={`mt-4 font-semibold tracking-tight text-white ${
                featured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              {exp.title}
            </h2>
            <p className="mt-2 text-sm text-white/65">
              <span className="font-medium text-white/85">{exp.role}</span>
              <span className="mx-2 text-white/25">|</span>
              {exp.org}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/55">
            {exp.time}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-white/76">{exp.summary}</p>

        {exp.contributions.length > 0 && (
          <ul className="space-y-2 text-sm leading-relaxed text-white/70">
            {exp.contributions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {exp.tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {exp.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/66"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Outcome
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            {exp.outcome}
          </p>
        </div>

        {exp.media.length > 0 && (
          <div
            className={`grid grid-cols-1 gap-3 ${
              featured ? "md:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {exp.media.map((item) => (
              <MediaItem
                key={`${item.src}-${item.caption}`}
                item={item}
                title={exp.title}
              />
            ))}
          </div>
        )}

        {exp.link && (
          <div>
            <a
              href={exp.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.16)] transition hover:border-sky-200/50 hover:bg-sky-300/15 hover:text-white"
            >
              {exp.link.label}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  const featuredExperiences = experiences.filter((exp) => exp.featured);
  const standardExperiences = experiences.filter((exp) => !exp.featured);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/70">
          Portfolio
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Projects & Experience
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/68">
          A selected collection of engineering, product development, automation,
          additive manufacturing, and industrial experience across startup,
          research, and manufacturing settings.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        {featuredExperiences.map((exp) => (
          <ProjectCard key={exp.title} exp={exp} featured />
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {standardExperiences.map((exp) => (
          <ProjectCard key={exp.title} exp={exp} />
        ))}
      </section>
    </div>
  );
}
