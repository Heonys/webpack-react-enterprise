# webpack-react-enterprise

### 🚀 개요 
"webpack-react-enterprise"는 웹팩을 사용하여 React 어플리케이션을 구축하기 위한 저장소입니다. Create React App 혹은 Vite과 같은 번들러를 사용하면 생산성을 크게 향상시켜 주지만 Webpack을 직접 설정하고 Babel, TypeScript 등 필요한 도구들을 직접 설치하며 프로젝트를 구성하며 코드 스플리팅, 번들 최적화 등 웹팩을 직접 다루고 그 동작 원리와 설정 방법에 대한 이해도를 높일 수 있는 것을 목표로 합니다. 이를 통해 React 프로젝트에 필요한 모든 요소를 완전히 제어하면서, 더 많은 유연성과 커스터마이징 가능성을 제공합니다.


### 🎯 목표
1. 웹팩을 사용하여 직접 React 어플리케이션을 구축하는 방법을 이해하고 익히기
2. 필요한 모든 요소를 갖춘 React 애플리케이션 개발하기 
3. 웹팩 설정, Babel, TypeScript 등의 도구를 직접 설치하고 설정하여 프로젝트의 커스터마이징 가능성 확보하기 
4. enterprise 수준의 프로젝트에 필요한 기능과 구조 구현하기 

### 🔍 Features

- **[React](https://ko.legacy.reactjs.org/)**: UI 라이브러리 
- **[Typescript](https://www.typescriptlang.org/)**: 타입 안전성과 개발 생산성 향상
- **[Tailwind](https://tailwindcss.com/), [Emotion](https://emotion.sh/docs/introduction)** 모두 가능한 유연한 스타일링 지원  
- Emotion 기반의 **[Chakra-UI](https://chakra-ui.com/)** 컴포넌트 제공 
- **[Eslint](https://eslint.org/)** 와 **[Prettier](https://prettier.io/)**: 일관된 코드 스타일 유지
- **[Jest](https://jestjs.io/)**, **[Testing Library](https://testing-library.com/)**: 유닛 테스트와 통합 테스트
- **[Cypress](https://www.cypress.io/)**: E2E 테스트 
- **[Storybook](https://storybook.js.org/)**: 컴포넌트 단위의 문서화 환경 제공  
- **[MSW](https://mswjs.io/)**: 브라우저 API모킹 및 테스트 강화 
- **[Recoil](https://recoiljs.org/ko/)** 과 **[React Query](https://tanstack.com/)** 를 통한 상태 관리
- **[Zod](https://zod.dev/)**: 데이터 유효성 검사 
- **[react-hook-form](https://react-hook-form.com/)**: 강력한 form 관리 
- **[i18next](https://www.i18next.com/)**: 다국어 지원 
- **[react-oauth](https://github.com/MomenSherif/react-oauth)**: 구글 소셜로그인 지원  
- **[Commitizen](https://github.com/commitizen/cz-cli)**: 일관된 커밋 메시지 관리
- **[react-helmet](https://github.com/nfl/react-helmet)**: 메타데이터를 동적으로 관리
- **[Husky](https://typicode.github.io/husky/)**, **[lint-staged](https://github.com/lint-staged/lint-staged)**: Git 훅을 이용한 커밋 규칙 강제
- **[Express](https://expressjs.com/)**: 빌드된 어플리케이션 호스팅용 웹서버 제공


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

### 📃 스크립트 

`package.json`에서 다음과 같은 스크립트들이 사용이 가능합니다 

- `dev`: webpack 개발 서버 실행 
- `build`: 리액트 어플리케이션 빌드 
- `serve`: 빌드이후 production 환경에서 실행
- `storybook`: storybook 서버 시작
- `build:storybook`: storybook 서버 빌드 
- `commit`: commitizen으로 git commit
- `test`: 테스트 실행 
- `test:coverage`: 테스트 커버리지 확인
- `test:e2e`: cypress 실행 
- `prepare`: 패키지 설치시 husky가 자동으로 Git 훅을 설치
- `check-types`: tsc로 타입체크 


### 🛠️ 프로젝트 구조
```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .storybook                      # Storybook configuration
├── .yarn                           # Yarn package manager settings
├── cypress                         # Cypress E2E test
├── server                          # Express server folder 
├── public                          # Public assets folder
├── src
│   ├── api                         # HTTP request 
│   ├── atom                        # Recoil state management
│   ├── components                  # React components
│   ├── context                     # React context
│   ├── hook                        # Custom hooks
│   ├── i18n                        # i18next configuration
│   ├── mocks                       # MSW configuration
│   ├── pages                       # Page component
│   ├── routes                      # React routing 
│   ├── stories                     # Storybook story 
│   ├── test                        # Unit & Integration test
│   ├── types                       # Type definitions
│   └── util                        # Utility function
```

### 🌐 i18n

### 📢 express 

### 📝 commitizen

### ⚙️ 환경 변수

### 🎲 MSW 

### 📖 Storybook 

### 🧪 테스트

- **단위 테스트 및 통합테스트**: `yarn test`을 통한 Jest 실행 
- **End-to-end tests**: `yarn e2e`을 통한 Cypress 실행 
