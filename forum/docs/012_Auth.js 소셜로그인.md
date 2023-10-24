github 소셜 로그인

github에 허락 받아야한다.

시크릿 키,비번 받기

## Next-auth 세팅

`npm install next-auth@4.21.1`

api/auth/[...nextauth].js 생성

[작성 내용 해당 파일 참고]

사용법은 next-auth 설명서

````js
<button
  onClick={() => {
    signIn();
  }}
>
  로그인
</button>
```
````

### 로그인 유저 정보 출력하기

- serverComponent
  - getServerSession() 호출

## 숙제

- hint
  - 삼항조건연산자
