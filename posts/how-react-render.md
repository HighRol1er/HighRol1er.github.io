# 웹 브라우저의 동작 원리 

크게는 CRP라는 단위로 작게는 4단계로 구분 <br/>
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│          Critical Rendering Path (CRP)                  │
│                                                         │
│   ┌─────────────┐                                       │
│   │  DOM/CSSOM  │                                       │
│   └──────┬──────┘                                       │
│          │                                              │
│          ▼                                              │
│   ┌─────────────┐                                       │
│   │ Render Tree │                                       │
│   └──────┬──────┘                                       │
│          │                                              │
│          ▼                                              │
│   ┌─────────────┐                                       │
│   │   Layout    │                                       │
│   └──────┬──────┘                                       │
│          │                                              │
│          ▼                                              │
│   ┌─────────────┐                                       │
│   │  Painting   │                                       │
│   └─────────────┘                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
### 1. DOM 그리기
- HTML을 브라우저가 해석하기 편한 방식으로 변환한 객체 트리
<img width="1302" height="733" alt="image" src="https://github.com/user-attachments/assets/c27f669d-d086-4598-bbda-a9c8f05ff2fa" />

### 2. Render Tree 생성하기 

- DOM + CSSOM = Render Tree
<img width="1395" height="765" alt="image" src="https://github.com/user-attachments/assets/cf7349ef-0d2e-4c86-aae9-645f7e7213c9" />

### 3. Layout 
- 웹페이지 안에 html 요소들이 어디에 그리고 어느 사이즈로 배치해 있을건지 결정하는 작업
<img width="879" height="453" alt="image" src="https://github.com/user-attachments/assets/01967b6f-fff4-45ec-af09-39f7131b3d4e" />

### 4. Painting 
- 실제로 요소들을 화면에 그려내기
<img width="868" height="496" alt="image" src="https://github.com/user-attachments/assets/58c80f84-f70f-44a0-a27f-22d0e145a3db" />

# 그러면 업데이트는 어떻게 이루어질까? 
JS로 짠 코드가 DOM을 `innerhtml`, `append child`, `remove child` 등 DOM API를 활용해서 DOM을 수정하면서 이뤄진다.<br/>
DOM이 수정되면 CRP 과정은 다시 실행됨

<img width="901" height="502" alt="image" src="https://github.com/user-attachments/assets/c5ca329b-d073-4616-9534-88d68101abb8" />
이렇듯 DOM을 조작하는 것은 비용이 비싼 과정이다.<br/>
다시 `Layout`을 그리고 `Painting` 하는 과정을 `Reflow`, `Repaint`라고 따로 부를 정도로 비싼 연산이다.<br/>
그렇기 때문에 DOM의 수정 횟수를 최소한으로 하는게 중요함!. 

## DOM 수정 (BAD e.g)
- `onClick()` 함수를 누르면 Reflow, Repaint 작업을 3000번 진행(4500ms)

```js
<script>
  function onClick() {
    const $ul = document.getElementById("ul");
    for (let i = 0; i < 3000; i++) {
      $ul.innerHTML += `<li>${i}</li>`;
    }
  }
</script>

<body>
  <button onclick="onClick()">리스트 추가하기</button>
  <ul id="ul"></ul>
</body>
```

## DOM 수정 (GOOD e.g)
- `onClick()` 함수를 누르면 for문을 통한 작업이 `list`에 모으고 마지막에 `innerHTML`로 한번만 실행해 Reflow, Repaint 작업을 한번만 실행하는 개선된 코드
- 실행시간은 250ms로 22배 개선된 코드
```js
<script>
  function onClick() {
    const $ul = document.getElementById("ul");
    let list = "";

    for (let i = 0; i < 3000; i++) {
      list += `<li>${i}</li>`;
    }

    $ul.innerHTML = list;
  }
</script>

<body>
  <button onclick="onClick()">리스트 추가하기</button>
  <ul id="ul"></ul>
</body>
```
---

이렇듯 동시에 일어나는 다양한 업데이트는 모아서 한번에 수정하는것이 좋음 → 렌더링 최적화<br/>
하지만 서비스의 규모가 커지면 이런 작업은 점점 힘들어진다.<br/>

그러나 우리는 걱정할게 없다. **REACT**형님은 이걸 다 해준다.<br/>
즉, 내부적으로 동시에 발생한 업데이트를모아서 DOM을 자동으로 최적의 상태로 렌더링 해줌!! 

# React의 렌더링 프로세스 
```
┌─────────────────────────────────────────────┐
│                                             │
│          React Rendering Process            │
│                                             │
│   ┌────────────────┐                        │
│   │  Render Phase  │                        │
│   └────────┬───────┘                        │
│            │                                │
│            ▼                                │
│   ┌───────────────┐                         │
│   │ Commit Phase  │                         │
│   └───────────────┘                         │
│                                             │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

### 1. Render Phase - 1
내부적으로 `return`문 안에 있는 요소들을 객체형태로 렌더링 해준다.
- `type`은 `"div"`
- `prop` id는 `"main"`
- 내부는 `children` 속성으로 재귀적 저장
<img width="1257" height="671" alt="image" src="https://github.com/user-attachments/assets/eb0b4e27-385f-4634-a01d-0127cea01b1a" />

### 2. Render Phase - 2 
- VDOM은 가상돔으로서 값으로 표현된 UI이다.
<img width="1367" height="762" alt="image" src="https://github.com/user-attachments/assets/ea177011-5941-49ce-8720-3196960b6cd4" />
<img width="1342" height="666" alt="image" src="https://github.com/user-attachments/assets/a1fa5348-c532-448f-8f56-1c0255c4fe34" />

### 3. Commit Phase 
- Render Phase에서 계산된 결과를 가지고 Actual DOM에 반영한다.
<img width="1445" height="648" alt="image" src="https://github.com/user-attachments/assets/5e6d68d3-d7a8-42b7-97f0-8520c1e9fee0" />


## React의 렌더링 단계가 복잡한 이유
- 리액트는 바뀐 State 기반으로 새로운 VDOM을 만든다. (업데이트 발생 → 새로운 VDOM 생성)
- 이 떄 Prev VDOM과 바뀐 VDOM을 Diffing 알고리즘을 통해 비교한다.
- 계산된 차이점을 Actual DOM에 한번에 업데이트
- 업데이트 → Diffing 차이점 비교 → Actual DOM에 적용 (이 과정을 Reconciliation이라고 함.)


