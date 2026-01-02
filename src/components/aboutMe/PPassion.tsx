import { useState, useEffect } from "react";

const PPassion = () => {
  const challenges = [
    { number: "01", description: "1번의 해커톤 참여" },
    { number: "02", description: "2번의 부트캠프 참여" },
    { number: "03", description: "7번의 클론 코딩 완료" },
    { number: "04", description: "9번의 팀 및 개인 사이드 프로젝트 완료" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // 다음 슬라이드로 이동
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % challenges.length);
    setAutoPlay(false);
    // 5초 후 자동 재생 재개
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // 이전 슬라이드로 이동
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? challenges.length - 1 : prevIndex - 1
    );
    setAutoPlay(false);
    // 5초 후 자동 재생 재개
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % challenges.length);
    }, 3000); // 3초마다 자동 전환

    return () => clearInterval(interval);
  }, [autoPlay, challenges.length]);

  return (
    <div className="flex flex-col gap-12 max-w-5xl w-full mx-auto items-center justify-center p-8">
      {/* 헤더 부분 */}
      <div className="flex flex-col gap-2 w-full">
        <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">
          Second Value
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-red-400">도전</span>하기
          <span className="text-gray-500 text-2xl ml-3 font-normal">
            Feat. 끈기
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-2">
          "아무것도 하지 않으면{" "}
          <span className="text-red-400 font-semibold">아무일도</span> 일어나지
          않는다."
        </p>
      </div>

      {/* 슬라이더 컨테이너 */}
      <div className="relative w-full max-w-4xl h-[400px] overflow-hidden">
        {/* 이전 버튼 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* 슬라이드 래퍼 */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {challenges.map((challenge) => (
            <div
              key={challenge.number}
              className="min-w-full flex items-center justify-center px-6"
            >
              <div className="group relative bg-[#13131a] border border-white/10 rounded-2xl p-12 w-full max-w-2xl hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 overflow-hidden">
                {/* 번호 - 배경 */}
                <span className="absolute top-4 right-4 text-9xl font-bold text-white/5 group-hover:text-red-500/10 transition-colors pointer-events-none select-none">
                  {challenge.number}
                </span>

                {/* 컨텐츠 */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  {/* 번호 - 앞면 */}
                  <div className="mb-6">
                    <span className="text-red-400 text-5xl font-bold">
                      {challenge.number}
                    </span>
                  </div>

                  {/* 설명 */}
                  <p className="text-gray-300 text-3xl md:text-4xl leading-relaxed font-semibold group-hover:text-white transition-colors">
                    {challenge.description}
                  </p>

                  {/* 장식 라인 */}
                  <div className="mt-8 w-20 h-1 bg-linear-to-r from-red-500 to-red-400 rounded-full group-hover:w-32 transition-all duration-300" />
                </div>

                {/* 호버 시 글로우 효과 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 인디케이터 */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {challenges.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-8 bg-red-400"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PPassion;
