import { ScrollHint } from "../ScrollHint";

export function Write() {
  const reasons = [
    {
      number: "01",
      title: "복습하기",
      description:
        "배운 스택을 다시 써야 할 때, 제 블로그를 먼저 참고한 뒤 공식문서를 읽습니다. 이전에 이해한 내용을 바탕으로 다시 한번 더 명확하게 이해하려 노력합니다.",
    },
    {
      number: "02",
      title: "깊은 이해",
      description:
        "듣고 본 내용과 직접 작성한 내용은 다릅니다. 지식을 습득했다면 반드시 글로 작성하며 한 번 더 깊이 이해하려 노력합니다.",
    },
    {
      number: "03",
      title: "공유하기",
      description:
        "제가 쓴 글을 다른 사람들과 공유해서 누군가에게 도움이 되는 글을 만들어가는 것이 목표입니다.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl w-full mx-auto itemx-center, justify-center">
      {/* 헤더 */}
      <div className="flex flex-col gap-2">
        <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
          First Value
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-blue-500">기록</span>하기
          <span className="text-gray-500 text-2xl ml-3">Feat. 복습</span>
        </h1>
        <p className="text-gray-400 text-lg mt-2">
          저에게 기록은 크게 3가지의 이유로 나뉩니다.
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className="group relative bg-[#13131a] border border-white/10 rounded-2xl p-8 min-h-[300px] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 overflow-hidden"
          >
            {/* 번호 - 배경 */}
            <span className="absolute top-4 right-4 text-8xl font-bold text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none select-none">
              {reason.number}
            </span>

            {/* 컨텐츠 */}
            <div className="relative z-10 flex flex-col h-full">
              {/* 제목 */}
              <h3 className="absolute top-10 left-6 text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {reason.title}
              </h3>

              {/* 설명 */}
              <p className="absolute top-30 left-6 right-6 text-gray-300 text-lg leading-relaxed text-semibold">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
