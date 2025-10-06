"use client";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* 页面标题 */}
      <h1 className="text-3xl font-bold">About</h1>

      {/* 介绍段 */}
      <section className="mt-8 text-white/80 leading-relaxed">
        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
          Intro.
        </h2>
        <p className="mb-4">
          I’m <span className="text-white font-semibold">Tiansong Wang</span>.
        </p>
        ......
      </section>

      {/* 教育背景 */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
          Education
        </h2>

        <div className="space-y-8 text-white/80">
          {/* NCSU */}
          <div className="border-l-4 border-sky-500/60 pl-4 hover:border-sky-400 transition-colors">
            <p className="text-xl font-semibold text-white tracking-tight">
              North Carolina State University
            </p>
            <p className="text-sm italic text-white/60">
              Raleigh, North Carolina, USA
            </p>
            <div className="mt-2 text-sm leading-relaxed">
              <p>
                Ph.D. in Industrial and Systems Engineering (Advanced Manufacturing)
              </p>
              <p>Master of Engineering Management</p>
              <p>Minor in Mechanical Engineering</p>
            </div>
            <p className="mt-2 text-xs text-white/50">
              Focus: Additive Manufacturing · Flexible Electronics · Digital Twin Systems
            </p>
          </div>

          {/* Lawrence Tech */}
          <div className="border-l-4 border-amber-400/60 pl-4 hover:border-amber-300 transition-colors">
            <p className="text-xl font-semibold text-white tracking-tight">
              Lawrence Technological University
            </p>
            <p className="text-sm italic text-white/60">
              Southfield, Michigan, USA
            </p>
            <div className="mt-2 text-sm leading-relaxed">
              <p>B.Eng. in Materials Science and Engineering</p>
            </div>
            <p className="mt-2 text-xs text-white/50">
              Undergraduate Research: Functional Materials · Surface Engineering · Nanostructures
            </p>
          </div>

          {/* Northeastern University */}
          <div className="border-l-4 border-emerald-400/60 pl-4 hover:border-emerald-300 transition-colors">
            <p className="text-xl font-semibold text-white tracking-tight">
              Northeastern University
            </p>
            <p className="text-sm italic text-white/60">
              Shenyang, Liaoning, China
            </p>
            <div className="mt-2 text-sm leading-relaxed">
              <p>Bachelor of Science in Materials Science</p>
            </div>
            <p className="mt-2 text-xs text-white/50">
              Focus: Materials Processing · Physical Metallurgy · Characterization
            </p>
          </div>

          {/* 高中 / 初中 / 小学 */}
          <div className="border-l-4 border-white/20 pl-4">
            <p className="text-l font-semibold text-white tracking-tight">
              Xi’an No. 3 High School （西安市第三中学）
            </p>
            <p className="text-l font-semibold text-white tracking-tight">
              Affiliated Middle School of Xi’an Jiaotong University （西安交通大学附属中学）
            </p>
            <p className="text-l font-semibold text-white tracking-tight">
              Primary School Affiliated to Xi’an University of Architecture and Technology （西安建筑科技大学附属小学）
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
