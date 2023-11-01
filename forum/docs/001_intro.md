게시판 기능 할줄알면 다른거도 다 됨

### 관계형 db

1. postgreSQL
2. MySQL
3. ORACLE

- db를 엑셀처럼 표로 저장할 수 있다
- 안정적인 데이터 저장과 운영이 필요한 곳에서 쓰면 좋다

### 비관계형 db

1. mongoDB
2. CloudFireStore
3. cassandra

- 저장방식 제각각

  - mongoDB : JS object처럼 저장 가능, 분산처리 잘해줌

- SQL언어, 스키마 정의, 정규화 같은게 거의 필요 없다
- 분산처리를 기본적으로 잘해서 주로 SNS 서비스처럼 많은 데이터 입출력이 필요할 때도 강점이 있다.

## mongoDB

클라우드에서 호스팅 받기

mongodb.com 가입하면 무료 용량 제공

강의 노트대로 가입

### 데이터 저장 방식

collection을 하나 만들어서 그 안에 document를 만들고 데이터를 기록하는 식으로 데이터들을 저장한다.

collection : 폴더 느낌

document : 파일 느낌
