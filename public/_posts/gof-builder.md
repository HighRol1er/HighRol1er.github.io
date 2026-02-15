---
title: Builder Pattern With TypeScript
tags: [GoF, Design-Pattern]
date: 2026-02-15
---

# 빌더 패턴이란?

빌더는 복잡한 객체들을 단계별로 생성할 수 있는 디자인 패턴입니다.
동일한 제작코드를 통해 객체의 다양한 결과물을 만들어 낼 수 있습니다.

핵심은 복잡한 객체를 생성할 때 단계를 거치게 만들이서 객체를 만드는 생성 패턴입니다.

# 다이어그램

<!-- ![builder](builder/builder1.webp) -->
<img src="builder/builder1.webp" width="400" alt="builder pattern diagram">

# 문제로 파악하기

유저생성 로직을 **OOP방식 → 빌더 패턴**으로 리팩토링을 진행하면서 어떤 문제점이 있는지 알아보겠습니다.

> [!warning]
> <span style="color:orange">**JS,TS에서는 빌더 패턴이 필수적이지 않습니다. 오히려 오버엔지니어링이 될 수 있습니다.**</span>\
> <u>객체 옵션 패턴</u>은 함수나 생성자에 많은 인자를 전달할 때 개별 인자 대신 설정값들을 담은 하나의 객체(리터럴)를 전달하여 가독성과 유연성을 높이는 디자인 패턴입니다. 인자의 순서에 얽매이지 않고, 선택적 매개변수를 쉽게 처리할 수 있어 빌더 패턴의 경량화된 대안으로 사용됩니다.

## OOP 방식

```ts
class User {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public address: Address,
    public security: Security,
  ) {}
}

class Address {
  constructor(
    public city: string,
    public state: string | null,
    public country: string,
  ) {}
}

class Security {
  constructor(
    public mfaEnabled: boolean,
    public backupCodes: string[],
  ) {}
}

// CLIENT CODE
const monsterUser = new User(
  "exampleId",
  "example@email.com",
  "John Doe",
  new Address("Busan", null, "KR"),
  new Security(true, ["A1", "B2"]),
);

console.log(monsterUser.address.city);
```

기존 OOP 유저 생성 로직의 <u>문제점은</u> 다음과 같습니다.

- 인자의 순서가 중요
- 낮은 가독성
- 새로운 필드를 추가했을 때 에러를 발생할 여지가 높음
- 검증 로직이 들어갈 자리가 없음
- 원하는 필드만 입력이 불가

## 빌더 패턴

OOP 코드를 빌더 패턴으로 변경한 코드입니다.

```ts
// ----------------------
// USER TYPES
// ----------------------

interface UserProps {
  id: string;
  email: string;
  password: string;
}

interface Address {
  city: string;
  state: string | null;
  country: string;
}

interface Security {
  mfaEnabled: boolean;
  backupCodes: string[];
}

// ----------------------
// USER ENTITY
// ----------------------

class User {
  constructor(
    public readonly info: UserProps,
    public readonly address?: Address,
    public readonly security?: Security,
  ) {}

  display(): void {
    console.log(`[User Info] ID: ${this.info.id}, Email: ${this.info.email}`);
    console.log(`[Address] ${this.address ? this.address.city : "정보 없음"}`);
    console.log(
      `[Security] MFA: ${this.security?.mfaEnabled ? "활성화" : "비활성화"}`,
    );
  }
}

// ----------------------
// BUILDER
// ----------------------

interface IUserBuilder {
  init(info: UserProps): this;
  setAddress(address: Address): this;
  setSecurity(security: Security): this;
  build(): User;
}

class UserBuilder implements IUserBuilder {
  private info!: UserProps;
  private address?: Address;
  private security?: Security;

  init(info: UserProps): this {
    if (!info.id) throw new Error("ID는 필수값입니다.");
    if (!info.email.includes("@"))
      throw new Error("올바른 이메일 형식이 아닙니다.");
    if (info.password.length < 8)
      throw new Error("비밀번호는 최소 8자 이상이어야 합니다.");

    this.info = info;
    return this;
  }

  setAddress(address: Address): this {
    if (!address.city || !address.country) {
      throw new Error("주소 입력 시 도시와 국가는 필수입니다.");
    }
    this.address = address;
    return this;
  }

  setSecurity(security: Security): this {
    if (security.mfaEnabled && security.backupCodes.length === 0) {
      throw new Error("MFA 활성화 시 백업 코드가 최소 1개 이상 필요합니다.");
    }
    this.security = security;
    return this;
  }

  build(): User {
    if (!this.info) {
      throw new Error(
        "유저의 기본 정보가 설정되지 않았습니다. init()을 먼저 호출하세요.",
      );
    }
    return new User(this.info, this.address, this.security);
  }
}

// ----------------------
// CLIENT CODE
// ----------------------

// 필수 정보만 가진 유저
const basicUser: IUserBuilder = new UserBuilder();
basicUser
  .init({ id: "user_01", email: "basic@test.com", password: "password123" })
  .build()
  .display();

// 모든 정보를 가진 유저
const fullUser = new UserBuilder()
  .init({ id: "user_02", email: "full@test.com", password: "secure_password" })
  .setAddress({ city: "Seoul", state: null, country: "KR" })
  .setSecurity({ mfaEnabled: true, backupCodes: ["CODE1", "CODE2"] })
  .build()
  .display();
```

Builder 클래스를 도입해 각 초기화 단계를 나누었고, 유효성 검증을 해당 `setSomthing` 메서드에서 담당하게 됩니다.\
`build()`단계에 도달하기 전까지 객체는 생성되지 않기에 생성 과정에서 불완전한 객체(만들다가 만) 객체를 생성하지도 않습니다.

# 🧐그런데 말입니다..

이론으로 배운 빌더 패턴을 실제 로그인 기능에 적용해보기위해 열심히 삽질?을 해본 결과 빌더 패턴이 전혀 필요가 없었습니다.\
일단 빌더 패턴이 들어갈 자리가 없었습니다. 빌더 패턴을 도입하려고 아무리 보아도 이미 가독성이 좋은 코드에 재만 뿌리는 행위 같았습니다.

아래 코드는 제가 구현한 코드와 완전히 같지는 않지만 핵심은 **객체 리터럴**을 전달한다는 것 입니다.

## 객체 옵션 패턴

```ts
interface CreateUserDTO {
  id: string;
  email: string;
  name: string;
  address: Address;
  security: Security;
}

interface Address {
  city?: string;
  state?: string | null;
  country?: string;
}

interface Security {
  mfaEnabled: boolean;
  backupCodes: string[];
}

class User {
  id: string;
  email: string;
  name: string;
  address: Address;
  security: Security;

  constructor({ id, email, name, address, security }: CreateUserDTO) {
    // 유효성 검사로직 can add here..
    this.id = id;
    this.email = email;
    this.name = name;
    this.address = address;
    this.security = security;
  }
}

// CLIENT CODE
const myUser = new User({
  /* ...생략 */
});
```

객체 리터럴로 전달하는 것만으로도 기존 OOP 코드가 발생시키는 문제의 90%가 해결됐습니다.

- ~~인자의 순서가 중요~~ → 객체로 전달하기 때문에 순서의 문제가 해결
- ~~낮은 가독성~~ → `key-value`로 전달하니 어떤 값인지 명확히 파악 가능
- ~~새로운 필드를 추가했을 때 에러를 발생할 여지가 높음~~ → 새로운 필드 추가시 DTO에서 바로 타입 에러를 잡아내줍니다.
- ~~검증 로직이 들어갈 자리가 없음~~ → 각 필드에 대한 검증 로직을 넣을 수 있습니다.
- ~~원하는 필드만 입력이 불가~~ → 옵셔널 처리를 통해 원하는 필드만 입력할 수 있습니다.

> 그럼 해당 코드가 모든 문제를 완벽히 해결한 것일까요? **정답은 아닙니다.**

1. SRP 관점에서 <span style="color:orange">**생성 책임과 검증 책임**</span>이 같은 범위에 있습니다.
2. 속성에 옵셔널(`?`)을 추가할 경우

```ts
this.address = address ?? {};
this.security = security ?? {};
// 옵셔널 필드가 늘수록 ?? 처리가 계속 쌓임
```

하지만 검증 부분을 `middleware/pipe`를 통해 별도의 `validation`을 거쳐 검증 로직을 분리할 수 있습니다.
그리고 객체 옵션 패턴은 빌더 패턴처럼 코드의 복잡성이 높지도 않습니다.

분명 GoF 패턴은 훌륭한 도구이지만 TypeScript처럼 언어 자체가 유연한 환경에서는 객체 옵션 패턴이 훨씬 효율적인 선택이 됩니다!!
