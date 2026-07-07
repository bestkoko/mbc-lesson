##dycjd
너는 UI/UX 디자인을 픽셀 퍼펙트(Pixel-Perfect) 수준의 웹 프론트엔드 코드로 변환하는 수석 프론트엔드 개발자야. 아래 제공하는 피그마 주소와 첨부된 이미지는 '당근(Karrot)' 스타일의 영상 생성 스토리보드 웹 서비스 UI 디자인이야. 이 디자인을 바탕으로 전통적인 MPA(Multi-Page Application) 방식의 바닐라(Vanilla) 웹사이트를 구축해 줘.

[참고 디자인 주소]
- Figma Link: https://www.figma.com/design/RM91maULXj4iJxm7lc0o9r/%EC%98%81%EC%83%81%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C-%EB%8B%B9%EA%B7%BC-%EC%98%81%EC%83%81%EC%83%9D%EC%84%B1--%EB%B3%B5%EC%82%AC-?node-id=4312-264&t=U0st4Zbtm88pokIW-4
(※ AI 환경에 따라 링크 접근이 제한될 수 있으니, 함께 첨부한 스크린샷 이미지의 시각적 레이아웃과 정렬을 최우선으로 반영할 것)

[기술 스택 및 아키텍처]
- HTML5, CSS3, Vanilla JavaScript만 사용할 것.
- React, Vue 등 SPA 프레임워크나 Tailwind, Webpack, Vite 같은 빌드 도구를 절대 사용하지 않는 '레거시 웹' 환경 기준.
- MPA 방식으로, 디자인의 각 화면(페이지)마다 별도의 독립적인 HTML 파일(예: index.html, list.html, create.html 등)을 생성할 것.
- 페이지 간 이동은 자바스크립트 라우팅이 아닌 순수 `<a href="...">` 태그를 통한 물리적 페이지 로드로 구현할 것.

[디자인 및 레이아웃 요구사항]
1. 첨부된 이미지의 시각적 계층 구조(레이어)와 정렬(Alignment)을 완벽하게 분석하여 시맨틱한 DOM 구조를 설계할 것.
2. 당근마켓의 브랜드 아이덴티티(주황색 포인트 컬러, 둥근 모서리, 깔끔하고 직관적인 여백)를 CSS로 완벽히 구현할 것. (관리를 위해 최상단에 CSS 변수 `:root` 사용)
3. 스토리보드 컷이나 리스트 항목이 일정한 간격을 유지하도록 Flexbox 또는 CSS Grid를 사용할 것.
4. 모든 HTML 파일에 공통으로 들어가는 UI(헤더, 사이드바 등)는 각 파일에 동일하게 하드코딩하여 삽입할 것.

[기능 및 인터랙션 요구사항 (Vanilla JS)]
1. 모든 HTML 파일이 공통으로 참조할 단일 `style.css`와 `script.js` 파일을 분리하여 작성할 것.
2. 모달(Modal) 창, 팝업, 탭 메뉴 등은 순수 바닐라 JS의 DOM 제어(`document.querySelector`, `addEventListener` 등)와 CSS 클래스 토글 방식(`classList.toggle`)으로 구현할 것.
3. 폼(Form) 요소가 있다면 `<form action="..." method="...">` 같은 전통적인 속성을 살려 마크업할 것.

[출력 형식]
- 필요한 여러 개의 HTML 파일들과 공통 CSS, JS 코드를 각각 명확히 구분해서 출력해 줘.
- 코드는 Replit 환경에 복사 붙여넣기만 하면 바로 정상 작동하도록 완성된 형태로 제공할 것.