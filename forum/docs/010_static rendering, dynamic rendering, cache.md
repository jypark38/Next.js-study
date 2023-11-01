## 배포

1. `npm run build`

- 코드 짠걸 html,js,css 파일로 바까줌

- 페이지 route 기호
  - o : static rendering
  - lambda : dynamic rendering

2. `npm run start`

- 개발 서버가 아니라 실제 서버가 띄워진다.

<hr>

## static rendering

페이지는 기본적으로 static rendering

**npm run build 할 때 만든 html 페이지 그대로 유저에게 보낸다.**

페이지 안에 기능이 머 없음

이런 페이지는 미리 완성본을 만들었으니까 전송이 빠르다

- /list : static rendering이 되면 안되는데 static rendering 표시가 돼있다.
  - 이런건 이상하니까 dynamic rendering으로 수정해보자

<hr>
- dynamic rendering으로 바꾸려면?
  - `export const dynamic = 'force-dynamic'` 지정

## dynamic rendering

유저가 페이지 접속마다 html 새로 만들어서 보내줌

- 단점
  - 유저가 접속할때마다 다시 보내줘야하니까 서버/DB 부담이 증가
    - 이게 싫으면 캐싱기능
    - 페이지 캐싱 : 페이지 완성본을 잠깐 저장해두고 재사용
    - GET 요청 결과 캐싱 : GET 요청 결과를 잠시 저장해두고 재사용 -

<hr>

## get cache

- 캐시해놓고 싶으면?

```js
await fetch("/url", { cache: "force-cache" });
// 디폴트로 동작할 수 있따.
```

- 만약 캐시해놓는게 싫다면?

```js
await fetch("/url", { cache: "no-store" });
```

이러면 매번 서버로 요청해서 새로 가져온다.

실시간 데이터가 중요하면 이렇게 하면 된다

- 주기마다 캐싱된 데이터를 갱신하고 싶다면

```js
await fetch("url", { next: { revalidate: 60 } });
```

60초마다 갱신

- DB출력 결과 캐싱 가능? -> 가능

- 방법1

  - DB코드를 fetch로 바꿔버리기

- 방법2
  - revalidate 예약변수 써두면 페이지 단위 캐싱 가능
  - 페이지 상단에 아래 지정
    ```js
    export const revalidate = 60;
    ```
