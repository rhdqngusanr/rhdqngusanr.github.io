
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
          <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center font-bold text-zinc-950 text-xs">M</div>
          <span className="text-lg font-bold tracking-tighter text-white">MUKBLOG</span>
        </div>
        <p className="mt-4 text-[10px] text-zinc-600 uppercase tracking-[0.2em]">© 2024 Built by MUK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
