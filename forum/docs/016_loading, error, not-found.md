### Loading

로딩중 UI 넣기

ssr의 단점 : 페이지 이동시의 새로고침이 됨

Next.js에선 페이지 이동해도 새로고침이 잘 안됨

Link등으로 페이지 이동시 새로고침이 아니라 꼭 필요한 부분만 바뀌도록 세팅되어 있어서 부드럽게 할 수 있다.

이전 페이지 레이아웃을 최대한 유지하면서 이동하려고 해서 예전처럼 다시 그린다는 느낌은 없다.

페이지가 크거나 인터넷이 느리면 페이지 이동시 1~2초의 딜레이가 생기기 마련인데, 대기시간동안 아무 반응이 없으면 UX적으로 안좋을 수 있다.

그래서 로딩 UI를 만들어두면 편하다.

page.js 옆에 loading.js 라는 이름으로 파일을 만들어두면, Page.js 로드 전에 loading.js 내용을 보여준다.

컴포넌트를 만들고 로딩중에 보여줄 UI를 넣자

client component 사용가능

ref) react에서 Suspense 랑 같은 역할을 한다.

### error

페이지 로드시 에러가 나는 경우

- 서버가 죽음
- DB가 죽음
- 데이터를 못가져옴

이런 경우 if나 try catch로 처리해도 되겠지만, error.js를 만들어둬도 된다.

page.js에서 에러가 날 경우 error.js 내용을 옆에있는 page.js에 대신 보여준다.

```js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>오 이런 에러남</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        다시시도
      </button>
    </div>
  );
}
```

1. error.js에서는 항상 client component만 넣을 수 있따.
2. error 라는 props를 출력해보면 에러 내용을 알려준다.
3. reset 이라는 props를 호출하면 해당 페이지를 다시 로드해준다.

Q. error.js 파일이 옆에도 있고 상위에도 있다면?

- page.js에서 에러가 났는데 옆에 error.js 파일이 없으면 상위폴더로 이동하면서 error.js를 찾는다.
- 가장 가까운 error.js 파일을 찾아서 적용해준다.
- 귀찮으면 app폴더에 하나 만들어둬도 된다.

- loading.js도 동일

<hr>

### global-error.js

layout.js 내용에서 에러가 나면, layout.js 옆에있는 error.js말고 상위에 있는 error.js 를 보여준다.

왜냐면, Next.js에서 페이지를 만들 때 같은 폴더안에 layout.js, error.js, loading.js, page.js 컴포넌트들이 있으면

layout.js 안에 error.js 안에 loading.js 안에 page.js 컴포넌트를 차레로 감싸는 식으로 보여줌

```js
<Layout>
  <Error fallback={자식들 내용이 에러시 보여줄 error.js 내용}>
    <Loading fallback={자식들 내용이 로딩시 보여줄 loading.js 내용}>
      page.js 내용~~
    </Loading>
  </Error>
</Layout>
```

layout.js 안에서 에러가 나면 옆에 있던 error.js 보여주고 그런거 못합니다.

layout.js 상위에 있던 error.js 보여줌

근데 사이트 루트에 있던 layout.js 에서는 에러가 나면 대신 보여줄 error.js가 없으니까 global-error.js 파일이라는게 있음

최상위 layout.js 옆에 global-error.js 파일을 만들어두면 layout.js 안에서 에러시 보여준다.

### not-found.js

없는 url로 접속하는 경우 유저에게 '페이지가 없다' 고 알려주는게 좋다 -> 404 페이지임

없는 url을 입력하면 next.js 에선 자동으로 404 Page not found 페이지가 출현한다

-> 직접 만들 필욘 없음

하지만 상세페이지 url을 이상하게 입력하면 에러부터 나올거임

에러 대신 404라던가 다른 페이지를 보여주고 싶으면 분기처리를 하면 된다
