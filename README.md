# Tooltip React

React와 TypeScript로 만든 커스터마이징 가능한 툴팁 컴포넌트 라이브러리입니다.

## 특징

- 🎯 다양한 위치 옵션 (top, bottom, left, right 및 각각의 start/end 변형)
- 🎨 완전한 커스터마이징 (색상, 폰트 크기, 배경색, 간격)
- 📝 HTML 콘텐츠 지원
- ✨ 부드러운 애니메이션 효과
- 🔧 TypeScript 지원

## 설치

```bash
npm install
```

## 사용법

### 기본 사용

```tsx
import Tooltip from "./components/ui/Tooltip";

function App() {
  return (
    <Tooltip label="안녕하세요">
      <button>호버하세요</button>
    </Tooltip>
  );
}
```

### HTML 콘텐츠

```tsx
<Tooltip label="안녕하세요<br/>안녕하세요<br/><strong>안녕하세요</strong>">
  <button>HTML 툴팁</button>
</Tooltip>
```

### 위치 설정

```tsx
<Tooltip label="안녕하세요" position="top">
  <button>위쪽 툴팁</button>
</Tooltip>

<Tooltip label="안녕하세요" position="bottom-start">
  <button>아래쪽 시작 툴팁</button>
</Tooltip>
```

**사용 가능한 위치 옵션:**

- `top`, `top-start`, `top-end`
- `bottom`, `bottom-start`, `bottom-end`
- `left`, `left-start`, `left-end`
- `right`, `right-start`, `right-end`

### 커스터마이징

```tsx
<Tooltip
  label="안녕하세요"
  position="top"
  color="#fff"
  background="#585858"
  fontSize={16}
  offset={10}
>
  <button>커스텀 툴팁</button>
</Tooltip>
```

## Props

| Prop         | Type               | Default     | Description                                                   |
| ------------ | ------------------ | ----------- | ------------------------------------------------------------- |
| `label`      | `string`           | `""`        | 툴팁에 표시할 텍스트 (HTML 지원)                              |
| `position`   | `string`           | `"top"`     | 툴팁 위치 (top, bottom, left, right 및 각각의 start/end 변형) |
| `color`      | `string`           | `"#fff"`    | 툴팁 텍스트 색상                                              |
| `fontSize`   | `string \| number` | `"14"`      | 툴팁 폰트 크기 (px)                                           |
| `background` | `string`           | `"#585858"` | 툴팁 배경색                                                   |
| `offset`     | `number`           | `10`        | 툴팁과 요소 사이의 간격 (px)                                  |
| `children`   | `ReactNode`        | -           | 툴팁이 적용될 요소 (필수)                                     |

## 개발

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드

```bash
npm run build
```

프로덕션 빌드를 생성합니다.

## 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 링크

- [GitHub Repository](https://github.com/dochoul/tooltip-react)
