
export type PostBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; code: string }
  // caption 은 선택이지만 웬만하면 넣는다. 그림만 던져두면 왜 보여주는지가 안 남는다.
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readingTime: string;
  content: PostBlock[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}
