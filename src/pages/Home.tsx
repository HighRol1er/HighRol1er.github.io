import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TextType from "../components/TextType";
import { Introduce } from "../components/Introduce";
import { GridBackground } from "../components/GridBackground";
import { ScrollHint } from "../components/ScrollHint";
import { Write } from "@/components/aboutMe/Write";
import PPassion from "@/components/aboutMe/PPassion";
import { TeamWork } from "@/components/aboutMe/TeamWork";

export default function Home() {
  const boxRef = useRef<HTMLButtonElement>(null);
  const chipRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const introOverlayRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleClick = () => {
    if (isClicked) return;

    setIsClicked(true);

    // 박스 위치 가져오기
    const boxRect = boxRef.current?.getBoundingClientRect();
    if (!boxRect) return;

    const boxCenterX = boxRect.left + boxRect.width / 2;
    const boxCenterY = boxRect.top + boxRect.height / 2;

    // 각 이미지를 박스 중심으로 빨려들어가게 하는 애니메이션
    const animateToBox = (element: HTMLElement | null, delay: number) => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const deltaX = boxCenterX - elementCenterX;
      const deltaY = boxCenterY - elementCenterY;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        scale: 0.1,
        opacity: 0,
        rotation: 360,
        duration: 0.8,
        delay: delay,
        ease: "power2.in",
      });
    };

    // 순차적으로 빨려들어가기 (칩 → 로고 → 카드)
    animateToBox(chipRef.current, 0);
    animateToBox(logoRef.current, 0.1);
    animateToBox(cardRef.current, 0.2);

    // 컨테이너도 숨기기
    gsap.to(itemsContainerRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.8,
    });

    // 애니메이션 완료 후 결과 이미지로 교체
    setTimeout(() => {
      setShowResult(true);
    }, 1200);
  };

  // 이미지들 둥둥 떠다니는 애니메이션
  useEffect(() => {
    if (isClicked) return;

    const floatAnimations: gsap.core.Tween[] = [];

    // 칩 - 위아래로 부드럽게 떠다니기
    if (chipRef.current) {
      floatAnimations.push(
        gsap.to(chipRef.current, {
          y: -15,
          rotation: 3,
          duration: 2.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      );
    }

    // 로고 - 약간 다른 타이밍으로 떠다니기
    if (logoRef.current) {
      floatAnimations.push(
        gsap.to(logoRef.current, {
          y: -12,
          rotation: -2,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.5,
        })
      );
    }

    // 카드 - 또 다른 타이밍으로 떠다니기
    if (cardRef.current) {
      floatAnimations.push(
        gsap.to(cardRef.current, {
          y: -18,
          rotation: -4,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.3,
        })
      );
    }

    return () => {
      floatAnimations.forEach((anim) => anim.kill());
    };
  }, [isClicked]);

  // 박스 흔들림 애니메이션
  useEffect(() => {
    if (boxRef.current && !isClicked) {
      // 자연스러운 좌우 흔들림 애니메이션
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(boxRef.current, {
        rotation: 8,
        duration: 0.15,
        ease: "sine.inOut",
      })
        .to(boxRef.current, {
          rotation: -6,
          duration: 0.15,
          ease: "sine.inOut",
        })
        .to(boxRef.current, {
          rotation: 5,
          duration: 0.12,
          ease: "sine.inOut",
        })
        .to(boxRef.current, {
          rotation: -3,
          duration: 0.12,
          ease: "sine.inOut",
        })
        .to(boxRef.current, {
          rotation: 2,
          duration: 0.1,
          ease: "sine.inOut",
        })
        .to(boxRef.current, {
          rotation: 0,
          duration: 0.15,
          ease: "sine.out",
        });

      return () => {
        tl.kill();
      };
    }
  }, [isClicked]);

  // 결과 이미지 드라마틱 등장 애니메이션
  useEffect(() => {
    if (showResult && resultRef.current) {
      const container = resultRef.current;
      const img = container.querySelector("img");
      const glowRing = container.querySelector(".glow-ring");
      const sparkles = container.querySelectorAll(".sparkle");

      const tl = gsap.timeline();

      // 1. 글로우 링이 먼저 나타나며 펄스
      tl.fromTo(
        glowRing,
        { scale: 0, opacity: 0 },
        { scale: 1.5, opacity: 1, duration: 0.4, ease: "power2.out" }
      )
        // 2. 글로우 링 축소하면서 이미지 등장 준비
        .to(glowRing, { scale: 1, duration: 0.2, ease: "power2.in" })
        // 3. 이미지가 탄력있게 튀어나옴
        .fromTo(
          img,
          { scale: 0, rotation: -180, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.1"
        )
        // 4. 스파클 효과
        .fromTo(
          sparkles,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(2)",
          },
          "-=0.3"
        )
        .to(
          sparkles,
          {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.03,
          },
          "+=0.2"
        )
        // 5. 글로우 링 계속 펄스 애니메이션
        .to(glowRing, {
          scale: 1.2,
          opacity: 0.8,
          duration: 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
    }
  }, [showResult]);

  // 인트로 클릭 핸들러 - 오디오 시작
  const handleIntroClick = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }

    // 인트로 오버레이 페이드 아웃
    if (introOverlayRef.current) {
      gsap.to(introOverlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setShowIntro(false);
        },
      });
    }
  };

  // 볼륨 변경
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="h-screen w-full scroll-smooth">
      {/* 오디오 요소 */}
      <audio ref={audioRef} src="/audio/JackpotStrings.mp3" loop />

      {/* ===== 섹션 1: 히어로 (박스 인터랙션) ===== */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <GridBackground />
        {/* 인트로 오버레이 - 클릭해서 시작 */}
        {showIntro && (
          <div
            ref={introOverlayRef}
            onClick={handleIntroClick}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          >
            {/* 펄스 링 애니메이션 */}
            <div className="absolute w-40 h-40 rounded-full border-2 border-emerald-400/50 animate-ping" />
            <div
              className="absolute w-32 h-32 rounded-full border-2 border-violet-400/50 animate-ping"
              style={{ animationDelay: "0.3s" }}
            />

            {/* 재생 아이콘 */}
            <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-emerald-500 to-violet-500 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-110 transition-transform">
              <svg
                className="w-10 h-10 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* 오디오 컨트롤러 */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          {/* 재생/일시정지 버튼 */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 flex items-center justify-center text-white hover:text-emerald-400 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* 뮤트 버튼 */}
          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center text-white hover:text-emerald-400 transition-colors"
          >
            {isMuted || volume === 0 ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : volume < 0.5 ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>

          {/* 볼륨 슬라이더 */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-emerald-400
              [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(52,211,153,0.5)]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-3
              [&::-moz-range-thumb]:h-3
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-emerald-400
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer"
          />

          {/* 볼륨 퍼센트 표시 */}
          {/* <span className="text-xs text-white/60 w-8 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span> */}
          <span> </span>
        </div>

        <div className="flex flex-col items-center justify-center absolute top-[50px]">
          <div ref={itemsContainerRef} className="flex items-center gap-4">
            <img
              ref={chipRef}
              src="/static/chip.png"
              alt="Chip"
              className="w-60"
            />
            <img
              ref={logoRef}
              src="/static/highroller.png"
              alt="HighRoller"
              className="w-72 h-auto object-contain"
            />
            <img
              ref={cardRef}
              src="/static/card.png"
              alt="Card"
              className="w-60"
            />
          </div>
          {showResult ? (
            <div
              ref={resultRef}
              className="relative flex items-center justify-center"
            >
              {/* 글로우 링 */}
              <div className="glow-ring absolute w-96 h-96 rounded-full bg-gradient-radial from-emerald-500/60 via-violet-500/40 to-transparent blur-xl" />

              {/* 스파클 효과 */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="sparkle absolute w-4 h-4"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z"
                      fill={i % 2 === 0 ? "#8B5CF6" : "#10B981"}
                    />
                  </svg>
                </div>
              ))}

              {/* 결과 이미지 */}
              <img
                src="/logo/highroller.png"
                alt="HighRoller Result"
                className="w-96 h-96 relative z-10"
              />
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              {/* 바운싱 화살표 */}
              {!isClicked && (
                <div className="absolute -top-16 flex flex-col items-center animate-bounce">
                  <svg
                    className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}

              {/* 글로우 링 이펙트 */}
              {!isClicked && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-80 h-80 rounded-full bg-linear-to-r from-violet-500/20 to-emerald-500/20 animate-ping" />
                </div>
              )}

              <button
                ref={boxRef}
                className="cursor-pointer relative z-10 transition-transform hover:scale-105"
                onClick={handleClick}
              >
                {isClicked ? (
                  <img
                    src="/static/openbox.png"
                    alt="OpenBox"
                    className="w-72 h-72"
                  />
                ) : (
                  <img
                    src="/static/closebox.png"
                    alt="CloseBox"
                    className="w-72 h-72"
                  />
                )}
              </button>
            </div>
          )}
        </div>
        <div
          className={`absolute top-[620px] flex items-center justify-center`}
        >
          {showResult && (
            <TextType
              text={["Ready to Roll!", "Winner Winner Chicken Dinner!"]}
              textColors={["#52A077", "#8B5CF6"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="$"
              className="text-4xl font-bold"
              style={{
                fontFamily: "'Pacifico', cursive",
              }}
            />
          )}
        </div>

        {/* 스크롤 힌트 화살표 */}
      </section>
      <ScrollHint />

      {/* ===== 섹션 2: Introduce ===== */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0f]">
        <Introduce />
      </section>
      <section className="h-screen flex items-center justify-center bg-[#0a0a0f]  mx-auto w-full px-6">
        <Write />
      </section>
      <section className="h-screen flex items-center justify-center bg-[#0a0a0f] mx-auto w-full px-6">
        <PPassion />
      </section>
      <section className="h-screen flex items-center justify-center bg-[#0a0a0f] mx-auto w-full px-6">
        <TeamWork />
      </section>
    </main>
  );
}
