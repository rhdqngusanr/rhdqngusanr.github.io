
import React, { useEffect } from 'react';
import { BlogPost } from '../types';

interface PostReaderProps {
  post: BlogPost;
  onClose: () => void;
}

const PostReader: React.FC<PostReaderProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    // 뒤쪽 본문이 같이 스크롤되지 않게 잠근다
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl overflow-y-auto">
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            닫기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-32">
        <header className="pt-16 pb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{post.readingTime} 읽기</span>
          </div>
        </header>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-16 border border-zinc-800">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-7">
          {post.content.map((block, i) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-bold text-white pt-10 tracking-tight">
                    {block.text}
                  </h2>
                );
              case 'quote':
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-emerald-500 pl-6 py-2 my-10 text-xl md:text-2xl text-emerald-50 font-medium italic leading-relaxed"
                  >
                    {block.text}
                  </blockquote>
                );
              case 'list':
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-zinc-300 leading-relaxed">
                        <span className="text-emerald-500 mt-[2px] shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'code':
                return (
                  <pre
                    key={i}
                    className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 overflow-x-auto text-sm text-zinc-300 font-mono leading-relaxed"
                  >
                    <code>{block.code}</code>
                  </pre>
                );
              case 'image':
                return (
                  <figure key={i} className="my-10">
                    <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/70">
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        className="w-full h-auto block"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-3 text-sm text-zinc-500 leading-relaxed">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              default:
                return (
                  <p key={i} className="text-zinc-300 text-[17px] leading-[1.9]">
                    {block.text}
                  </p>
                );
            }
          })}
        </div>

        <footer className="mt-24 pt-10 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            목록으로 돌아가기
          </button>
        </footer>
      </article>
    </div>
  );
};

export default PostReader;
