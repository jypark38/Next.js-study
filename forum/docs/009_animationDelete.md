애니메이션 주기

1. 애니메이션 동작전/동작후 스타일 결정

- 동작 전 : opacity : 1
- 동작 중 처리 : transition
- 동작 후 : opacity : 0

2. 삭제 후에 투명해지기만 하니까 없애줘야함

### 서버로 데이터 보내는법

1. fetch : POST요청 body에 넣기
2. form은 Input에 넣기
3. `fetch("/api/test?데이터이름=값");` query string

- 장점 : get요청도 데이터 전송 가능, 간단함
- 단점 : 데이터가 많으면 더럽다.

4. dynamic route방식 (url 파라미터 기법)

- /api/abc/아무문자

## 해볼만한거

- querystring, url parameter로 기능 다시 만드러보기
