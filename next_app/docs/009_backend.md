백엔드를 구축하고 백엔드의 데이터를 동적으로 구축하려한다.

Nextjs은 백엔드까지 동시에 제공하는 full stack framework입니다.

Route Handlers를 사용하면 별도의 백엔드를 구축하지 않고 Nextjs API 서버까지 구축할 수 있습니다.

https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering

이 수업에서는 Json-server d이용
`npx json-server --port 9999 --watch db.json`

db.json이 루트에 생긴다.

데이터를 요기에 넣어두는 식으로 동작할거임

새로운 data를 넣고 싶으면 직접 수정할 수 있다.

간단히 topics 넣어보고 개발자도구로 테스트해보기

```
fetch('http://localhost:9999/topics')
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
})
```
