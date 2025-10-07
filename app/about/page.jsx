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
        {/* …… 你的介绍内容 …… */}
      </section>

      {/* 教育背景 */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
          Education
        </h2>

        <div className="space-y-8 text-white/80">
          {/* NCSU */}
          <div className="border-l-4 border-sky-500/60 pl-4 hover:border-sky-400 transition-colors">
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold text-white tracking-tight">
                North Carolina State University
              </p>
              <a
              //  href="https://www.ncsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit NCSU Website"
              >
                <img
                  src="/images/NCSU.png"
                  alt="NCSU Logo"
                  className="w-12 h-12 rounded-md border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg transition"
                />
              </a>
            </div>
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

          </div>

          {/* Lawrence Tech */}
          <div className="border-l-4 border-amber-400/60 pl-4 hover:border-amber-300 transition-colors">
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold text-white tracking-tight">
                Lawrence Technological University
              </p>
              <a
               // href="https://www.ltu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LTU Website"
              >
                <img
                  src="/images/LTU.png"
                  alt="LTU Logo"
                  className="w-11 h-11 rounded-md border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg transition"
                />
              </a>
            </div>
            <p className="text-sm italic text-white/60">
              Southfield, Michigan, USA
            </p>
            <div className="mt-2 text-sm leading-relaxed">
              <p>B.Eng. in Materials Science and Engineering</p>
            </div>

          </div>

          {/* Northeastern University (Shenyang) */}
          <div className="border-l-4 border-emerald-400/60 pl-4 hover:border-emerald-300 transition-colors">
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold text-white tracking-tight">
                Northeastern University
              </p>
              <a
               // href="https://www.neu.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Northeastern University (Shenyang)"
              >
                <img
                  src="/images/NEU.png"
                  alt="NEU Logo"
                  className="w-12 h-12 rounded-md border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg transition"
                />
              </a>
            </div>
            <p className="text-sm italic text-white/60">
              Shenyang, Liaoning, China
            </p>
            <div className="mt-2 text-sm leading-relaxed">
              <p>Bachelor of Science in Materials Science</p>
            </div>

          </div>

          {/* 高中 / 初中 / 小学 */}
          <div className="border-l-4 border-white/20 pl-4">
            <div className="flex items-center gap-3">
              <p className="text-l font-semibold text-white tracking-tight">
                Xi’an No. 3 High School （西安市第三中学）
              </p>
             
            </div>

            <div className="flex items-center gap-3 mt-2">
              <p className="text-l font-semibold text-white tracking-tight">
                Affiliated Middle School of Xi’an Jiaotong University （西安交通大学附属中学）
              </p>
              <img
                src="/images/XJTU.png"
                alt="XJTU Middle School Logo"
                className="w-11 h-11 rounded-md border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg transition"
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <p className="text-l font-semibold text-white tracking-tight">
                Primary School Affiliated to Xi’an University of Architecture and Technology （西安建筑科技大学附属小学）
              </p>
              <img
                src="/images/XJ.jpg"
                alt="XAUAT Primary School Logo"
                className="w-11 h-11 rounded-md border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg transition"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
