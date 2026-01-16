
import React from 'react';
import { BlogPost } from '../types';

const BlogSection: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "React와 Three.js로 만드는 3D 웹 환경",
      excerpt: "웹 브라우저에서 환상적인 3D 경험을 제공하기 위한 최신 기법들을 알아봅니다.",
      category: "Tech",
      date: "2024.03.15",
      imageUrl: "https://picsum.photos/seed/blog1/400/250"
    },
    {
      id: 2,
      title: "Generative AI가 바꾸는 개발자의 미래",
      excerpt: "Gemini와 GPT-4o 등 대형 언어 모델이 개발 워크플로우를 어떻게 혁신하고 있는지 분석합니다.",
      category: "AI",
      date: "2024.03.10",
      imageUrl: "https://picsum.photos/seed/blog2/400/250"
    },
    {
      id: 3,
      title: "디자인 시스템 구축의 정석",
      excerpt: "Tailwind CSS를 활용하여 확장 가능하고 일관된 UI 컴포넌트를 설계하는 방법.",
      category: "Design",
      date: "2024.03.05",
      imageUrl: "https://picsum.photos/seed/blog3/400/250"
    },
    {
      id: 4,
      title: "프론트엔드 성능 최적화 가이드",
      excerpt: "Lighthouse 점수를 높이기 위한 핵심 전략들과 실제 적용 사례를 공유합니다.",
      category: "Performance",
      date: "2024.03.01",
      imageUrl: "https://picsum.photos/seed/blog4/400/250"
    }
  ];

  return (
    <div className="py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Latest Insights</h2>
          <p className="text-zinc-400">기술적 고찰과 창의적인 발견의 기록</p>
        </div>
        <button className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-2">
          모든 글 보기
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-zinc-800">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-zinc-800">
                  {post.category}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-zinc-400 text-sm line-clamp-2 mb-3 leading-relaxed">
              {post.excerpt}
            </p>
            <span className="text-xs text-zinc-500 font-medium uppercase">{post.date}</span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
