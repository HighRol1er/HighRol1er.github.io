---
title: Websocket 데이터 전송 분석
tags: [Websocket]
date: 2026-01-27
---

# 1. 축약, 압축없이 스트리밍 했을 때

- 키축약 X
- zlib 압축 X

![ws-opt](ws-opt/ws-opt1.webp)

문자 65990 → 66KB

# 2. 필드명만 축약하고 스트리밍 했을 때

- 키 축약 O
- zlib 압축 X

![ws-opt](ws-opt/ws-opt2.webp)

문자 40455 → 40KB

# 3. 필드명, 압축하고 스트리밍 했을 때

- 키 압축 O
- zlib 압축(바이너리) O

![ws-opt](ws-opt/ws-opt3.webp)

11.2KB로 압축
