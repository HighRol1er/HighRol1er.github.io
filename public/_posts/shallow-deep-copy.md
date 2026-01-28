---
title: 얕은 복사와 깊은 복사
tags: [JavaScript]
date: 2026-01-27
---

# Shallow copy

복사본의 속성이 원본 <span style="color:indianred">객체와 같은 참조</span> (메모리 내의 같은 값)를 공유하는 객체  
반대로 두 객체가 서로 같은 메모리 값을 공유하지 않으면 깊은복사

> [!info]
> 얕은 복사는 다음과 같은 특징을 갖습니다.<br/>
>
> 1. `o1 !== o2` 일 때
> 2. `o1`과 `o2`의 속성값이 같을 때
> 3. 두 객체가 동일한 프로토타입 체인을 가질 때

```js
const origin = {
  name: "Joe",
  info: {
    age: 20,
  },
};

const shallowCopy = { ...origin };

// Primitive type을 변경할 때
shallowCopy.name = "foo";
console.log("origin :", origin.name); // "Joe"
console.log("shallowCopy :", shallowCopy.name); // "foo"

// Reference type을 변경할 때
shallowCopy.info.age = 99;
console.log(origin.info.age); // 99
console.log("copy", shallowCopy.info.age); // 99
```

> [!tip]
> 원시 타입: Number, String, Boolean, null, undefined, Symbol, BigInt <br/>
> 원시 타입은 값 자체를 복사하기 때문에 서로 독립적입니다.<br/>
> 참조 타입: Object, Array, Function
> 참조 타입은 원본 메모리 값을 공유하기에 서로 독립적이지 않습니다.

# Deep copy

복사본의 속성이 원본 객체와 같은 메모리 참조를 공유하지 않는 복사본
즉, 원본이나 복사본을 수정해도 서로 독립적으로 작동하게 됩니다.

```js
const origin = {
  name: "Joe",
  info: {
    age: 20,
  },
};

const deepCopy = JSON.parse(JSON.stringify(origin));

// Primitive type을 변경할 때
deepCopy.name = "foo";
console.log("origin :", origin.name); // "Joe"
console.log("deepCopy :", deepCopy.name); // "foo"

// Reference type을 변경할 때
deepCopy.info.age = 99;
console.log(origin.info.age); // 99
console.log("deepCopy", deepCopy.info.age); // 99`
```
