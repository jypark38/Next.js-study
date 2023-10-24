## **글 조회 기능**

### await이 뭐냐면

자바스크립트에선 처리가 늦게되는 코드들이 간혹 존재합니다.

컴퓨터는 그런 코드들을 발견하면 제껴두고 바로 다음줄을 실행하려고 하는데

그게 싫으면 왼쪽에 await 붙이거나 오른쪽에 .then() 붙이거나 해서 써야합니다.

아무데나 붙일 수 있는건 아니고 await 붙일 수 있는 것들이 정해져있습니다. (전문용어로 Promise 뱉는 곳에만 가능)

실은 mongodb 만든 사람이 mongodb관련 함수들 왼쪽엔 await 붙여쓰라고 하니까 붙이는 것일 뿐입니다.

<hr>

## **상세 페이지 만들기**

1. 글 제목 누르면 상세페이지로 이동
2. 상세페이지 방문시 DB에서 글 꺼내서 보여주기

상세페이지 url?

- 네이버참조

- dynamic route

  - path하단에 [id] 같이 대괄호로 동적인 path 네이밍

  - **id가 아니여도 됨**

`let result = await db.collection("post").findOne({ title: "안녕" });`

findOne : 해당되는 내용과 일치하는 하나를 찾아서 가져와줌

\_id 키로 찾을거니까

```js
{
  _id: new ObjectId(props.params.id);
}
```

그리고 동적인 Path는 props.params에서 가져오기

dynamic route로 만든 URL에 적은 문자를 가져오고 싶으면 컴포넌트에서 params 출력해보면 됩니다.
