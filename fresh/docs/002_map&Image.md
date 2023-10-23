array map 메서드를 활용한 목록렌더링

jsx에선 for문이나 if문 같은거 못씀

map 의 원리

```jsx
////
return <>{[<div>배열</div>, <div>배열</div>, <div>배열</div>]}</>;
```

이런 방식으로 코드를 짜면 `<div>배열</div>` 가 3개 생김
map의 리턴이 배열인걸 이용해서 그런듯

### Image 태그

`import Image from 'next/image'`

장점

- lazy loading
- 사이즈 최적화
- layout shift방지 : 이미지 로딩이 늦게 되는거 방지

제약조건 : image 임포트

단점1 : 외부 사이트이미지를 넣을땐 복잡하다
외부 이미지를 넣을때 url 과 함께 width, height를 미리 알고 잇어야한다.

단점2 : require('이미지경로') 이런거 써야댐

단점3 : next.config.js 에 이미지 관련 세팅도 해줘야함

### 그래서 최적화는 보통 다 만들고 하는게 좋다
