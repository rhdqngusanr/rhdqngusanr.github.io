# MUKBLOG

> https://rhdqngusanr.github.io

일하면서 겪은 문제와 그걸 어떻게 풀었는지 적어두는 개인 블로그입니다.

## 왜 만들었나

서버가 네 대인 걸 몰라서 며칠을 엉뚱한 데 팠고, 락을 걸었는데 왜 안 걸리냐고 커넥션 풀까지 뜯어봤습니다.
그렇게 밤새 알아낸 것들을 아무 데도 안 적어놨더니, 작년에 뭘 어떻게 고쳤는지가 벌써 가물가물합니다.
머릿속에만 있는 건 세 달이면 증발한다는 걸 알고 나서 만든 블로그입니다.

문장 다듬는 건 AI에게 맡기기도 하지만, 삽질과 판단은 제가 한 것만 씁니다.
자세한 이야기는 사이트 첫 화면의 「이 블로그를 만든 계기」에 있습니다.

## 글 쓰는 법

글은 `data/posts.ts` 배열 하나로 관리합니다. **맨 앞에** 항목을 넣으면 최신 글로 올라갑니다.

```ts
{
  id: 12,
  title: '제목',
  excerpt: '목록에 보일 두세 문장',
  category: '개발기',        // 없던 이름을 쓰면 카테고리가 새로 생긴다
  date: '2026.08.02',
  readingTime: '10분',
  imageUrl: '/images/hero-1.svg',
  content: [
    { type: 'paragraph', text: '...' },
    { type: 'heading', text: '...' },
    { type: 'image', src: '/images/qc-layers.svg', alt: '...', caption: '...' },
  ],
}
```

본문 블록 타입은 `types.ts`의 `PostBlock`에 정의돼 있습니다 — `heading` / `paragraph` / `quote` / `list` / `code` / `image`.
이미지는 `public/images/`에 두고 `/images/...` 경로로 참조합니다. `caption`은 선택이지만 웬만하면 채웁니다. 그림만 던져두면 왜 보여주는지가 안 남습니다.

## 로컬에서 실행

필수 조건: Node.js 20 이상

```bash
git clone https://github.com/rhdqngusanr/rhdqngusanr.github.io.git
cd rhdqngusanr.github.io
npm install
npm run dev
```

`http://localhost:3000` 에서 열립니다. 빌드 결과를 확인하려면:

```bash
npm run build
npm run preview
```

## 배포

`main`에 push하면 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)이 빌드해서 GitHub Pages로 올립니다. 따로 할 일은 없습니다.

## 구조

```
App.tsx              페이지 조립 (Hero → 이 블로그를 만든 계기 → 글 목록)
components/
  Hero.tsx           첫 화면. Spline 3D 배경
  WhyThisBlog.tsx    블로그를 만든 계기
  BlogSection.tsx    글 목록 + 카테고리 필터
  PostReader.tsx     글 본문 뷰어
data/posts.ts        글 전체
types.ts             글/블록 타입
public/images/       글에 쓰는 SVG
```

## 기술 스택

- React 19 + Vite + TypeScript
- Tailwind CSS (CDN)
- GitHub Pages 배포
