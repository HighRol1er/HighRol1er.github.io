만약 어떤 수의 약수를 구하고 싶을 때

```py
factor = []
# n의 약수를 구하시오
i = 1
# i가 나누는 수를 넘으면 안됨 10이라는 수의 약수의 최대 수는 10이 끝이기 때문에 - 무한루프 방지
while i <= n:
    if n % i == 0:
        factor.append(i)
    i += 1
```

이렇게도 구할 수 있지만 이럴경우 모든 수를 나누기 때문에 1억개가 넘어간다면 0(n)이 됨
이때는 약수의 대칭성을 사용할 수 있음

```py

factor = []
for i in range(1, (n ** 0.5) + 1):
    if n % i == 0:
        factor.append(i)
        if i * i != n:
            factor.append(n // i)
```

이미 작성하셨던 sum을 이용한 접근법은 "어디가 제일 효율적일까"를 전체적으로 고민하는 방식(Brute-force에 가까운 고민)이었지만, 이 문제는 **"아직 안 칠해진 가장 왼쪽 칸"**을 발견하는 즉시 **"거기서부터 롤러를 오른쪽으로 쭉 미는 것"**이 항상 최선의 결과를 가져옵니다.

💡 왜 가장 왼쪽부터 칠해야 할까요?
가장 왼쪽에 칠해야 할 칸(section[0])을 무시하고 다른 곳(중간 등)을 먼저 칠한다고 해서, 나중에 그 첫 번째 칸을 칠할 때 드는 횟수를 줄일 수 있는 방법은 없기 때문입니다. 어차피 한 번은 롤러를 대야 한다면, 가장 왼쪽 칸을 롤러의 시작점으로 잡는 것이 그다음 칸들을 최대한 많이 포함할 수 있는 가장 유리한 선택이 됩니다.

```py
def solution(n, m, section):
answer = 0

    current_paint_num = 0

    for s in section:
        if s > current_paint_num:
            answer += 1
            current_paint_num = s + m - 1

    return answer
```

# 완전 탐색 알고리즘

```py
def generate_permutations(arr, n):
    result = []
    visited = [False] * len(arr)  # 원소 사용 여부를 체크

    def backtrack(current_path):
        # 1. 종료 조건: 선택된 원소의 개수가 n개일 때
        if len(current_path) == n:
            result.append(tuple(current_path))
            return

        # 2. 반복문을 돌며 원소 선택
        for i in range(len(arr)):
            if not visited[i]:  # 아직 사용하지 않은 원소라면
                visited[i] = True
                current_path.append(arr[i])

                # 다음 원소를 선택하러 재귀 호출
                backtrack(current_path)

                # 3. 백트래킹 (상태 복구): 다음 경우의 수를 위해 되돌려 놓음
                current_path.pop()
                visited[i] = False

    backtrack([])
    return result

# 실행 예시
arr = [1, 2, 3]
N = 2
print(generate_permutations(arr, N))
```
