
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "안되면 되게 하라",
      desc: "기술적 한계에 부딪혀도 즐겁게 돌파구를 찾아냅니다. 안되는 건 없습니다, 단지 시간이 조금 더 걸릴 뿐.",
      icon: "⚡"
    },
    {
      title: "유쾌한 사용자 경험",
      desc: "버튼 하나에도 즐거움을 담습니다. 사용자가 미소 지을 수 있는 디테일한 인터랙션을 설계합니다.",
      icon: "😄"
    },
    {
      title: "예술적인 코드 구조",
      desc: "내부 구조가 아름다워야 결과물도 아름답습니다. 유쾌한 협업을 위한 깔끔하고 세련된 코드를 지향합니다.",
      icon: "💎"
    }
  ];

  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">MUK's Special Ability</h2>
        <p className="text-zinc-500 font-medium">불가능을 가능케 하는 유쾌한 기술 스택</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
            <div className="text-5xl mb-8 bg-zinc-800 w-20 h-20 flex items-center justify-center rounded-3xl group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:rotate-6">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{f.title}</h3>
            <p className="text-zinc-400 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Witty Banner */}
      <div className="mt-24 relative h-[500px] rounded-[4rem] overflow-hidden border border-zinc-800 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
          alt="Retro Tech" 
          className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-16">
          <div className="inline-block px-4 py-1 bg-emerald-500 text-zinc-950 text-xs font-black rounded-full mb-6 w-fit animate-pulse">MISSION POSSIBLE</div>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
            "불가능은<br/>생각의 오류일 뿐."
          </h3>
          <p className="text-zinc-400 max-w-2xl text-xl leading-relaxed">
            모든 문제는 유쾌한 접근 방식과 끈기 있는 코드로 해결될 수 있습니다. 
            MUKBLOG는 그 과정을 기록하고 공유하며, 안되는 것을 되게 만드는 즐거움을 추구합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
