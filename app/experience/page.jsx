"use client";

export default function ExperiencePage() {
  const experiences = [
    {
      role: "VersaWare Technologies Inc.",
      org: "Founding Team Member",
      time: "2022-2023",
      detail: [
        "I was incredibly excited to join VersaWare Technologies, a startup based inside the Centrepolis Accelerator. Every week I participated in training sessions there, gaining hands-on knowledge about entrepreneurship, fundraising, and product development, all while collaborating closely with five other teammates.",
        "My role focused on the technical backbone of the product. I designed and implemented a Qt-based graphical user interface, integrated it with an embedded processor, and carried out system loop testing to ensure real-time performance, stability, and reliability under operational load. These efforts were critical in taking our very first prototype and transforming it into a production-ready second-generation machine within just six months. This new generation product featured an interactive touchscreen, a rich set of recipes, and AI-assisted meal recommendations: a leap that turned our vision into something tangible and exciting.",
        "One of the proudest moments of this journey was representing VersaWare at CES 2023. There, I showcased our product to investors, journalists, and potential partners, sharing not only the technical innovations but also the energy and passion of building something groundbreaking from the ground up.",
      ],
      images: [
        "/images/versaboard.jpg",
        "/images/versabowl.jpg",
        "/images/versame.jpg",
      ],
      imageMaxH: "max-h-[300px]",
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
        "CLEAN AIR, CLEAR MIND",
        "Know how much pollution is around you",
        "Breathe better cabin air with automation",
        "Build the world's most detailed air quality map",
        "Our product can evaluate the air quality inside and outside of a vehicle. The information is used to automate onboard systems and improve cabin air quality for a healthier life, while capturing exterior pollution levels into an unprecedented database. As a prototype, we built our air sensor that can detect Carbon Monoxide, Carbon Dioxide, Ammonia, Nitrogen Dioxide, and PM2.5 directly into a Dodge Challenger and used the air intake as the perfect sensor port!"
      ],
      images: [
        "/images/sensor5.jpg",
        "/images/sensor6.jpg",
        "/images/sensor1.jpg",
      ],
      imageMaxH: "max-h-[240px]",
    },

    {
      role: "Computer numerical control machine tools (CNC)",
      org: "CAMAL, Center for Additive Manufacturing and Logistics",
      time: "2024",
      detail:
        "I became proficient in operating a wide range of instruments and machining tools at the center, including 3D scanning, 3D printing, CNC machining, various cutting processes, and surveying techniques. As a project, I transformed a block of aluminum alloy into the shape of the NCSU Wolfpack logo using CNC machining, and then combined laser cutting with 3D printing to turn it into a unique piece of art!",
      images: [
        "/images/CNC3.jpg",
        "/images/CNC2.jpg",
        "/images/CNC1.jpg",
        "/images/CNC4.jpg",
      ],
      imageCols: "sm:grid-cols-4",
      imageMaxH: "max-h-[330px]",
    },

    {
      role: "3D Printed Speed Boat",
      org: "CAMAL, Center for Additive Manufacturing and Logistics",
      time: "2024",
      detail:
        "We conducted multiple iterations of the hull design, systematically refining the geometry and structural integrity before finalizing the optimized configuration. Distinct additive manufacturing techniques were employed for different components: material jetting for the hull, selective laser sintering for the rudder, and stereolithography for the propeller. Following fabrication, an electric motor and stepper motor were integrated into the assembly as the control system, resulting in a fully functional remote-controlled speed boat prototype",
      media: [
        { type: "image", src: "/images/Boat1.jpg" },
        { type: "video", src: "/videos/boatv2.mp4" }, 
        { type: "image", src: "/images/Boat3.jpg" },
      ],
      imageCols: "sm:grid-cols-3",
      imageMaxH: "max-h-[330px]",
    },

    {
      role: "Something",
      org: "somewhere",
      time: "2023",
      detail:
        "Industrial 4.0",
      media: [
        { type: "video", src: "/videos/PLC2.mp4" }, 
        { type: "video", src: "/videos/PLC3.mp4" },
        { type: "image", src: "/images/PLC1.png" },
      ],
      imageCols: "sm:grid-cols-3",
      imageMaxH: "max-h-[330px]",     
    },


    {
      role: "Adding...",
     /* org: "CAMAL, Center for Additive Manufacturing and Logistics",
      time: "2024",
      detail:
        "We conducted multiple iterations of the hull design, systematically refining the geometry and structural integrity before finalizing the optimized configuration. Distinct additive manufacturing techniques were employed for different components: material jetting for the hull, selective laser sintering for the rudder, and stereolithography for the propeller. Following fabrication, an electric motor and stepper motor were integrated into the assembly as the control system, resulting in a fully functional remote-controlled speed boat prototype",
      media: [
        { type: "image", src: "/images/Boat1.jpg" },
        { type: "video", src: "/videos/boatv5.mp4" }, 
        { type: "image", src: "/images/Boat3.jpg" },
      ],
      imageCols: "sm:grid-cols-3",
      imageMaxH: "max-h-[330px]",     */
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

            {/* 图片：列数与高度可按条目控制（兼容 images 或 media） */}
            {(exp.images?.length || exp.media?.length) && (
              <div className={`mt-4 grid grid-cols-1 gap-4 ${exp.imageCols ?? "sm:grid-cols-3"}`}>
                {(exp.media ?? exp.images.map((src) => ({ type: "image", src }))).map((m, j) =>
                  m.type === "video" ? (
                    <video
                      key={j}
                      src={m.src}
                      controls
                      playsInline
                      preload="metadata"
                      className={`mx-auto h-auto w-auto ${exp.imageMaxH ?? "max-h-[250px]"} rounded-lg border border-white/10 object-contain`}
                    />
                  ) : (
                    <img
                      key={j}
                      src={m.src}
                      alt={`${exp.role} media ${j + 1}`}
                      className={`mx-auto h-auto w-auto ${exp.imageMaxH ?? "max-h-[250px]"} rounded-lg border border-white/10 object-contain`}
                    />
                  )
                )}
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
