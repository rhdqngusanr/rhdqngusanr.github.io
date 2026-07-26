
import React, { useMemo, useState } from 'react';
import { BlogPost } from '../types';
import { posts } from '../data/posts';
import PostReader from './PostReader';

const BlogSection: React.FC = () => {
  const [openPost, setOpenPost] = useState<BlogPost | null>(null);
  // null 이면 전체. 카테고리 이름을 그대로 상태로 쓴다.
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // 카테고리 목록은 글에서 뽑는다. 여기에 하드코딩하면 새 카테고리를 넣을 때마다
  // 두 군데를 고쳐야 하고, 두 군데가 되는 순간 한쪽은 반드시 낡는다.
  const categories = useMemo(() => {
    const count = new Map<string, number>();
    for (const post of posts) count.set(post.category, (count.get(post.category) ?? 0) + 1);
    return [...count.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const visible = useMemo(
    () => (activeCategory ? posts.filter((p) => p.category === activeCategory) : posts),
    [activeCategory],
  );

  const [featured, ...rest] = visible;

  return (
    <div className="py-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Latest Insights</h2>
          <p className="text-zinc-400">기술적 고찰과 창의적인 발견의 기록</p>
        </div>
        {/* 아카이브가 쌓이기 전까지는 눌러도 갈 곳이 없어 감춰둔다 */}
        {posts.length > 3 && (
          <button className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-2">
            모든 글 보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* 카테고리 칩. 목록이 글에서 나오므로 새 카테고리를 쓰면 여기 저절로 생긴다. */}
      {posts.length > 0 && (
        <nav aria-label="카테고리" className="flex flex-wrap gap-2 mb-12">
          <CategoryChip
            label="전체"
            count={posts.length}
            active={activeCategory === null}
            onClick={() => setActiveCategory(null)}
          />
          {categories.map(([name, count]) => (
            <CategoryChip
              key={name}
              label={name}
              count={count}
              active={activeCategory === name}
              onClick={() => setActiveCategory(name)}
            />
          ))}
        </nav>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-10 text-zinc-500">
          <p>아직 작성된 글이 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <article
            onClick={() => setOpenPost(featured)}
            className="group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-zinc-800">
                  {featured.category}
                </span>
              </div>
            </div>
            <div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                {activeCategory ? `${activeCategory} 최신 글` : '최신 글'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-4 group-hover:text-emerald-400 transition-colors leading-snug">
                {featured.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-zinc-500 font-medium uppercase">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span>{featured.readingTime} 읽기</span>
              </div>
            </div>
          </article>

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {rest.map((post) => (
                <article key={post.id} onClick={() => setOpenPost(post)} className="group cursor-pointer">
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
          )}
        </div>
      )}

      {openPost && <PostReader post={openPost} onClose={() => setOpenPost(null)} />}
    </div>
  );
};

const CategoryChip: React.FC<{
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}> = ({ label, count, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
      active
        ? 'bg-emerald-500 text-zinc-950 border-emerald-500'
        : 'bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
    }`}
  >
    {label}
    {/* 개수를 같이 보여준다. 눌러보기 전에 몇 편인지 알 수 있어야 한다. */}
    <span className={`ml-2 text-xs ${active ? 'text-zinc-950/60' : 'text-zinc-600'}`}>{count}</span>
  </button>
);

export default BlogSection;
