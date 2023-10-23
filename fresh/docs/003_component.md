길고 복잡한 html을 component화 하여 반복해서 쓰기

만드는 법

```jsx
   function CartItem() {
    return (
        <!-- 축약할 HTML -->
    )
   }
```

더러운 덩어리를 한 단어로 축약시키면 가독성도 좋고 관리도 좋아짐

Q. 보여줄 상품이 1000개면?

컴포넌트를 map으로 반복생성 하면 됨

컴포넌트 단점 : 컴포넌트끼리 데이터 공유 귀찮음

컴포넌트는 보통 재사용이 잦은 html 덩어리들을 만드는게 좋다

### Next.JS의 컴포넌트

1. server component

- 아무데나 대충 만든거
- html에 자바스크립트 인터렉션 기능 넣기 불가능
- react hook 사용 불가
- 장점

  - 로딩속도 빠름
  - SEO 유리

- **큰 페이지 추천**

2. client component

- 파일 상단에 'use client'를 넣고 만든거
- 인터렉션 기능 가능
- react hook 사용 가능
- 단점

  - 로딩속도 느림
    - 자바스크립트 많이 필요해서
    - hydration 필요
    - hydration : html을 유저에게 보낸 후에 js로 html을 다시 읽고 분석하는 일

- **JS기능이 필요한 곳 추천**

### 컴포넌트 분리
