"use client";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* 页面标题 */}
      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold">About</h1>

        {/* 按钮：在新标签页打开 PDF */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden rounded-xl border border-sky-400/40 
               bg-white/10 px-6 py-3 text-sm font-semibold text-sky-200 
               shadow-[0_0_12px_rgba(56,189,248,0.4)] backdrop-blur-md 
               transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.7)] 
               hover:text-white"
        >
          <span className="relative z-10">RESUME</span>
          {/* 内部发光渐变层 */}
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/20 via-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
        </a>
      </div>

      {/* 介绍段 */}
      <section className="mt-8 text-white/80 leading-relaxed">
        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
          Intro.
        </h2>
        <p className="mb-4">
          Hi, I'm <span className="text-white font-semibold">Tiansong Wang</span>. I am a Ph.D. candidate in Industrial and Systems Engineering at North Carolina State University, with an academic journey that spans materials science, advanced manufacturing, and engineering management. My broad interests have led me to explore both the technical and organizational aspects of engineering, from hands-on research in flexible electronics and printing technologies to strategic thinking in project planning and system optimization. This diverse background has equipped me with a strong foundation in scientific research as well as a practical understanding of management and collaboration within complex engineering environments.
        </p>
        <p>
          Outside of my research, I like to stay active and keep exploring new experiences. I enjoy sports and traveling, and I'm always excited to try something unfamiliar. Recently, I've been spending more time on tennis, frisbee, and juggling. When I'm relaxing, I love playing games on Switch and PS5. (Thanks to the university library's collection, I get to discover new titles every month) 
        </p>
        <p>
           .
        </p>
        <p>
          <span className="text-white font-semibold">By the way, I am currently looking for internship opportunities.</span>
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
                Ph.D. in Industrial and Systems Engineering (Advanced Manufacturing & Engineering Management)
              </p>
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
              <p>Master of science in Biomedical Engineering</p>
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
              <p>Bachelor of Science in Materials Science and Engineering</p>
            </div>

          </div>

          {/* 高中 / 初中 / 小学 */}
          <div className="border-l-4 border-white/20 pl-4">
            <div className="flex items-center gap-3">
              <p className="text-l font-semibold text-white tracking-tight">
                Xi’an No. 3 High School （西安市第三中学）
              </p>
               <img
                src="/images/sanzhong.png"
                alt="sanzhong Middle School Logo"
                className="w-11 h-11 rounded-md border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg transition"
              />
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
                Affiliated Primary School of Xi’an University of Architecture and Technology （西安建筑科技大学附属小学）
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
