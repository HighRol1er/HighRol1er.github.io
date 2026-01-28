---
title: 실행 컨텍스트 그리고 호이스팅과 클로저까지
tags: [JavaScript]
date: 2026-01-27
---

실행 컨텍스트는 JavaScript의 동작 원리를 담고 있는 핵심 개념입니다.  
실행 컨텍스트를 바르게 이해하면 다음과 같은 핵심 원리를 이해할 수 있습니다.

- 식별자와 식별자에 대한 바인딩 된 값(식별자)을 관리하는 방식
- 호이스팅 발생 이유
- 클로저의 동작 방식
- 테스크 큐와 함께 동작하는 이벤트 핸들러
- 비동기 처리의 동작 방식<br/>

즉, 실행 컨텍스트는 JS엔진의 전용 작업대이며 코드가 실행되는데 필요한 모든 정보를 모아놓은 곳 입니다.

# 소스코드의 평가와 실행

모든 소스코드는 실행전에 평가 과정을 거치며 실행을 위한 준비를 하는데  
이때 자바스크립트는 <span style="color:skyblue">"소스코드의 평가" → "소스코드의 실행"</span> 과정으로 나누어 처리합니다.

## 평가 과정

![exe-context](execution-context/exe-context1.webp)

실행 컨텍스트가 생성되면 1차적으로 전역 렉시컬 환경이 만들어지고
이 때 변수, 함수 식별자를 해당 환경 레코드에 등록합니다.

> [!info]
> 렉시컬 환경은 "환경 레코드" + "외부 렉시컬 환경 참조"로 구성됩니다.

## 실행 과정 (런타임)

소스코드 평가 과정이 끝나면 선언문을 제외한 코드가 순차적으로 실행된다. (런타임의 시작)  
이때 코드 실행에 필요한 정보는 실행 컨텍스트가 관리하는 스코프(렉시컬 환경의 환경 레코드)에서 검색해서 취득한다.

![exe-context1](execution-context/execution-context1.webp)

## 예제

```js
var x; // 평가: 환경 레코드에 등록 + undefined로 초기화
x = 1; // 실행 : 엇 "x = 1"이래 할당해야쥐~
```

`var x;` 선언문은 평가 과정에서 식별자 `x`가 환경 레코드에 등록되고 `undefined`로 초기화됨으로써 처리가 완료됩니다. 따라서 실행 과정에서는 할당문 `x = 1;`만 수행됩니다.

# 실행 컨텍스트 스택

```js
const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}

foo();
```

위 코드를 실행하면 다음과 같은 흐름에 따라 실행 컨텍스트 스택에 추가되고 제거된다.

![exe-context1](execution-context/execution-context2.webp)

이처럼 실행 컨텍스트 스택은 코드의 실행 순서를 관리한다.  
스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드의 실행 컨텍스트이다.

# 렉시컬 환경

> [!info]
> Lexical: 선언 위치에 따라 변수/함수의 유효 범위가 결정되는 특성<br/>
> 이를 렉시컬 스코프라고도 하며 아래 Closure 개념에서 한번 더 소개할 내용입니다.

렉시컬 환경은 <span style="color:orange">식별자와 식별자에 바인딩 된 값</span> 그리고 <span style="color:orange">상위 스코프에 대한 참조</span>를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다.

모던 자바스크립트에서 설명하는 "렉시컬 환경"에 대한 설명을 가져왔는데 그림으로 보면 더 쉽다!

![exe-context](execution-context/exe-context2.webp)

이렇게 렉시컬 환경은 환경 레코드와, 외부 렉시컬 환경에 대한 참조로 이루어져 있다.

## 예제

```js
const x = 1;

function foo() {
  const y = 2;
  console.log(x + y);
}
```

![exe-context1](execution-context/execution-context3.webp)

이렇듯 렉시컬 환경은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 한다.  
후에 이 개념은 클로저(Closure)의 개념으로도 연결된다.

# Break Point 1

여기까지가 실행 컨텍스트의 동작 방식 그리고 실행 컨텍스트 안에 담기는 렉시컬 환경이다.

> [!warning]
> 아래서부터는 호이스팅 및, 클로저에 대한 설명입니다.

# 호이스팅의 발생이유

```js
var x = 1;
const y = 2;

function foo() {
  // ...
}
```

알다시피 ES6 이전에는 `let`,`const`가 존재하지 않고 변수를 선언할 때면 `var`를 통해서 변수를 선언했었다.  
`var`를 통해 선언한 식별자는 "렉시컬 환경"의 "환경 레코드" 안에 있는 또 다른 "객체 환경 레코드"라는 곳에 한번 더 바인딩 된다.

![exe-context1](execution-context/exe-context3.webp)

그리고 한번 더 객체 환경 레코드 안에 `BindingObject`라는 객체가 하나 더 존재하는데 여기에 우리가 선언한
변수, 함수가 진짜로 저장된다.

![exe-context1](execution-context/exe-context4.webp)

이렇게 `BindingObject`를 통해서 전역 객체에 변수 식별자를 키로 등록한 다음 암묵적으로 `undefined`를 바인딩한다.  
따라서 `var` 키워드로 선언한 변수는 코드 실행 단계에서 변수 선언문 이전에도 참조할 수 있게 된다.

- `var`키워드로 선언한 변수에 할당한 함수 표현식도 이와 동일하게 작동한다.

```js
var foo = function () {
  console.log("bar");
};
```

## 그럼 let과 const는?

`let`, `const`는 `var`와 다르게 "선언적 환경 레코드"에 저장된다.

![exe-context1](execution-context/exe-context5.webp)

`let`, `const`는 전역 객체의 전역 객체에 등록되지 않고 "전역 환경 레코드"의 "선언적 환경 레코드"에 저장되어 변수 선언문에 도달하기 전까지는 TDZ에 빠지게 된다.

# Break Point 2

이제 실행 컨텍스트의 관점에서 호이스팅 발생에 대한 마지막 정리를 하자면 다음과 같습니다.

1. 실행 컨텍스트의 생성: 코드가 실행되면 실행 컨텍스트가 생성되고 그 안에 렉시컬 환경 스택이 스택에 쌓입니다.

2. 환경 레코드의 이원화: 전역 환경 레코드는 객체 환경 레코드(`var`, 함수 선언문)와 선언적 환경 레코드(`let`, `const`)로 나뉩니다.

3. 호이스팅의 차이:

- `var`: BindingObject를 통해 전역 객체에 등록 및 `undefined` 초기화 완료 → 선언 전 참조 가능.
- `let/const`: 선언적 환경 레코드에 등록만 되고 초기화는 되지 않음 → 선언 전 참조 시 ReferenceError (TDZ).

# Closure 동작 방식

**"클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합이다."**  
대표적인 클로저의 설명이지만 실행 컨텍스트와 렉시컬 환경을 이해하지 못한채로 들여다본다면  
어려움을 많이 겪게되는 개념이라고 생각한다.

## Closure에 대한 사전 지식

클로저는 JavaScript의 고유한 개념이 아니며 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어에서 사용되는 특성이다.

> 그러므로 클로저의 정의는 ECMAScript 사양에 등장하지 않습니다.

```js
const x = 1;

function outFn() {
  const x = 10;

  function inFn() {
    console.log(x); // 10
  }

  inFn();
}

outFn();
```

이렇게 JS가 렉시컬 스코프를 따르는 언어이기 때문에 중첩 함수이자 내부 함수인 `inFn()`이 외부 함수 `outFn()` 의 변수에 접근할 수 있게 됩니다.

## 렉시컬 스코프

위에서 잠깐 설명을 했지만 여기서 조금 더 자세히 얘기하지면  
JS엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정합니다.  
이를 렉시컬 스코프 즉, 정적 스코프라고 합니다.

![exe-context](execution-context/exe-context6.webp)

"렉시컬 환경"의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값  
즉, 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 위치에의해 결정되며 이것이 바로 렉시컬 스코프이다.

> ![info]
> 여기서 말하는 "시점"은 실행 컨텍스트의 평가 단계에 해당합니다.

## 함수 객체의 내부 [[Environment]]

자신의 상위 스코프가 어디인지 저장하기 위해서 사용하는 슬롯이 이제 [[Environment]]입니다.  
[[Environment]]의 위치는 다음과 같습니다.

![exe-context](execution-context/exe-context7.webp)

## 클로저와 렉시컬 환경

```js
const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x); // 10
  };
  return inner;
}

const innerFunc = outer();
innerFunc();
```

이처럼 외부함수보다 중첩함수가 더 오래 유지되는 경우  
즉, 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있으며 이러한 중첩함수를 클로저라고 부릅니다.  
이는 이후에 GC와도 연관되며 메모리 누수의 개념까지 이어지게 됩니다.!!
