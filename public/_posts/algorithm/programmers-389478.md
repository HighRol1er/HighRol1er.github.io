---
title: 프로그래머스, 택배 상자 꺼내기
tags: [Algorithm]
date: 2026-02-05
---

# 택배 상자 꺼내기

- 소요시간: 90분

# 체크 리스트

[ ] 1. 시간 엄수: 문제당 30분 ~ 60분 시간을 정해놓고 집중해서 풀기
[x] 2. SUDO 코드 설계: 바로 코딩하지 말고 SUDO 코드를 먼저 작성하기 (종이 활용 권장)
[x] 3. 핵심 기록: 문제를 풀기 위한 핵심 로직과 아이디어를 상단에 정리하기

## 문제

[택배 상자 꺼내기](https://school.programmers.co.kr/learn/courses/30/lessons/389478)

## SUDO

```
n = 총 상자 개수
w = 가로에 담길 상자 개수
num = 꺼낼 상자의 숫자

CORE:
matrix를 만들어서 해당 좌표가 몇 번째 col 인지 알면 해당 col -1을 return 하면 됨
비어있는 row는 0으로 표시
```

**SUDO 비고:**\
해당 SUDO에 작성한 내용부터 옳지 않음.\
전반적으로 너무 짧게 생각했음.\
내가 첫번째로 푼 문제를 가지고 다시 SUDO를 작성했을경우 다음과 같이 작성했어야 함

```
1. 상자가 쌓일 전체 높이, h를 구한다
2. 반복문을 통해 전체 matrix를 만든다. (h x w)
3. 실제로 상자가 없는 곳은 0으로 표시

4. 지그재로 변경하기
5. 새로운 배열안에 col을 기준으로 새롭게 담기
6. num에 해당하는 넘버가 나오면 해당 index를 반환하기
```

## CODE

```py
def solution(n, w, num):
    container = []

    h = (n - 1) // w + 1
    total = h * w

    temp = []
    for box in range(1, total +1):
        if box > n:
            box = 0
        temp.append(box)
        if len(temp) == w:
            container.append(temp)
            temp = []

    container = sorted(container, reverse = True)


    for i in range(1, h + 1):
        # 짝수 층
        if i % 2 == 0:
            container[i-1].sort(reverse = True)

    # 다시 새로운 배열에 수직으로 배열된 상자를 담음
    new_cols = []
    for c in range(w):
        column_data = []
        for r in range(h):
            val = container[r][c]
            if val != 0:
                column_data.append(val)
        new_cols.append(column_data)

    # print(new_cols)

    # 이제 num 앞에 몇개의 숫자가 있는지만 카운트해서 return
    for arr in new_cols:
        for j in range(len(arr)):
            if arr[j] == num:
                return j +1
```

코드가 시각적으로는 어떻게 변경되는지 명확하나 모든 상자를 넣고, 다시 꺼내고를 반복했다.
비효율적인 코드...
처음에는 내가 생각했을 때 분명 이렇게 matrix를 만드는게 아니라 분명 어떤 좌표를 통해서 할 수 있을거라고 생각을 하긴 했다.
내 생각을 옮긴 최적의 코드는 다음과 같다. (AI의 도움을 받음)

# 효율적인 코드

```py
def solution(n, w, num):
    # 특정 번호의 좌표(row, col)을 구하는 함수
    def get_coords(val, w):
        row = (val - 1) // w
        col = (val - 1) % w
        # 홀수 index에 해당하는 층은 역순
        if row % 2 == 1:
            col = w - col - 1
        return row, col

    # target 좌표
    r_target, c_target = get_coords(num, w)
    # 마지막 상자 좌표
    r_last_box, c_last_box = get_coords(n, w)

    # 일단 맨 꼭대기 층으로부터의 높이 계산
    answer = r_last_box - r_target + 1

    # 아래는 정말 last_box가 있는지 체크
    # 정방향 층-짝수
    if r_last_box % 2 == 0:
        last_box_num = r_last_box * w + c_target + 1
    # 역방향 층-홀수
    else:
        last_box_num = r_last_box * w + (w - 1 - c_target) + 1 # 해당 층의 시작 직전의 수

    # last_box_num이 전체 상자 개수 n보다 크면 해당 자리는 빈 공간
    if last_box_num > n:
          answer -= 1

    return answer
```

직접 배열을 만들지 않고 숫자의 규칙성을 이용해서 추상적으로 구현한점이 놀라웠다...
왜 내 머릿속에는 이런게 안그려질까..

내일 일단 다시 풀어보자.. 그 때서야 설명을 이어갈 수 있을거 같다.
