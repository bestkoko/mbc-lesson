# 파비콘 추가 프롬프트

## 목적
`index.html` 문서에 `favicon.svg` 파일을 파비콘으로 설정합니다.

## 프롬프트
`@index.html 문서에 @favicon.svg를 파비콘으로 넣어줘.`

## 적용 코드
```html
<link rel="icon" type="image/svg+xml" href="favicon.svg">
```

## 참고 사항
- SVG 파일을 파비콘으로 사용할 때는 `type="image/svg+xml"` 속성을 지정하는 것이 좋습니다.
- 브라우저 호환성을 위해 `head` 태그 내부에 위치시킵니다.
