
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '안녕하세요! MUKBLOG의 AI 비서입니다. 무엇을 도와드릴까요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiChatResponse(
      messages.map(m => ({ role: m.role, content: m.content })),
      userMsg
    );

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="py-20 bg-zinc-900/20 rounded-[3rem] border border-zinc-800 p-8 md:p-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Talk to MUK AI</h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            MUKBLOG의 프로젝트, 블로그 내용, 혹은 최신 기술 트렌드에 대해 질문해보세요. 
            Google Gemini 기반의 AI가 실시간으로 답변해드립니다.
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400 border border-zinc-700">#Gemini_3_Flash</span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400 border border-zinc-700">#Korean_Support</span>
          </div>
        </div>

        <div className="w-full md:w-[450px] bg-zinc-950 rounded-2xl border border-zinc-800 h-[500px] flex flex-col shadow-2xl">
          <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="font-bold text-sm">MUK Assistant</span>
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Online</span>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 text-sm"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  m.role === 'user' 
                    ? 'bg-emerald-500 text-zinc-950 font-medium rounded-tr-none' 
                    : 'bg-zinc-800 text-slate-200 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none animate-pulse text-zinc-500">
                  생각 중...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-800 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="메시지를 입력하세요..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 w-10 h-10 rounded-xl flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;
