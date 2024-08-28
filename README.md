## TypeScript React App
예시용으로 제작된 기초적인 React 애플리케이션입니다.

### 설치
패키지 매니저는 yarn을 사용합니다.
```shell
# 저장소를 클론합니다.
git clone https://github.com/findawayer/typescript-react-app.git

# 패키지 매니저 yarn을 설치하고, 버전을 확인합니다.
npm install -g yarn
yarn --version

# 만약 yarn이 4.4.1보다 하위 버전이라면, 업그레이드를 실행합니다.
yarn set version stable

# 프로젝트에 연결된 디펜던시를 설치합니다.
yarn install
```

### 스크립트
개발자 환경을 위해 다음과 같은 스크립트를 제공합니다.

* `yarn build`: 프로젝트를 컴파일합니다. 배포 이전에 반드시 실행해야 합니다.
* `yarn preview`: 컴파일한 애플리케이션을 로컬 서버에서 구동합니다.
* `yarn watch`: 프로젝트를 편집하고, 그 내용을 로컬 서버에 실시간 반영(hot reload)합니다.

### 레퍼런스
* [Feature Sliced Design](https://feature-sliced.design/) (프로젝트 경로 구성)
* [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview) (라우터)
* [TailwindCSS](https://tailwindcss.com/docs/installation) (스타일링)
