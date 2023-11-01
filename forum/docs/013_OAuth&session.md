## 회원기능 만들기 : OAuth + session방식 사용하기

Next-auth 라이브러리는 기본이 JWT다.

- 유저 세션데이터를 디비에 저장해두지 않고 JWT만 유저에게 보낸다.

session도 가능

- DB adapter 사용하면 됨

- DB adapter를 켜놓으면

1. 첫 로그인시 자동회원가입시켜 유저정보를 DB에 보관
2. 로그인을 하면 자동으로 디비에 유저가 언제 로그인 했는지 세션정보 보관
3. 현재 로그인된 유저 정보가 필요하면 디비에서 세션 정보를 조회
4. 로그아웃시 유저 세션정보는 DB에서 삭제

그래서 가입된 유저정보를 DB에 저장하는게 필요하거나 유저 로그인상태를 엄격하게 관리하고 싶으면 DB adapter 기능을 사용해봅시다.

`npm install @next-auth/mongodb-adapter`
안대면
`npm uninstall mongodb`
`npm install mongodb@4`
이후 실행

다른 DB adapter 쓰고싶으면 그 adapter 설치해서 하기

이렇게 하면 우리 DB에 새로운게 생겼을거임

1. sessions : 현재 로그인된 유저 세션 정보 저장용
2. accounts : 가입된 유저의 계정정보, 유저끼리의 구분은 이메일로 한다.
3. users : 현재 가입된 유저 정보들

이렇게 돼있는 이유

한 사람이 여러 계정을 가질수 있어서그렇다.

```
Q. users vs accounts ?

- 어떤 유저가 github으로도 가입하고 google로도 가입한 경우
  - google : test@test.com
  - github : test@test.com

이런 경우 users 콜렉션엔 test@test.com 이메일을 가진 document 한개만 생성

accounts 콜렉션엔
1. test@test.com + Github이 써있는 document
2. test@test.com + Google이 써있는 document
이렇게 2개가 생성됩니다.

이런식으로 유저는 1명이지만 계정은 2개 이상 생성된다
(이메일이 같으면 같은 유저라고 자동으로 간주합니다)
```

이렇게 여러 계정이 있을때, accounts에는 플랫폼 별로 계정들이 있을거임
user에는 하나의 도큐먼트만 발행돼있을거다

유저끼리의 구분은 email로

같은 데이터베이스에서 관리하고 싶다면?
database.js 에 ?retryWrite 쿼리 앞에 해당 디비 이름을 넣어놓으면 댄다

<hr>

### 회원기능이 들어간 게시판

- 유저 조회를 해야하는 기능이 들어갈 때.

  - 만약 글 발행이나 무언가 할 때 author같은 유저정보를 동봉하여 통신하면 문제가 생긴다
  - 프론트에 있는 모든건 유저가 위조할 수 있기 때문이다

- 유저 정보 관련된거는 서버에서 하자

<hr>

## 본인이 쓴 글만 수정/삭제하려면?

- 유저 정보를 체크하면 된다.

  - 요청자가 글쓴사람과 일치하는지 비교하는 기능을 서버에 넣자.
  - 글 발행시 글쓴이 정보도 디비에 저장해야할듯

- 글쓴이 정보 저장하기
  - 유저에게 보내라고 하면 보안상 이슈가 있으니, 서버에서 처리하자
    `const session = await getServerSession(req,res, authOptions);`
  - 위 코드 이용

<hr>

## 숙제 삭제기능 업그레이드 하기
