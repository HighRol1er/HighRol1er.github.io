---
title: HoC 패턴 - 고차 컴포넌트
tags: [React, Design-Pattern]
date: 2026-02-01
---

> [!warning]
> 고차 컴포넌트는 <span style="color:orange">**일급 객체, 클로저**</span> 개념과 긴밀히 연관되어 있습니다.\
> 고차 컴포넌트는 최신 React 코드에서는 흔히 사용되지 않습니다.

# Higher Order Component

고차 컴포넌트란 다른 컴포넌트를 파라미터로 받는 컴포넌트를 뜻한다.  
HoC는 파라미터로 받은 컴포넌트에 추가되길 원하는 로직을 적용시키고 해당 로직이 적용된 컴포넌트를 반환한다.

여러 컴포넌트에서 <span style="color:orange">**동일한 로직, 스타일링, 권한 요청**</span>등을 사용하는 경우가 생기는데\
이때 여러 컴포넌트에서 재사용하는 방법으로 고차 컴포넌트 패턴을 활용하는 방법이 있다.

# e.g 일관된 스타일링 적용

> [!info]
> 공통 스타일링을 주기 위한 용도로는 더 좋은 방법들이 많습니다.\
> 아래 예시는 HoC를 설명하기 위한 참고용입니다.

예를 들어 아래와 같은 컴포넌트가 있으며 해당 컴포넌트에 동일한 초록색 배경을 적용시키고 싶다고 해보자.

```jsx
const MyInput = () => {
  const [text, setText] = useState("");

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const MyButton = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((p) => p + 1)}>{count}</button>;
};
```

HoC를 사용해 동일한 스타일링을 입히는 컴포넌트를 만들 수 있다. (TailwindCSS 사용)

```jsx

const MyInput = (props) => {
  const [text, setText] = useState("");

  return <input value={text} onChange={(e) => setText(e.target.value)} {...props} />;
};

const MyButton = (props) => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((p) => p + 1) {...props}}>{count}</button>;
};

function commonStyles(Component) {
  return (props) => {
    return <Component className="bg-green-300" {...props} />;
  };
}

const StyledInput = commonStyles(MyInput);
const StyledButton = commonStyles(MyButton);

function App() {
  const styledInput = commonStyles(MyInput);
  const styledButton = commonStyles(MyButton);

  return (
    <div className="flex gap-2">
      <StyledInput />
      <StyledButton />
    </div>
  );
}
```

# e.g Authorization(인증/인가)

위 예제보다 더욱 대표적으로 쓰이는 예시 중 하나는 인증/인가 이다. (지금은 레거시 코드겠지만..)

```jsx
function withAdminAuth(Component) {
  return (props) => {
    const { isAdmin } = useAuth();

    if (!isAdmin) {
      return <div>관리자만 이용 가능합니다.</div>;
    }

    return <Component {...props} />;
  };
}
```

하지만 위와 같은 인증/인가도 요즘에는 Vite(CSR)환경에서는 `ProctedRoute`, Next.js에서는 `middleware`로 충분히 처리가 가능하다.

> HoC를 써야 할 상황이 온다면 충분히 다른 방법을 활용해서 풀어나갈 수 있음을 생각하자!

# 복잡한 HoC 정말 써야 할까?

기본적으로 HoC는 복잡하다 HoC가 하나가 아닌 삼중이라고 생각해보자\
`withAuth(withStyles(withConnect(MyComponent)))`처럼 수많은 HoC를 가지게 될 경우 또 다른 Wrapper Hell 패턴이 생성되는 것이다.

## 그리고 TypeScript

내가 써본 결과로는 정말 TS로 사용하기가 힘들었다.\
각 상위 계층에서 `props`로 내려주기 때문에 타입 유추가 너무 힘들었다.\
`ElementType`, `ComponentPropsWithoutRef`과 같은 타입을 사용해서 컴포넌트가 받아야 할 `props`와 HoC가 주입해주는 `prop` 사이를 계산해야 했다.

> react-markdown 사용할 때 죽는 줄 알았습니다..

반대로 Hook을 사용하면 반환값이 명확해 <span style="color:orange">**타입 추론**</span>이 정말 쉬워진다!

## 최후의 보루가 아닐까?

HoC패턴은 컴포넌트를 감싸 새로운 기능을 덧붙힌 컴포넌트를 만들어주는 좋은 방법론 이였지만\
현대 리액트에서는 더 직관적인 관심사 분리 방법이 있고 타입 추론의 불확실성과 Wrapper Hell로 인한 유지보수성 저하 때문에 안티패턴에 가깝다고 생각한다.

또한 HoC 패턴을 사용할 일은 레거시 React 환경과의 다리 역할을 수행할 때라고 생각한다.\
Hook 없던 시절 설계된 라이브러리 또는 레거시 코드와의 호환성을 유지해야하는 상황이라면 HoC 패턴은 빛을 발하리라 본다.
