export function HeroSection() {
  return (
    <section className="text-center py-16 md:py-24">
      {/* 배지 */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-sm text-violet-300">개발 블로그 운영 중</span>
      </div>

      {/* 메인 타이틀 */}
      <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        <span className="text-white">Hello, I'm </span>
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
          HighRoller
        </span>
      </h1>

      {/* 서브타이틀 */}
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        프론트엔드 개발자로서의 여정을 기록합니다.
        <br className="hidden md:block" />
        <span className="text-violet-400">React</span>, <span className="text-emerald-400">TypeScript</span>, 그리고 모던 웹 기술에 대해 공유해요.
      </p>

      {/* CTA 버튼 */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#posts"
          className="group px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          포스트 보기
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#about"
          className="px-6 py-3 rounded-xl bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
        >
          About Me
        </a>
      </div>

      {/* 통계 */}
      <div className="flex justify-center gap-12 mt-16">
        {[
          { value: '42', label: 'Posts' },
          { value: '128', label: 'TIL' },
          { value: '∞', label: 'Passion' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

