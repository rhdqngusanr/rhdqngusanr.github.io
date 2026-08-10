import { BlogPost } from '../../types';

import { interior01 } from './interior-01-ai-memory';
import { interior02 } from './interior-02-spec';
import { interior03 } from './interior-03-rules';
import { interior04 } from './interior-04-qc';
import { interior05 } from './interior-05-deploy';
import { parking01 } from './parking-01-one-system';

// 글 하나가 파일 하나다. 새 글을 쓰면 파일을 만들고 여기 import 해서 아래 배열에 넣는다.
// 순서는 신경 쓰지 않아도 된다 - 아래에서 id 내림차순으로 정렬한다.
const allPosts: BlogPost[] = [
  interior01,
  interior02,
  interior03,
  interior04,
  interior05,
  parking01,
];

// id가 곧 작성 순서다. 최신 글이 위로 온다.
export const posts: BlogPost[] = [...allPosts].sort((a, b) => b.id - a.id);

export const getPostById = (id: number): BlogPost | undefined =>
  posts.find((post) => post.id === id);

export const getPostsByCategory = (category: string): BlogPost[] =>
  posts.filter((post) => post.category === category);
