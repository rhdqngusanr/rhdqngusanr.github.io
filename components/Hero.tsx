
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const loadingTexts = [
    "상상력을 코드로 번역하는 중...",
    "디자인 한 스푼, 유쾌함 두 스푼...",
    "안되는 건 없다고 세뇌 중...",
    "준비 완료! 이제 즐길 시간."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev < 4 ? prev + 1 : prev));
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950 font-['Inter']">
      {/* 3D Background with Blur Mask */}
      <div className="absolute inset-0 w-full h-full opacity-50 grayscale-[0.2]">
        <iframe 
          src='https://my.spline.design/aiworld-rsFS74b6rqjjwqRuzVLwrBBb/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="3D Background"
          className="scale-125 transition-transform duration-[3s] hover:scale-110"
        ></iframe>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center select-none pointer-events-none">
        {phase < 4 ? (
          /* Witty Loading Sequence */
          <div className="flex flex-col items-center">
            <div className="h-10 overflow-hidden">
              <p className="text-emerald-400 font-mono text-lg tracking-widest animate-pulse">
                {loadingTexts[phase]}
              </p>
            </div>
            <div className="w-64 h-[2px] bg-zinc-800 mt-6 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500 ease-out"
                style={{ width: `${(phase + 1) * 25}%` }}
              ></div>
            </div>
          </div>
        ) : (
          /* Final Reveal: MUKBLOG & Slogan */
          <div className="relative group">
            <h1 className="flex flex-col items-center">
              <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 mb-6">
                <span className="text-8xl md:text-[13rem] font-black text-white tracking-tighter opacity-0 animate-pop-in drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                  MUK
                </span>
                <span className="text-8xl md:text-[13rem] font-black tracking-tighter opacity-0 animate-pop-in-delayed bg-gradient-to-br from-white via-emerald-400 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                  BLOG
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-in-up-delayed">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-3xl shadow-2xl">
                  <span className="text-emerald-400 text-xl md:text-2xl font-bold italic tracking-tight">
                    "코딩에 불가능은 없다,
                  </span>
                  <span className="text-white text-xl md:text-2xl font-black tracking-tight animate-bounce-slow">
                    일단 해보자"
                  </span>
                </div>
                {/*
                  배경이 Spline 3D 씬이라 드래그로 돌릴 수 있는데, 아무 표시가 없으면
                  아무도 안 만져본다. 화살표를 좌우로 흔들어 만질 것이 있다는 걸 알린다.
                */}
                <p className="flex items-center gap-2 text-zinc-500 text-sm font-medium tracking-tight">
                  <svg
                    className="w-4 h-4 animate-nudge"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 7 L4 12 L8 17 M16 7 L20 12 L16 17 M4 12 H20" />
                  </svg>
                  배경을 좌우로 드래그해보세요
                </p>
              </div>
            </h1>
            
            {/* Animated Glow Effect */}
            <div className="absolute -inset-20 bg-emerald-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/40 pointer-events-none"></div>
      {/*
        이 그라디언트가 하단 256px에서 마우스를 먹고 있었다. 배경을 드래그하라고
        안내해놓고 정작 아래쪽에서는 안 돌아가면 안내가 거짓말이 된다.
      */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-20 pointer-events-none"></div>

      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0.5) translateY(100px); opacity: 0; filter: blur(20px); }
          60% { transform: scale(1.1) translateY(-10px); opacity: 1; filter: blur(0); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); text-shadow: 0 10px 20px rgba(16,185,129,0.4); }
        }

        .animate-pop-in {
          animation: pop-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-pop-in-delayed {
          animation: pop-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.15s;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }

        @keyframes nudge {
          0%, 70%, 100% { transform: translateX(0); opacity: .55; }
          35% { transform: translateX(-4px); opacity: 1; }
          52% { transform: translateX(4px); opacity: 1; }
        }

        .animate-nudge {
          animation: nudge 2.6s infinite ease-in-out;
        }

        /* 흔들리는 힌트는 전정기관에 부담을 준다. 끄기로 한 사람에게는 안 움직인다. */
        @media (prefers-reduced-motion: reduce) {
          .animate-nudge,
          .animate-bounce-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
