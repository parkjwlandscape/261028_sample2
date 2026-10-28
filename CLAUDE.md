# CLAUDE.md — 프로젝트 작업 규칙

조경학과 연구실의 "연구·수업 자료 아카이브 + 대학원생 토론" 사이트. 사용자(교수)는 개발 경험이 거의 없으므로, 작업 후 결과와 다음 할 일을 쉬운 말로 설명한다. UI 문구와 주석은 한국어.

## 기술 스택 (변경 금지)
Vite + React 18 + TypeScript, React Router v6, Tailwind CSS v3, Pretendard(CDN). 상태 관리는 useState/Context만 사용. 라이브러리는 꼭 필요할 때만 추가하고 이유를 설명한다.

## 폴더 구조
```
src/
  pages/      라우트별 페이지 (Home, ResearchList, ResearchDetail, CourseList, ...)
  components/ 공통 UI (Layout, Header, Footer, ResearchCard, LinkList, AsyncView ...)
  services/   ★ 데이터 접근 함수 (getResearchList, getDiscussions, addComment ...)
  context/    AuthContext (현재는 가짜 로그인)
  hooks/      useAsync (services 호출용)
  types/      index.ts — 모든 데이터 타입
  data/       mock.ts — 임시 예시 데이터
```

## 핵심 규칙 1: 데이터는 services를 통해서만
- 페이지/컴포넌트는 `src/data/mock.ts`를 **절대 직접 import하지 않는다.** 항상 `src/services`의 비동기 함수를 호출한다.
- 이유: Firestore 연동 시 `services` 함수 내부만 교체하면 나머지 화면은 수정이 필요 없도록 하기 위함.
- 새 데이터가 필요하면 `types/index.ts`에 타입 → `services/`에 비동기 함수 → 페이지에서 호출 순으로 추가한다.
- 날짜는 ISO 문자열로 다룬다. Firestore Timestamp 변환은 services 안에서 처리한다.

## 핵심 규칙 2: Firebase Spark(무료) 요금제 제약
- **Cloud Storage 사용 금지**, **파일 업로드 기능 금지**. 자료는 외부 링크(Google Drive, 논문 URL)로만 첨부한다.
- **Cloud Functions 및 서버 코드 금지.**
- 사용 가능: Firestore, Authentication(구글 로그인) 정도. 유료 플랜이 필요한 기능은 설계하지 않는다.

## 현재 상태 / 범위
- Firebase 패키지·코드는 아직 없음(다음 단계에서 연동). `.env.example`에 변수 이름만 준비되어 있다.
- `AuthContext`는 가짜 구현: 로그인하면 "테스트 사용자"로 표시됨. 댓글은 새로고침 시 사라진다.
- 범위 제외: 검색, 알림, 관리자 화면, 다크모드.

## 작업 방식
- 컴포넌트는 함수형 + 타입 명시, 파일명 PascalCase. 주석은 "왜"를 중심으로 짧게.
- 접근성(alt, 버튼 라벨, 색 대비)을 유지한다.
- 변경 후 반드시 `npm run build`로 오류 없는지 확인한다.
- 배포: GitHub → Netlify 자동 배포 (`netlify.toml`에 SPA 리다이렉트 설정됨).
