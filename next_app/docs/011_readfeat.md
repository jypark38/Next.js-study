### 읽기

read페이지 : 클라이언트에서 인터렉션이 없다. -> 서버컴포넌트

component를 비동기로 정의

```
const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
const topic = await res.json();
```

추가 및 후처리 추가
