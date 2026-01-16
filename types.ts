
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
