
import React from 'react';
import { BlogPost } from '../types';

const BlogSection: React.FC = () => {
  const posts: BlogPost[] = [];

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
        {posts.length > 0 ? (
          posts.map((post) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-zinc-500">
            <p>아직 작성된 글이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
