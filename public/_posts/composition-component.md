---
title: 합성 컴포넌트
tags: [React]
date: 2026-01-28
---

합성 컴포넌트를 사용하면 메모이제이션 훅 없이 렌더링 최적화, 유지보수 등 많은 측면에서 이점을 얻을 수 있다.  
바로 합성 컴포넌트로 넘어가기전에 일반적으로 사용하는 부모-자식 컴포넌트를 보자

# 일반적인 부모-자식 컴포넌트 구조

```jsx
const Parent = () => {
  const [toggle, setToggle] = useState(false);

  console.log("Parent rendered");
  return (
    <>
      <div>Toggle State : {toggle.toString()}</div>
      <button onClick={() => setToggle((p) => !p)}>Switch</button>
      <Child />
    </>
  );
};

const Child = () => {
  console.log("Child rendered");
  return <div>Child</div>;
};

function App() {
  console.log("App rendered");
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
```

`Parent`컴포넌트 안에 `Child`를 두게되면 리액트의 렌더링 조건에 의해 엄한 `Child`컴포넌트까지 불필요하게 렌더링을 하게 된다.

> [!info]
> 리액트의 렌더링 트리거 4가지<br/>
> 1 state가 변경될 때<br/>
> 2 props가 변경될 때<br/>
> 3 부모 컴포넌트의 state가 변경될 때<br/>
> 4 key값이 변경될 때

## 메모이제이션

불필요한 렌더링을 막기 위해선 리액트의 `memo`메모이제이션 기능을 활용할 수 있다.

```jsx
const Child = memo(() => {
  console.log("Child rendered");
  return <div>Child</div>;
});
```

### 모든것은 등가교환이다.

하지만 여기에는 오버헤드가 존재하는데 공식문서에서도 나와있듯  
`memo`의 두번째 인자로 `arePropsEqual`를 받을 수 있는데 이는 우리가 직접 비교로직을 제공하지 않으면  
리액트는 비교를 위해 `shallowEqual`비교 알고리즘을 자동으로 수행한다.

비교 알고리즘은 다음과 같다.

```js
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      // $FlowFixMe[incompatible-use] lost refinement of `objB`
      !is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
}
```

이런 패널티를 받지 않고도 리렌더링을 막을 수 있는 방법이 있는데 그 방법이 이제 리액트의 <span style="color:orange">합성</span>을 이용하는 것이다.

# 합성을 사용한 리팩토링

```js
const Parent = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  console.log("Parent rendered");
  return (
    <>
      <div>Toggle State : {toggle.toString()}</div>
      <button onClick={() => setToggle((p) => !p)}>Switch</button>
      {children}
    </>
  );
};

const Child = () => {
  console.log("Child rendered");
  return <div>Child</div>;
};

function App() {
  console.log("App rendered");
  return (
    <>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}

export default App;
```

정말 쉽게 기존 `<Child />` 자리에 `{children}` props를 위한 자리를 뚫어주고  
`<Parent>`안에 `Child`컴포넌트를 넣어주면 된다.

이렇게 설계를 진행하게 되면 `App` 함수 실행 시점에 `<Child />`가 React Element로 평가되기 때문에  
Parent와 Child는 서로 다른 실행 컨텍스트(스코프)에서 실행된다.

부모 컴포넌트가 단순히 자식을 렌더링하는 Wrapper역할만 한다면
직접 자식 컴포넌트를 호출하지 말고 `children` props를 통한 합성을 사용하자.
