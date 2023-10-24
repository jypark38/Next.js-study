마운트 : html이 먼저 보여지고 useEffect가 실행된다.

검색엔진 노출에 용이하려면, 서버컴포넌트에서 데이터를 전달하는식이 낫다?

### ??

Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
{\_id: {}, title: ..., content: "11", date: ...}

??

### Ajax

일반적인 form 서브밋은 새로고침이 일어난다

ajax로 요청하면 새로고침은 안일어난다

JSON.stringify 로 보냈으면 JSON.parse()로 한번 풀어야 프로퍼티 문법으로 부를수 있다.

DELETE 요청인데 바디로 데이터가 안가면 POST로 대체

<hr>

### AJAX 에러처리 연습하깅
