# MukBlog - AI Powered Personal Space

AI와 기술에 대한 통찰을 공유하는 개인 블로그입니다. React, Vite, TypeScript, Tailwind CSS를 사용하여 구축되었으며, Google Gemini API를 활용한 기능을 포함하고 있습니다.

## 주요 기능

- **모던 UI/UX**: Tailwind CSS를 활용한 세련되고 반응형 디자인
- **AI 통합**: Google Gemini API를 활용한 지능형 기능 (예정/구현 중)
- **블로그 포스팅**: 기술 및 AI 관련 인사이트 공유

## 로컬 실행 방법

**필수 조건:** Node.js (v20 이상 권장)

1. 저장소 클론 및 의존성 설치:
   ```bash
   git clone https://github.com/rhdqngusanr/rhdqngusanr.github.io.git
   cd rhdqngusanr.github.io
   npm install
   ```

2. 환경 변수 설정:
   `.env` 파일을 생성하고 필요한 API 키를 설정하세요 (필요한 경우).
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

4. 빌드 및 미리보기:
   ```bash
   npm run build
   npm run preview
   ```

## 기술 스택

- **Framework**: React, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Deployment**: GitHub Pages
