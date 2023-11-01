## Link말고 다른 방법으로 페이지 이동하기

Link 태그 말고 useRouter 쓰는 이유

1. `router.back()` 뒤로가기
2. `router.forward()` 앞으로 가기
3. `router.refresh()` 새로고침 (바뀐내용만)

- nextjs soft refresh 참고

4. `router.prefetch('url')` 페이지 로드에 필요한 모든 파일들을 미리 로드해놓는다.

- Link 태그에서 자동으로 동작한다.
  - 페이지에 나타나면 미리 로드해준다.
  - 모든 Link를 prefetch 할 필요 없으면 false로 바꾸기
  - 개발중에는 prefetch 여부 확인 안댐

server component에서 위 기능을 쓰고싶으면 client component 를 만들어놓고 server component에 넣기

5. 그외

- usePathname() : 현재 url 출력
- useSearchParams() : search parameter 출력
- useParams()
