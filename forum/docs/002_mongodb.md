collection

1. database : 하나의 프로젝트

2. collction : 폴더
   - 왜 폴더를 만듬?
   - 컬렉션을 만들고 document를 만들고 그 안에 object를 만들어서 저장할 수 있어서

### mongodb setting

- `npm install mongodb`
- 연결
  ```jsx
  const client = await MongoClient.connect("DB접속URL~~", { useNewUrlParser: true });
  <!-- 접속 url -->
  const db = client.db("forum");
  <!-- db이름 -->
  db.collection('post').find()
  <!-- 실행하면 mongodb 데이터 출력해줌 -->
  ```

connect해서 url받고 아이디 비밀번호 채우기

### 주의사항

.connect() 자주하면 안댐

서버 띄울때 한번만 실행하면 된다.

app폴더 밖에 폴더 만들기

`util/database.js` 참고

몽고디비 만든 사람들이 nextjs에서 쓸때 이렇게 쓰라고 만들어놓음

설명 database.js

MongoDB말고 다른 데이터베이스 사용해도 방법은 비슷합니다.

- DB 조작도와주는 라이브러리 설치하고

- DB 연결하는 코드 셋팅해놓고

- 라이브러리 사용법 대로 DB 입출력하는 코드 사용하면 됩니다.

(참고) DB입출력하는 코드는 server component 안에서만 사용합시다.

client component 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문에 그렇습니다.

find : 해당 콜렉션의 모든 document를 가져온다.
