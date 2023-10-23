### Routing

`http://a.com/dashboard/analyitcs/`

```
a.com : domain
dashboard : segment
analytics : segment -> path를 이루고 있는 요소
dashboard/analytics : path

라우팅 : 경로에 따라 어떤 콘텐츠를 어떤 방식으로 보여줄지 결정하는 것
```

path에 맞는 라우팅을 하려면, path로 폴더를 만들고 page.js 를 생성하는 것이 기본

1. create로 접속하면 app폴더 하위에 create가 있는지 확인하고, page.js를 찾는다.
2. create폴더가 layout.js를 갖고 있다면 page.js의 내용을 create/layout.js 와 결합한다.
3. layout.js가 있으면 결합된 layout을 없다면 page.js의 내용을 뱉는다. 그리고

   부모 폴더에서 layout.js를 찾고 그것의 children에 결합한다.

만약 라우팅에 있어서 segment에 동적인 id 같은게 들어간다면? (dynamic routing)

1. 상위 segment (Read) 폴더를 만든다.
2. 하위 폴더로 id를 부여하고 싶으면 [id] 폴더를 만든다.
3. id에 따라 동적으로 콘텐츠를 끌고갈라면?
4. props.params 이용
