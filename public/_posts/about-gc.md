---
title: Garbage Collection
tags: [GC, JavaScript]
date: 2026-01-27
---

# Garbage Collection - 메모리 누수

변수를 만들면 변수를 브라우저 메모리에 저장하고 만든 변수들 중 필요 없는 것들은 모아뒀다가 한번에 지운다.  
→ Garbage Collector 가 Garbage Collection을 하는 것

# JS, JAVA는 어떻게 GC를 처리할까?

JS나 Java 같은 대부분의 언어는 메모리를 자동으로 할당해주는데,  
C언어 등의 일부 언어는 메모리를 직접 할당하고 데이터를 저장해야 한다.

> Rust언어는 신기하게도 GC가 없음!

JavaScript는 GC가 해주니까 따로 우리가 메모리 관리를 할 필요는 없지만,  
Garbage Collector가 사용하지 않는 변수를 잘 수거할 수 있게 코드를 작성해야한다.

# Mark & Sweep

JS에서는 대표적으로 Mark & Sweep 알고리즘을 통해 GC를 수행한다.  
사용하지 않는 변수에 marking을해두고 메모리가 차면 마킹해둔 애들을 한번에 지운다.  
지우는 텀이 길면 지울 것이 많아서 잠깐씩 멈추는 현상이 생긴다(lagging).

# Memory Leak

![about-gc](about-gc/about-gc1.webp)

위처럼 지속해서 누수가 발생하면 더 이상 변수를 저장할 곳이 없어서 컴퓨터가 죽는다.

## 메모리 누수를 일으키는 예 - 전역 변수

전역 변수를 잘못 쓴 사례를 보면 다음과 같다.

```js
const box = [];
const start = () => {
  for (let i = 0; i <= 1000000; i++) {
    box[String(Math.random())] = "철수";
  }
};
```

`box`변수가 전역변수로 선언되어 사라지지 않고 전역변수는 어디서든 접근할 수 있어서, GC가 마킹하지 못해 지워지지않는다.<br/>
따라서 사라지지 않고 계속해서 메모리를 차지한다.

## 메모리 누수를 일으키지 않는 예 - 지역변수

```js
const start = () => {
  const box = [];
  for (let i = 0; i <= 1000000; i++) {
    box[String(Math.random())] = "철수";
  }
};
```

함수 안으로 `box` 변수를 옮기면 `start` 함수가 종료되면 필요가 없어져 마킹이 되고 사라지게 된다.

## 메모리 누수의 유형

![about-gc](about-gc/about-gc2.webp)

> [!info]
> [Google Developer](https://developer.chrome.com/docs/devtools/memory-problems?hl=ko)<br/>
> Memory Bloat → 사이트가 점점 더 많은 메모리를 사용한다면 메모리 누수가 발생<br/>
> 하지만 Memory bloat는 정확한 수치가 없고 RAIL모델을 활용해서 사용자에게 집중해야함

크롬에 내장되어 있는 도구를 통해서 정확히 확인 할 수 있다.

> [!tip]
> 대표적인 내장 도구
>
> 1. Chorme Task Manager <br/>
> 2. Chrome devtools의 Memory, performance

> - 성능 기록을 시작하기 전과 종료할 때, 수동으로 가비지 컬렉션을 한 번씩 실행해주는 게 좋아요.<br/>
>   녹화 중에 빗자루 아이콘(Collect garbage)을 누르면 가비지 컬렉션을 강제로 수행할 수 있어요.

## JS heap, Document, Nodes, Listener

#### 🔵 JS heap

- JavaScript 엔진(V8)이 실행될 때 사용되는 메모리 영역 중 하나로 주로 객체, 배열, 함수 등 동적으로 생성되는 데이터를 저장하는 공간
- JavaScript에서 원시 값은 보통 스택이라는 다른 메모리 영역에 저장되는 반면 크기가 가변적이고 참조를 통해 접근하는 참조 타입은 JS힙에 저장됨
- 파랑선이 하락하는 부분이 GC가 작용하는 부분임

#### 🟢 Nodes

- 노드란 웹페이지를 구성하는 HTML element 하나하나를 의미
- 페이지에서 element를 제거했음에도 불구하고 해당 노드를 참조하는 JavaScript 변수나 클로저가 남아 있으면 메모리에 누적될 수 있다.<span style="color:indianred">← **메모리 누수의 원인**</span>

#### 🟡 Listeners

- 리스너는 웹 페이지에서 특정 이벤트가 발생하기를 기다리고 있다가 발생하면 미리 정의된 함수(주로 콜백함수)를 실행하도록 등록된 요소

- 어떤 `<div>`에 `click`과 같은 이벤트 리스너를 등록했고 후에 해당 `<div>`를 제거했음에도 JavaScript 코드 어딘가에 해당 리스너에 대한 참조가 남아 있다면 리스너와 연결된 `<div>` 노드는 GC에 의해 제거되지 않음. <span style="color:indianred">← **메모리 누수의 원인** </span>

#### 🔴 Documents

- 웹 페이지의 개수
