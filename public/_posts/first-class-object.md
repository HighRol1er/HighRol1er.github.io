---
title: 일급 객체
tags: [JavaScript]
date: 2026-01-27
---

# 일급 객체 First-class citizen

다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 의미한다.

> 즉, **변수처럼 다룰 수 있는 모든 것**

JS에서는 함수가 대표적인 일급 객체!!

## 일급 객체의 핵심 3가지

### 1. 변수나 데이터 구조에 담을 수 있다.

- 함수를 변수에 할당하거나, 배열의 요소 또는 객체의 속성값으로 저장할 수 있어야 한다.

```js
// 함수를 변수에 할당 (함수 표현식)
const sayhi = function () {
  console.log("hihi");
};

// 객체의 속성값으로 저장
const person = {
  talk: function () {
    console.log("안녕!");
  },
};
```

### 2. 함수의 인자로 전달할 수 있다.

- 함수를 다른 일반적인 숫자, 문자열 데이터로 보내는 것처럼 자유롭게 넘길 수 있어야 한다.(Callback function)

```js
const sayhi = function () {
  console.log("hihi");
};

function execute(fn) {
  fn();
}

execute(sayhi);
```

### 3. 함수의 반환값으로 사용할 수 있다.

- 함수의 실행된 결과로 또 다른 함수를 내보낼 수 있어야 한다.

```js
function paw(condition) {
  if (condition) {
    return function (num) {
      return num * 2;
    };
  }
}
```
