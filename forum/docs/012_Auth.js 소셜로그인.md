github 소셜 로그인

github에 허락 받아야한다.

시크릿 키,비번 받기

## Next-auth 세팅

`npm install next-auth@4.21.1`

api/auth/[...nextauth].js 생성

[작성 내용 해당 파일 참고]

사용법은 next-auth 설명서

소셜 로그인은 기본적으로 JWT방식이다.

- secret 란에 JWT 생성용 암호를 맘대로 길게 입력하면 된다.
- 파일 암호같은거 입력할 때 .env 파일 같은거 쓰면 안전함

```js
<button
  onClick={() => {
    signIn();
  }}
>
  로그인
</button>
```

### 로그인 유저 정보 출력하기

- client component 의 경우

  - <SessionProvider> 라는걸 import 해와서 부모컴포넌트를 감싸면 자식 컴포넌트들은 useSession() 함수를 이용할 수 있다.
  - SessionProvider로 감싸놓으면, 그 안에 들어가는 client component 들은 로그인된 유저 정보를 출력해볼 수 있따.

    ```js
    "use client";

    import { useSession } from "next/auth/react";
    export default function Page() {
      const session = useSession();
      if (session) {
        console.log(session);
      }
    }
    ```

  - useSession을 사용하면 그 자리에 지금 로그인한 유저 정보가 남는다.
  - 근데 보통 server component에서 유저 정보를 가져와서 client component에 전송해주는게 나을 수 있다.
    - useSession은 html을 다 보여주고나서 한 박자 늦게 실행될 수 있다.

- serverComponent
  - getServerSession() 와 authOptions로 컴포넌트 안에 유저 정보를 남길 수 있다.

## 숙제

- hint
  - 삼항조건연산자
