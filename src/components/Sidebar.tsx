import { useState } from 'react';

interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'Database', 'REST API'],
  },
  {
    name: 'DevOps',
    items: ['Git', 'Docker', 'CI/CD', 'AWS'],
  },
  {
    name: 'CS 기초',
    items: ['자료구조', '알고리즘', '네트워크', '운영체제'],
  },
  {
    name: '프로젝트',
    items: ['사이드 프로젝트', '회고', '트러블슈팅'],
  },
];

export function Sidebar() {
  const [openCategories, setOpenCategories] = useState<string[]>(['Frontend']);

  const toggleCategory = (name: string) => {
    setOpenCategories(prev =>
      prev.includes(name)
        ? prev.filter(c => c !== name)
        : [...prev, name]
    );
  };

  return (
    <aside className="w-72 shrink-0 hidden lg:block">
      <div className="sticky top-8 p-6 rounded-2xl bg-[#13131a]/80 backdrop-blur-sm border border-white/5">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          카테고리
        </h2>
        
        <nav className="space-y-2">
          {categories.map((category) => (
            <div key={category.name}>
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:bg-violet-400 transition-colors" />
                  {category.name}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openCategories.includes(category.name) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategories.includes(category.name)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-6 py-2 space-y-1">
                  {category.items.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* 태그 섹션 */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">인기 태그</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TS', 'Hook', 'CSS', 'TIL', 'Debug'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

