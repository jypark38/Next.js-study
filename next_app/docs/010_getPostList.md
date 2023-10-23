### Server Component vs Client Component

1. Client Component

   ```
   useState
   useEffect
   onClick
   onChange
   useRouter
   useParams
   ```

2. server Component

   ```
   secure data
   cookie
   header
   ```

서버컴포넌트에서는 클라이언트 컴포넌트의 훅을 이용할 수 없음

nextjs에서 특별한 조치를 취하지 않으면 Server Component로 간주된다.

사용자와 인터렉션이 없으면 서버컴포넌트로 만드는게 유리하다. (ex. 단순히 보여주기만 하는거)

사용자와 인터렉션이 있는건 클라이언트 컴포넌트로 만드는게 유리하다.

<hr/>

### 기본적인 통신 코드

```
const [topics, setTopics] = useState([]);
useEffect(() => {
  fetch("http://localhost:9999/topics")
    .then((res) => res.json())
    .then((result) => {
      setTopics(result);
    });
}, []);
```

error : useState는 오직 클라이언트 컴포넌트에서만 동작한다.

nextjs는 컴포넌트를 기본적으로 서버클라이언트로 간주

이 모듈을 클라이언트 컴포넌트로 바꾸고 싶으면 맨위 "use client" 추가

metadatas 는 서버컴포넌트에서만 사용된다.

클라이언트 컴포넌트에서 쓸라해서 오류난다.

<hr/>

### **클라이언트 컴포넌트로 변경해서 동작키게 될 때 생기는 아쉬운점**

useEffect로 데이터 패칭한다는 점

자바스크립트를 끄면 서버 통신이 안됨

데이터베이스와 관련된 보안상 이슈가 생긴다

<hr/>

서버 컴포넌트로 변경

컴포넌트 자체를 async를 걸고 통신시킨다.

서버 컴포넌트는 서버 쪽에서 코드를 실행한다.

그리고 만들어진 결과를 .next 폴더에 저장해두고 정적인 상태를 클라이언트로 전송하게 됨.
(관련된 자바스크립트는 빠진 상태)

장점

- 용량 줄어듬
- 데이터 통신이 빨라진다.
- 서버쪽에서 렌더링을 끝내고 html을 보내주니까 자바스크립트를 꺼도
  서버쪽에서 동적으로 생성한 내용도 클라이언트에서 정적으로 보여준다.
