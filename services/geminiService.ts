
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiChatResponse = async (history: { role: string; content: string }[], message: string) => {
  if (!API_KEY) {
    return "API_KEY가 설정되지 않았습니다.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `당신은 'MUKBLOG'의 주인인 'MUK'의 AI 비서입니다. 
        사용자의 질문에 친절하고 전문적으로 답해주세요. 
        당신은 기술, 코딩, 3D 디자인, AI에 관심이 많은 열정적인 개발자의 가상 페르소나입니다. 
        한국어로 대답하세요.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "죄송합니다. 응답을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI와 연결하는 중 오류가 발생했습니다. 나중에 다시 시도해주세요.";
  }
};
