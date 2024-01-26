# webpack-react-enterprise

### 🚀 개요 
"webpack-react-enterprise"는 웹팩(Webpack)을 사용하여 React 어플리케이션을 구축하기 위한 저장소입니다.

Create React App 혹은 Vite과 같은 번들러를 사용하면 생산성을 크게 향상시켜 주지만 Webpack을 직접 설정하고 Babel, TypeScript 등 필요한 도구들을 직접 설치하며 프로젝트를 구성하며 코드 스플리팅, 번들 최적화 등 웹팩을 직접 다루고 그 동작 원리와 설정 방법에 대한 이해도를 높일 수 있는 것을 목표로 합니다. 이를 통해 React 프로젝트에 필요한 모든 요소를 완전히 제어하면서, 더 많은 유연성과 커스터마이징 가능성을 제공합니다.


### 🎯 목표
1. 웹팩을 사용하여 직접 React 어플리케이션을 구축하는 방법을 이해하고 익히기
2. 필요한 모든 요소를 갖춘 React 애플리케이션 개발하기 
3. 웹팩 설정, Babel, TypeScript 등의 도구를 직접 설치하고 설정하여 프로젝트의 커스터마이징 가능성 확보하기 
4. enterprise 수준의 프로젝트에 필요한 기능과 구조 구현하기 

### 🔍 Features

- **React**: UI 라이브러리 
- **Typescript**: 타입 안전성과 개발 생산성 향상
- **Tailwind**와 **Emotion** 모두 가능한 유연한 스타일링 지원  
- **Emotion** 기반의 **Chakra-UI** 컴포넌트 제공 
- **Eslint**, **Prettier**: 일관된 코드 스타일 유지
- **Jest, Testing Library**: 유닛 테스트와 통합 테스트
- **Cypress**: E2E 테스트 
- **Storybook**: 컴포넌트 단위의 문서화 환경 제공  
- **MSW**: 브라우저 API모킹 및 테스트 강화 
- **Recoil**과 **React Query**를 통한 상태 관리
- **Zod**: 데이터 유효성 검사 
- **react-hook-form**: 강력한 form 관리 
- **i18next**: 다국어 지원 
- **react-oauth**: 구글 소셜로그인 지원  
- **Commitizen**: 일관된 커밋 메시지 관리
- **react-helmet**: 메타데이터를 동적으로 관리
- **Express**: 빌드된 어플리케이션 호스팅용 웹서버 제공
---

- **MongoDB**: 문서 지향적 NoSQL 데이터베이스
- **Husky**: Git 훅을 이용한 커밋 규칙 강제
- **GitHub Actions**: 자동화된 CI/CD 파이프라인 구축
- **Google Analytics**: 웹사이트 트래픽 및 사용자 행동 분석
- **Vercel**: 원클릭 배포 지원


### 🎉 시작하기

저장소 복제 및 패키지 의존성 설치 
```shell
git clone --depth=1 https://github.com/Heonys/webpack-react-enterprise.git my-project-name
cd my-project-name
yarn install
```

개발 모드에서 시작

```shell
yarn dev
```

브라우저에서 `http://localhost:3000`을 열어 확인하세요

### 💡 스크립트 

`package.json`에서 다음과 같은 스크립트들이 사용이 가능합니다 

- `dev`: webpack 개발 서버 실행 
- `build`: 리액트 어플리케이션 빌드 
- `serve`: 빌드이후 production 환경에서 실행
- `storybook`: Storybook 서버 시작
- `build-storybook`: Storybook 서버 빌드 
- `commit`: commitizen으로 git commit
- `test`: 테스트 실행 
- `coverage`: 테스트 커버리지 확인
- `e2e`: Cypress 실행 





### 📃 프로젝트 구조
```sh
├── README.md                       # README file
├── .github                         # GitHub folder
├── .storybook                      # Storybook folder
대기 
```

### 🌐 i18n

### 📢 express 

### 📝 commitizen

### ⚙️ 환경 변수

### 🎲 MSW 

### 📖 Storybook 

### 🧪 테스트

- **단위 테스트 및 통합테스트**: `yarn test`을 통한 Jest 테스트 실행 
- **End-to-end tests**: `yarn e2e`을 통한 Cypress에서 테스트 실행 

### 💻 배포 

