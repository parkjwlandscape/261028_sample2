# 생태조경 연구실 웹사이트

연구 자료와 수업 자료를 모아 두고, 대학원생과 연구 결과를 토론하는 웹사이트입니다.
**지금은 예시(mock) 데이터로 동작하는 첫 번째 버전**이며, 로그인·댓글은 가짜입니다(새로고침하면 사라집니다).

## 1. 내 컴퓨터에서 실행해 보기

1. [Node.js](https://nodejs.org) LTS 버전을 설치합니다. (한 번만)
2. 이 폴더에서 터미널을 열고 아래를 차례로 입력합니다.

```bash
npm install
```

```bash
npm run dev
```

3. 터미널에 나온 주소(보통 `http://localhost:5173`)를 브라우저에 붙여 넣으면 사이트가 보입니다.
4. 종료는 터미널에서 `Ctrl + C`.

배포용 파일이 잘 만들어지는지 확인하려면 `npm run build`를 실행하세요. 오류 없이 끝나면 정상입니다.

## 2. GitHub에 올리기

1. [github.com](https://github.com)에 로그인 → 오른쪽 위 `+` → **New repository** → 이름을 정하고 **Create repository**.
2. 만들어진 저장소 화면의 안내에 따라 이 폴더의 코드를 올립니다. (이미 이 프로젝트가 저장소에 연결되어 있다면 이 단계는 건너뛰세요.)

```bash
git add .
git commit -m "첫 버전"
git push
```

> `node_modules`, `dist`, `.env`는 `.gitignore`에 들어 있어 올라가지 않습니다. (정상입니다)

## 3. Netlify로 배포하기

1. [netlify.com](https://www.netlify.com)에 GitHub 계정으로 로그인합니다.
2. **Add new site → Import from Git** 를 누르고 GitHub를 선택한 뒤, 위에서 올린 저장소를 고릅니다.
3. 설정값을 확인합니다. (`netlify.toml`이 있어 자동으로 채워집니다)
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy site**를 누르면 몇 분 뒤 주소가 생깁니다. 이후 GitHub에 코드를 올릴 때마다 자동으로 다시 배포됩니다.

## 4. 내용 바꾸기

지금 보이는 글·구성원은 `src/data/mock.ts`의 예시입니다. 실제 내용은 다음 단계(Firebase 연동)에서 사이트 안에서 입력하도록 바꿀 예정입니다.

## 5. 다음 단계

Firebase(무료 Spark 요금제)의 Firestore와 구글 로그인을 연결합니다. 자세한 개발 규칙은 `CLAUDE.md`를 참고하세요.
