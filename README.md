# webpack-react-enterprise

### 🚀 개요 
"webpack-react-enterprise"는 웹팩(Webpack)을 사용하여 React 어플리케이션을 구축하기 위한 저장소입니다. 
Create React App 혹은 Vite과 같은 번들러를 사용하면 생산성을 크게 향상시켜 주지만 
Webpack을 직접 설정하고 Babel, TypeScript 등 필요한 도구들을 직접 설치하며 프로젝트를 구성하며 
코드 스플리팅, 번들 최적화 등 웹팩을 직접 다루고 그 동작 원리와 설정 방법에 대한 이해도를 높일 수 있는 것을 목표로 합니다
이를 통해 React 프로젝트에 필요한 모든 요소를 완전히 제어하면서, 더 많은 유연성과 커스터마이징 가능성을 제공합니다.


### 🎯 목표
1. 웹팩을 사용하여 직접 React 어플리케이션을 구축하는 방법을 이해하고 익히기
2. 필요한 모든 요소를 갖춘 React 애플리케이션 개발하기 
3. 웹팩 설정, Babel, TypeScript 등의 도구를 직접 설치하고 설정하여 프로젝트의 커스터마이징 가능성 확보하기 
4. enterprise 수준의 프로젝트에 필요한 기능과 구조 구현하기 

### 🔍 Features

react18
tailwind와 emotion 모두 가능 
tailwind 기반의 chakra UI 
eslint, prettier 환경
typescript 
jest, testing-library
storybook
MSW
라우팅 (react-router)
상태관리 (recoil, react-query)
그외의 유틸 라이브러리 

i18n
인증
웹팩 번들분석
Commitizen (커밋메시지 작성 규칙 및 템플릿 )
Husky
github-action
Lighthouse 확인 
SEO (helmet)
google analytics
통합테스트, e2e테스트 
서버 필요한가? 
배포하기 vercel 원클릭 (환경변수 확인)

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

브라우저에서 `http://localhost:3000`을 열어 프로젝트를 확인하세요

### 💡 스크립트 

`package.json`에서 다음과 같은 스크립트들이 사용이 가능합니다 

- `dev`: 개발 서버 시작
- `build`: production을 위한 어플리케이션 빌드 
- `start`: production 서버 시작 
- `storybook`: Storybook 서버 시작
- `build-storybook`: Storybook 서버 빌드 
- `test`: 단위 테스트 실행 


### 📃 프로젝트 구조
```sh
├── README.md                       # README file
├── .github                         # GitHub folder
├── .storybook                      # Storybook folder
```

### 🌐 i18n

### 📢 express 

### 📝 commitizen

### ⚙️ 환경 변수

### 🎲 MSW 

### 📖 Storybook 

### 🧪 테스트

- **단위 테스트 및 통합테스트**: `yarn test`을 통한 Jest 테스트 실행 
- **End-to-end tests**: 





### 💻 배포 

