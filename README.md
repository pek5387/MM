Typescript로 진행 될 MM 홈페이지 git 공유소입니다

## files

-   [Hooks] - 리액트 커스텀 훅
-   [service] - API 설정 및 모음
-   [UI] - 공통 컴포넌트
-   [store] - react-redux store
-   [utils] - 공통 함수
-   [Vaildation] - Vaildatio 함수

## style

CSS-in-JS [Styled Components](https://styled-components.com/)

```sh
npm i styled-components
```

## Atomic Design Pattern

> 아토믹 디자인 패턴은
> Aoms(원자), Molecules(분자), Organisms(유기체), Templates(템플릿)으로
> 구성되어지고 최종적으로는 Pages 단위가 됩니다.
> 일관된 UI를 만들고 유지보수성을 향상시켜줍니다.

🍅 Atom(원자)

-   원자은 진짜 말그대로 가장 작은 단위의 컴포넌트이다.
-   원자는 어떠한 context가 주어지든지 이에 해당하는 컴포넌트가 생성될 수 있어야 한다.
-   때문에 다양한 state를 다양하게 가지고 있어야하며 추상적이지만 최대한 포용할 수 있게 되어야 설계 되어야 한다. Ex) button: disabled, hover, different sizes, etc.
-   원자는 마진이나 위치값을 가지고 있지 않는다.

🥫 Molecule(분자)

-   원자를 엮어 조금 복잡한 단위의 분자가 생성된다.
-   분자는 분자만의 프로퍼티를 가지고 있을 수 있고 이를 활용해 원자에 기능을 만들어 줄 수도 있다.
-   분자가 원자의 위치값을 지정하기도 한다.

🍝 Organism(유기체)

-   유기체는 분자를 엮어 만들어서 생성되고 때로는 분자가 되지 않은 원자가 엮이기도 한다.
-   유기체가 완성되면 컴포넌트가 최종 모습을 가지게 된다.
-   하지만 여전히 contents에 따라 최대한 재사용성 높게 개발하는 것이 중요하다!
-   유기체는 분자와 원자의 위치값을 조정한다!

📄 Template(템플릿)

-   템플릿은 만들어진 유기체와 컴포넌트의 positions, placements을 정해주는 역할을 한다.
    단, 템플릿에는 Styling이나 Color는 들어가지 않는다.
-   템플릿의 역할은 페이지의 그리드를 정해주는 역할 뿐이다.

🍱 Page(페이지)

-   페이지는 템플릿을 이용해서 각 그리드에 컴포넌트를 그려서 디스플레이한다.
