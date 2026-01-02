import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TeamWork() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // 초기 상태 설정 (위로 이동, 투명)
    gsap.set(element, {
      y: -50,
      opacity: 0,
    });

    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 뷰에 들어왔을 때 애니메이션 실행
            gsap.to(element, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            });
            // 한 번만 실행되도록 observer 해제
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.2, // 20% 보일 때 트리거
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-12 max-w-5xl w-full mx-auto items-center justify-center p-8">
      {/* 헤더 부분 */}
      <div className="flex flex-col gap-2 w-full">
        <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">
          Third Value
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-green-400">팀워크</span>
          <span className="text-gray-500 text-2xl ml-3 font-normal">
            Feat. 소통
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-2">소통할때 내가 더 좋아진다.</p>
        <div ref={textRef} className="text-lg">
          부트캠프 수료후에도 좋은 분들과 지속적으로 공부하고 싶어서 디스코드
          모임을 만들고
          <br /> 서로 스터디 파트너로서 협력하며 새로운 최신 개발 트렌드,
          코드리뷰, 개발 관련 스터디 등 다양한 주제를 공유하며 의견을 나누기도
          합니다.
          <br /> 이렇게 소통하면서 실무에서 활용할 수 있는 개발 역량과 협업
          능력을 키워나가고 있습니다.
        </div>
      </div>
    </div>
  );
}
