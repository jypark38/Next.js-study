## 사전 작업

글을 선택하고 있지 않을때 update, delete가 안보이는게 맞다.

선택한 글에서만 보이면 좋을듯

update를 누르면 update할 라우터로 가는게 맞다.

useParams : client hook

- layout.js 의 일부분만 클라이언트 컴포넌트로 만듣ㄹ기
- 컴포넌트로 분리해서 use client 지정

<hr></hr>

## update

기능 : create & read

create : create 페이지 내용
read : 기본으로 서버컴포넌트니까 걍 새로 작성

그냥 리액트 코드 전개하듯이 작성

onSubmit에 router.refresh() 추가하여 새로고침 시킨다.

### **문제점**

수정 요청을 했지만, redirect된 페이지에 수정사항이 반영안됐다.

상세보기 페이지에 cache를 끄자.

```js
{
  cache: "no-cache";
}
```

<hr></hr>

## delete

options = {
method : 'DELETE'
}
