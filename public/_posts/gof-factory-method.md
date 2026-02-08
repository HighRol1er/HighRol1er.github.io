---
title: Factory Method Pattern
tags: [GoF, Design-Pattern]
date: 2026-02-08
---

# 팩토리 메서드란?

팩토리 메서드 패턴은 구체적인 클래스를 코드에 명시하지 않고도 객체를 생성할 수 있게 해주는 패턴으로 <span style="color:orange">**객체 생성 로직과 실제 사용 로직**</span>을 분리하기 위한 패턴

# 문제 상황으로 마주해보기

```ts
// PRODUCT INTERFACE
interface Animal {
  speak(): void;
}

class Cat implements Animal {
  speak() {
    console.log("야옹");
  }
}

class Dog implements Animal {
  speak() {
    console.log("멍멍");
  }
}

// Client Code & Creator
function createAnimal(type: string) {
  let animal: Animal;

  if (type === "dog") {
    animal = new Dog();
  } else if (type === "cat") {
    animal = new Cat();
  } else {
    throw new Error("알 수 없는 동물입니다.");
  }

  animal.speak();
}

// 사용
createAnimal("dog");
createAnimal("cat");
```

해당 코드에서 다음과 같은 요구사항을 받았다고 해봅시다.

> 성윤씨 지금 코드에서 `Cat`, `Dog`,를 `Tiger`, `Wolf`로 변경하고
> 새로운 12간지에 해당하는 동물들을 추가해 주세요.

1. `Cat`, `Dog` → `Tiger`, `Wolf`로 변경해야 될 경우
   - 1차 수정: 각 클래스들의 이름 변경
   - 2차 수정: `createAnimal` 함수를 생성자 호출 변경 → `animal = new Tiger`\
     이렇듯 하나만 수정하려해도 클래스들이 강하게 결합되어 있어 의도치 않은 곳까지 계속 수정해야 합니다.\
     즉, <span style="color:orange">**강한 결합도(의존성 문제)**</span>를 겪게 됩니다.
2. 새로운 12간지를 추가하게 될 경우
   - `createAnimal` 코드의 `if_else`문에 계속 `type == "monkey"`처럼 추가해야 하므로
     <span style="color:orange">**OCP를 위반**</span>하게 됩니다.

이렇듯 코드베이스 자체가 커지게 될 경우 수정하나도 쉬워지지 않게됩니다.\
아래서부턴 팩토리 메서드를 통해서 각 의존성 문제, OCP문제를 하나하나 해결해 보겠습니다.

# 다이어그램

![factory-method](factory-method/factory-method1.webp)

해당 UML을 화살표의 관계로서 표현하면 다음과 같다.

1. Concrete Product 는 Product의 구현체
2. Creator는 Product를 의존한다.
3. Concrete Creator는 Creator를 상속한다.

> [!tip]
> UML 화살표의 의미를 참고해서 다이어그램을 이해하는 것이 좋다.

# 팩토리 메서드로 개선한 코드

```ts
// PRODUCT INTERFACE
interface Animal {
  speak(): void;
}

// CONCRETE PROUDCT (구현체)
class Cat implements Animal {
  speak() {
    console.log("야옹");
  }
}

class Dog implements Animal {
  speak() {
    console.log("멍멍");
  }
}

// CREATOR
abstract class AnimalFactory {
  // *핵심* 팩토리 메서드
  abstract createAnimal(): Animal;
  // 공통 로직
  orderAnimal(): void {
    const animal = this.createAnimal();
    console.log("---뚝딱.뚝딱.---");
    animal.speak(); // 태어났으니 울음..
  }
}

// CONCRETE CREATOR
class DogFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Dog();
  }
}

class CatFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Cat();
  }
}

function runFactory(factory: AnimalFactory) {
  factory.orderAnimal();
}

runFactory(new DogFactory()); // 멍멍!
runFactory(new CatFactory()); // 야옹~
```

## 의존성, OCP

다시 돌아가서 기존 팩토리 메서드를 적용하지 않은 코드의 다이어그램을 보면 다음과 같습니다.  
![factory-method](factory-method/factory-method2.webp)

하나의 `Creator`가 `Product`, `Concrete Product` 클래스들을 포함하고 있었기에 새로운 `Product`가 추가 될 떄마다 `Creator` 내부 코드를 수정해야 했습니다.

팩토리 메서드를 적용한 코드를 보면 Creator는 **추상 계층과 구현 계층**으로 명확히 나눠집니다.\
추상 계층(`Creator`)은 오직 Product 인터페이스 하고만 소통합니다.\
즉, 어떤 구체적인 물건이 나올지는 모르지만 규격만 맞으면 ✅️다.

구현 계층인 `Concrete Creator`는 실제 구현체 `Concrete Product`와 관계를 가지게 됩니다.

이러한 변화 덕분에 클라이언트 코드는 복잡한 `createAnimal`과 같은 코드는 알 필요 없이 원하는 공장만 알면됩니다.

## 요구사항을 다시 확인해보자

> 성윤씨 지금 코드에서 `Cat`, `Dog`,를 `Tiger`, `Wolf`로 변경하고
> 새로운 12간지에 해당하는 동물들을 추가해 주세요.

그러므로 해당 요구사항에 대해 수정을 다시 진행하게 될 경우 아래 Creator 코드는 전혀 수정할 필요가 없어지며 우리는 단순히 이름만 변경 + 추가 할 수 있게됩니다.

```ts
// CREATOR
abstract class AnimalFactory {
  // *핵심* 팩토리 메서드
  abstract createAnimal(): Animal;
  // 공통 로직
  orderAnimal(): void {
    const animal = this.createAnimal();
    console.log("---뚝딱.뚝딱.---");
    animal.speak(); // 태어났으니 울음..
  }
}
```
