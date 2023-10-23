url path : REST API 원칙 참고하면 좋음

path이름으로 app하단에 폴더 생성 후 page.js 생성

`import Link from "next/link";`
{Link} 붙이면 오류;;

## page.js 동작 원리

1. page.js를 보여줄 때 layout.js가 옆에 있으면 그걸로 감싼다
2. 상위 폴더에 layout.js가 있으면 그걸로 1번 더 묶는다.
3. 상위의 상위 폴더에 layout.js가 있으면 그거로 한번 더 묶는다.

페이지 변경과 상관없이 계속 보여줄 UI는 layout.js를 쓰면 편할것이다.

ex. navbar 같은건 page.js마다 만드는것 보단 layout.js가 적절함
