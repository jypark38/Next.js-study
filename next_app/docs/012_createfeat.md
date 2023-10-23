문제가 생기면 개발 서버 다시 열기

또 생기면

```
rm -rf .next
npm run dev
```

### client component

서버 컴포넌트에서는 onSubmit 이 불가능

상단에 "use client" 작성

글을 작성하고 작성한 글로 Redirection 시키려면?

```js
import { useRouter } from "next/navigation";
const router = useRouter();
router.push(`/read/${lastId}`);
```

해당 코드 적절한 위치에 추가

문제점 : 갱신이 제대로 안되고 잇음

- router.push를 사용하면 페이지 리로드 없이 사용자의 화면을 해당 페이지로 이동합니다.

- router.refresh를 사용하면 서버 컴포넌트를 서버 쪽에서 다시 랜더링해서 새로 고침할 수 있습니다.

- 여기서는 app/layout.js을 새로고침하기 위해서 사용된 코드입니다.

문제점 2 : cache

- router.refresh를 해도 글 목록이 갱신되지 않을거임.

  - 서버쪽에서 fetch를 사용하면 응답 결과를 저장하기 때문.

- 즉, 머물렀던 페이지에 다시 접속하면 cache 를 사용한다.
  - app/layout.js 의 데이터 로드하는 부분에 cache: no-cache 추가
