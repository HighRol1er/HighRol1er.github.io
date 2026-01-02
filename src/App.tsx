import { GridBackground } from './components/GridBackground';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { PostCard } from './components/PostCard';

const samplePosts = [
  {
    title: 'React 19의 새로운 기능들 살펴보기',
    description: 'React 19에서 추가된 use() 훅, 서버 컴포넌트 개선, 그리고 다양한 성능 최적화 기능들을 알아봅니다.',
    date: '2026.01.02',
    tags: ['React', 'Frontend'],
    readTime: '8분',
  },
  {
    title: 'TypeScript 제네릭 완벽 가이드',
    description: '타입스크립트 제네릭의 기초부터 고급 패턴까지, 실무에서 자주 사용하는 패턴들을 정리했습니다.',
    date: '2025.12.28',
    tags: ['TypeScript', 'Tips'],
    readTime: '12분',
  },
  {
    title: 'Zustand vs Redux Toolkit 비교 분석',
    description: '두 상태 관리 라이브러리의 장단점을 비교하고, 프로젝트에 맞는 선택 기준을 제시합니다.',
    date: '2025.12.20',
    tags: ['React', 'State'],
    readTime: '10분',
  },
  {
    title: 'CSS Grid로 복잡한 레이아웃 마스터하기',
    description: 'Grid의 핵심 개념과 실전 예제를 통해 어떤 레이아웃도 구현할 수 있는 능력을 키워봅시다.',
    date: '2025.12.15',
    tags: ['CSS', 'Layout'],
    readTime: '6분',
  },
  {
    title: 'Next.js 15 App Router 마이그레이션 후기',
    description: 'Pages Router에서 App Router로 마이그레이션하면서 겪은 이슈들과 해결 방법을 공유합니다.',
    date: '2025.12.10',
    tags: ['Next.js', '회고'],
    readTime: '15분',
  },
  {
    title: 'GitHub Actions로 CI/CD 파이프라인 구축',
    description: '테스트 자동화부터 배포까지, 효율적인 개발 워크플로우를 구축하는 방법을 알아봅니다.',
    date: '2025.12.05',
    tags: ['DevOps', 'Git'],
    readTime: '9분',
  },
];

function App() {
  return (
    <div className="min-h-screen">
      <GridBackground />
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex gap-12">
          {/* 메인 콘텐츠 */}
          <div className="flex-1 min-w-0">
            <HeroSection />
            
            {/* 최신 포스트 섹션 */}
            <section id="posts" className="mt-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-emerald-500" />
                  최신 포스트
                </h2>
                <a
                  href="#all-posts"
                  className="text-sm text-gray-400 hover:text-violet-400 transition-colors"
                >
                  전체보기 →
                </a>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {samplePosts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            </section>
          </div>
          
          {/* 사이드바 */}
          <Sidebar />
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>© 2026 HighRoller. Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
