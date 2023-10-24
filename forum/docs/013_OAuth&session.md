## 회원기능 만들기 : OAuth + session방식 사용하기

기본으론 JWT다.

session도 가능

DB adapter 사용하면 됨

1. 첫 로그인시 자동회원가입 (DB보관)
2. 로그인을 하면 디비에 세션정보 보관
3. 현재 로그인된 유저 정보가 필요하면 디비에서 조회

`npm install @next-auth/mongodb-adapter`
안대면
`npm uninstall mongodb`
`npm install mongodb@4`
이후 실행

다른 DB adapter 쓰고싶으면 그 adapter 설치해서 하기

이렇게 하면 우리 DB에 새로운게 생겼을거임

1. sessions : 현재 로그인된 유저 세션 정보 저장용
2. accounts : 가입된 유저의 계정정보
3. users : 현재 가입된 유저 정보들

이렇게 돼있는 이유

한 사람이 여러 계정을 가질수 있어서그렇다.

이렇게 여러 계정이 있을때, accounts에는 플랫폼 별로 계정들이 있을거임
user에는 하나의 도큐먼트만 발행돼있을거다

유저끼리의 구분은 email로

같은 데이터베이스에서 관리하고 싶다면?
database.js 에 ?retryWrite 쿼리 앞에 해당 디비 이름을 넣어놓으면 댄다

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
