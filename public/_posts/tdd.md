---
title: 테스트 주도 개발(자)
tags: [TDD, Testing]
date: 2026-01-29
---

# 들어가며..

테스트 주도개발은 eXtream Programming(XP)에 기반을...  
초기에 내게 이런 소리는 잘 와닿지 않았다. 왜? 슬프게도 늘상 쉬운 코드들만 작성해왔으니깐. 어려운 코드들은 AI에게 위임하고 난 그걸 읽는 개발자에 불과했으니깐

내가 TDD를 내 개발론에 적용해야겠다고 느낀건 내 프로젝트를 진행했을 때  
코드베이스가 커짐에 따라 생각보다 코드 흐름을 파악하는게 너무 어려웠다.
특히 에러 및 예외처리에 대한 대응이 안됐다.

> 예기치 못한 새로운 에러와 예외처리를 해야될 때마다 테스트 코드를 작성할껄.. 하는 껄무새가 되어 있었다.

> [!tip]
> 아무리 코드가 우아해도, 아무리 가독성이 높아도, 테스트 케이스가 없으면 깨끗하지 않다. - Clean Code 12쪽

로버트 마틴 C, 데이브 토마스 이 분들은 옛날부터 테스트 코드를 강조해왔다.

최근에는 AI를 활용한 코드 작성으로 개발시간이 크게 단축되면서 개발자들이 검증과 테스트에 더 많은 시간을 할애할 수 있게 되었다. 이러한 생산성 향상 효과가 입증되면서 기업들도 AI 도구를 적극적으로 도입하는 추세로 보인다.

> 채용공고를 보면 테스트 툴에 대한 조건이 꼭 붙어있다.

# TDD의 규칙 2가지

TDD 코드부터 바로 들이밀기보다는 일단 TDD가 뭔지 어떻게 하는지는 잠깐 살펴보자

## Red-Green-Refactor

![tdd](tdd/tdd1.webp)

1. Red 단계: (아직 구현하지 않은 기능에 대한) 실패(Fail)하는 테스트를 작성합니다.
2. Green 단계: 최소한의 코드를 통해 품질보다 구현에 집중해서 빠르게 성공(Pass)하는 테스트를 작성합니다.
3. Refactor 단계: 가독성 향상, 중복 제거, 성능 최적화 등 코드를 개선합니다.

> https://www.heropy.dev/p/Bgimsk - 여기에서 TDD에 대한 설명을 가져왔다. (감사합니다.)

## Given-When-Then

Given-When-Then은 테스트를 작성하는 하나의 시나리오다.  
테스트 코드를 <span style="color:orange">준비 단계, 실행 단계, 검증 단계</span>로 나누어 테스트 코드의 가독성과 유지보수를 높힌다.

```ts
import { add } from "../add";

describe("add", () => {
  test("1 더하기 2는 3이 돼야 합니다.", () => {
    // Given(Arrange, 준비)
    const num1 = 1;
    const num2 = 2;

    // When(Act, 실행)
    const res = add(num1, num2);

    // Then(Assert, 검증)
    expect(res).toBe(3);
  });
});
```

위 TDD의 2가지 규칙을 바탕으로 한번 더 TDD 코드를 작성해보자

# TDD 작성 예시

아래서는 게시글 fetch 로직을 TDD 흐름으로 한번 작성해보려고 한다.

## RED 단계

```ts
import { test, expect, vi } from "vitest";
import { mockPosts } from "@/shared/mocks/posts.mock";

test("게시글 불러오기 성공", async () => {
  // Given - 준비
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => mockPosts,
  });

  // When - 실행
  const response = await getPosts();

  // Then - 검증
  expect(response).toEqual(mockPosts);
});
```

- 현재 `getPosts()`는 실제로 구현되어 있지 않기 때문에 실패하게 된다.

## Green 단계

이제 레드를 그린으로 바꾸기 위해 실제 데이터 fetch 로직을 작성한다.  
최소한의 코드를 통해 품질보다 구현에 집중해서 빠르게 성공하는게 목적이다

```ts
export async function getPosts(): Promise<PostMetadata[]> {
  const response = await fetch("/posts/posts.json");
  if (!response.ok) {
    console.error("Failed to fetch posts.json", response.statusText);
  }
  return response.json();
}
```

실제 구현체를 만들었음으로 테스트는 성공하게 된다.

## Blue 단계

페칭 실패에 대한 처리 및 가독성 향상을 위해 `try ... catch`문을 더할 것이다.  
참고로 성공한 테스트 코드는 지우는것이 아니라 지속적으로 확장해 나가는 것이다.

```ts
test("게시글 불러오기 실패", async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: false,
    statusText: "Internal Server Error",
  });

  const response = await getPosts();

  expect(response).toEqual([]);
});
```

`response.ok`가 `false`일 경우이므로 빈 배열을 반환하는데 아직 구현체에서는 실패에 대한 상황이 없으므로 테스트 코드는 실패하게 된다.

구현체를 다음과 같이 기능을 더한다.

```ts
export async function getPosts(): Promise<PostMetadata[]> {
  try {
    const response = await fetch("/posts.json");
    if (!response.ok) {
      console.error("Failed to fetch posts.json", response.statusText);
    }
    return response.json();
  } catch (error) {
    return [];
  }
}
```

이제 모든 2가지 성공과 실패에 대한 케이스에 대해 유닛 테스트를 마쳤다.

# 마무리

> [!warning]
> 테스트의 주인공은 코드가 아닌 '사용자'여야 한다

테스트 코드에서 핵심은 모킹 작업과, 올바른 작업 방향이다.  
정교한 모킹 없이는 테스트코드가 일관성을 잃게 된다. 또한 테스트코드는 사용자 관점에서 작성해야한다. 우리는 내부 변수에 `string`값이 잘 들어왔는지 함수를 제대로 호출하고 있는지 같은 구현 세부사항은 개발자의 관심사일 뿐 실제 사용자들에겐 아무런 의미가 없기 때문이다.
