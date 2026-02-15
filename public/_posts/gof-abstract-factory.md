---
title: Abstract Factory Pattern
tags: [GoF, Design-Pattern]
date: 2026-02-09
---

# 추상 팩토리란?

추상 팩토리는 관련 객체들의 구체적인 클래스들을 지정하지 않고도 <span style="color:orange">**관련 객체들의 모음**</span>을 생성할 수 있도록 하는 생성 패턴
**즉, 추상 팩토리는 여러 종류의 연관된 객체들을 하나의 '군'으로 묶어서 생성하는 것이 목적입니다.**

> 관련 객체들의 모음?\
> 기본 UI에 HandMadeStyle UI, Glassmorphism UI와 같은 스타일링을 입힌 그룹이라고 생각하면 됨.

![abstract-factory](abstract-factory/abstract-factory2.webp)

# 팩토리 메서드와의 관계

추상 팩토리는 내부적으로 팩토리 메서드(`createSomething()`)들을 모아놓은 형태이므로 '제품 군'이 하나뿐이라면 자연스럽게 팩토리 메서드 패턴으로 수렴하게 됩니다.\
즉, 추상 팩토리는 Group이 추가된 팩토리 메서드 패턴입니다.

# 다이어그램

![abstract-factory](abstract-factory/abstract-factory1.webp)

- Concrete Product는 Abstract Product를 상속
- Concrete Factory는 Concrete Product에 의존 + Abstract Factory를 구현
- Client는 Abstract Factory를 참조

# 코드로 살펴보기

```ts
// ----------------------
// ABSTRACT FACTORY
// ----------------------
interface UIFactory {
  createButton(): Button;
  createCard(): Card;
  createInput(): Input;
  //다른 컴포넌트들..
}

// ----------------------
// CONCRETE FACTORY
// ----------------------
class HandMadeUI implements UIFactory {
  createButton(): Button {
    return new HandMadeButton();
  }
  createCard(): Card {
    return new HandMadeCard();
  }
  createInput(): Input {
    return new HandMadeInput();
  }
}

class GlassmorphismUI implements UIFactory {
  createButton(): Button {
    return new GlassButton();
  }
  createCard(): Card {
    return new GlassCard();
  }

  createInput(): Input {
    return new GlassInput();
  }
}
// ----------------------
// ABSTRACT PRODUCT
// ----------------------
interface Button {
  render(): void;
}

interface Card {
  render(): void;
}

interface Input {
  render(): void;
}

// ----------------------
// CONCRETE PROUDCT
// ----------------------
class HandMadeButton implements Button {
  render() {
    // .. logic
  }
}
class HandMadeCard implements Card {
  render() {
    // .. logic
  }
}

class HandMadeInput implements Input {
  render() {
    // .. logic
  }
}

class GlassButton implements Button {
  render() {
    // .. logic
  }
}

class GlassCard implements Card {
  render() {
    // .. logic
  }
}

class GlassInput implements Input {
  render() {
    // .. logic
  }
}

// ----------------------
// CLIENT CODE
// ----------------------
class Application {
  private button: Button;
  private card: Card;
  private input: Input;

  constructor(factory: UIFactory) {
    this.button = factory.createButton();
    this.card = factory.createCard();
    this.input = factory.createInput();
  }

  renderUI() {
    this.button.render();
    this.card.render();
    this.input.render();
  }
}

const handMadeStyleApp = new Application(new HandMadeUI());
```

> 여기서 `CyberpunkUI`, `x-masUI`등 테마가 추가된다면?

해당 테마들이 추가되어도 기존에 작성된 코드는 수정할 필요가 없어집니다.\
그저 새로운 `Concrete Product`와 `Concrete Factory`만 추가해주면 됩니다.

# Abstact Factory의 지향점

추상 팩토리는 팩토리 메서드의 집합입니다. 그러므로 SRP, OCP, 커플링(의존성)문제를 동일하게 해결해줍니다.

> [!error]
> 다만 확장에 대해 인터페이스들과 클래스들이 계속해서 생겨나기에 코드가 복잡해집니다.
