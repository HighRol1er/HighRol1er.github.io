---
title: Dependency Injection - 의존성 주입
tags: [Design-Pattern]
date: 2026-01-29
---

# 의존성

DI 전에 의존성이라는게 뭔지부터 이해해보자

```js
const CatRepository = {
  findAll() {
    return [
      { id: 1, name: "Nabi" },
      { id: 2, name: "Mimi" },
    ];
  },
};

class CatService {
  getCats() {
    return CatRepository.findAll();
  }
}

const client = new CatService();
console.log(client.getCats());
```

`CatService`가 `CatRepository`에 강하게 의존이 되어 있는 상태이다.(커플링)  
만약 두 코드가 모듈로 분리되어 있다고 가정하면 import 시점에 의존성이 하드코딩되어 런타임에 교체가 불가능하다.

또한 테스트도 어려워지는데 테스트 코드를 만든다면 다음과 같다.

```js
import CatService from "./CatService";
import CatRepository from "./repository";

// 모듈 전체를 모킹
jest.mock("./repository");

describe("CatService", () => {
  it("getCats는 repo 데이터를 반환해야 함", () => {
    const mockData = [{ id: 100, name: "TestCat" }];
    CatRepository.findAll.mockReturnValue(mockData);

    const service = new CatService();
    const result = service.getCats();

    expect(result).toEqual(mockData);
    expect(CatRepository.findAll).toHaveBeenCalled();
  });
});
```

`CatService`가 내부적으로 `CatRepository`를 직접 참조하고 있기 때문에 흐름을 강제로 끊고 가짜 데이터를 끼워 넣어야한다.  
그리고 다른 테스트들에도 영향을 줄 수 있고 유닛 테스트가 어려워진다.

# DI를 도입한 코드

```js
const CatRepository = {
  findAll() {
    return [
      { id: 1, name: "Nabi" },
      { id: 2, name: "Mimi" },
    ];
  },
};

class CatService {
  // ↓↓↓↓↓↓↓↓↓ HERE ↓↓↓↓↓↓↓↓↓
  constructor(repository) {
    this.repository = repository;
  }

  getCats() {
    return this.repository.findAll();
  }
}

const client = new CatService(CatRepository);

console.log(client.getCats());
```

이제 `getCats`메서드는 더이상 특정 구현체(`CatRepository`)와 결합되어 있지 않다. `findAll()` 메서드만 가진 어떤 객체든 주입할 수 있어 유연성이 높아진다.

이 장점을 거머쥔 테스트 코드는 다음과 같다.

```js
import CatService from "./CatService";

describe("CatService", () => {
  it("getCats는 repo 데이터를 반환해야 함", () => {
    const mockRepository = {
      findAll: jest.fn(), // ezpz
    };

    const mockData = [{ id: 100, name: "DI-Cat" }];
    mockRepository.findAll.mockReturnValue(mockData);

    // 직접 주입
    const service = new CatService(mockRepository);
    const result = service.getCats();

    expect(result).toEqual(mockData);
    expect(mockRepository.findAll).toHaveBeenCalled();
  });
});
```

이제 더이상 특정 repository를 모킹할 필요가 없어진다. 그저 객체 리터럴로 테스트 할 함수를 넣어주기만 하면된다.

# DI 이전의 시대는 어땠나요?

아래서부터는 DI에 대한 Quora에 대한 글을 퍼온건데 도움이 될까 가져왔다.
https://www.quora.com/How-was-life-before-dependency-injection-How-did-programmers-create-objects

## 번역

의존성 주입은 2000년대 초반 Martin Flowler, Rod Johnson(Spring 프레임워크 창시자)와 같은 인물들에 의해 널리 알려졌어

당시 Weblogic, Websphere, JBoss 같은 Application Server가 주류였던 시대야 이런 서버들은 EJB 명세를 따라야 했고, 조심하지 않으면 어플리케이션이 그 서버에서만 실행될 수 있는 형태로 작성되곤 했어

다시 말하면 유닛 테스트는 사실상 불가능했지  
유닛 테스트를 하려면 어플리케이션 서버 안에서 실행해야 했는데 그렇게 하면 그건 더 이상 유닛 테스트가 아니지.

당시 많은 개발자들은 유닛 테스트를 아예 작성하지 않고 코드를 서버에 배포한 뒤 수동으로 테스트하는것에 익숙했어.

그래서 유닛 테스트를 작성하지 않는 이상 의존성 주입의 필요성을 느낄 일은 거의 없었지  
대부분은 객체를 직접 생성하고 인터페이스나 mock 구현같은 건 신경도 쓰지 않고 구체 클래스 (concrete class)를 바로 사용했지

그러다 2000년대 초반 유닛 테스트 문화가 본격적으로 확산되기 시작했고  
개발자들은 더 이상 긴 코드+테스트+배포 사이클을 가진 어플리케이션 서버를 좋아하지 않게 됐어.

이때 등장한 Spring 프레임워크는 매우 가볍고 핵심에 의존성 주입(DI) 개념을 담고 있었기 때문에 빠르게 인기를 끌었지.

Spring 덕분에 모의(mock) 객체를 활용한 테스트가 쉬워졌고,
실제 운영 환경에서는 진짜 구현체로 쉽게 교체할 수 있게 되었어.

함께 등장한 도구들도 있었어 JUnit, Mock 객체, Mockito 같은 유닛 테스트 도구들이 함께 성장했어.

오늘날에는 테스트 가능성(Testability)과 유닛 테스트가 건전한 소프트웨어 엔지니어링의 핵심 원칙으로 자리잡았고 CI/CD, DevOps 같은 현대 개발 흐름에서도 그 중요성이 확고해졌지.  
하지만 이 모든 것의 뿌리는 겨우 20년 전으로 거슬러 올라가는 비교적 최근의 일이라는 거야.
