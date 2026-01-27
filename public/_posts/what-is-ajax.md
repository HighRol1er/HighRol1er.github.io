---
title: AJAX + XML 개념정리
tags: [AJAX]
date: 2026-01-27
---

# AJAX (Asynchronous JavaScript And XML)

AJAX는 JavaScript의 라이브러리 중 하나이다.

브라우저가 가지고 있는 내장 객체인 `XMLHttpRequest`를 이용해서 전체 페이지를 새로고침 하지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법이다.

> XHR (XMLHttpRequest)  
> XHR은 웹 브라우저 내 JavaScript가 웹 서버와 비동기적으로 데이터를 주고받을 수 있게 해주는 API

> ![info]
> AJAX 어플리케이션은 데이터를 전송하기 위해 XML 뿐만아니라, 일반 텍스트나, JSON 데이터도 포함!  
> 요즘은 대부분 JSON을 사용하지만, 역사적인 이유로 AJAX라고 부르고 있음

## XHR (XMLHttpRequest)

## AJAX 예시 (과거의 GET 요청)

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data');
xhr.onload = function() { ... };
xhr.send();
```

```js
// 현대 방식
fetch('/api/data')
  .then(response => response.json())
  .then(data => { ... });
```

둘 다 **페이지 새로고침 없이 서버와 통신한다**는 목적을 가지고 있음

## How AJAX Works?

![ajax1](what-is-ajax/what-is-ajax1)

# XML도 간단하게

XML (eXtensible Markup Language)  
데이터를 구조화하고 저장하며 전송하기 위한 마크업 언어

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

```xml
<person>
  <name>홍길동</name>
  <age>25</age>
  <city>서울</city>
</person>
```
