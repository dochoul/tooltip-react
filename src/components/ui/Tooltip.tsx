import { ReactNode } from "react";
import "./tooltip.scss";

interface Props {
  label: string;
  position?: string;
  color?: string;
  fontSize?: string;
  background?: string;
  children: ReactNode;
}

export default function Tooltip({
  label = "",
  position = "top",
  color = "#fff",
  fontSize = "12px",
  background = "#585858",
  children,
}: Props) {
  const makeTT = (
    event: React.MouseEvent<HTMLSpanElement> | React.FocusEvent<HTMLSpanElement>
  ) => {
    let ttBtn = event.currentTarget;

    // 툴팁 Division 생성
    let tt = document.createElement("div");
    tt.classList.add("gt-tooltip");
    tt.innerHTML = label;

    if (document.querySelector(".gt-tooltip")) {
      document.body.removeChild(document.querySelector(".gt-tooltip")!);
    }

    // 툴팁 Append
    document.body.appendChild(tt);
    tt.classList.add("gt-tooltip-show");

    // Caret(꼬다리) Division 생성
    let caret = document.createElement("div");
    caret.classList.add("gt-tooltip-caret");
    tt.appendChild(caret);

    // 툴팁 위치
    setPosition(ttBtn, tt);
  };

  const removeTT = () => {
    if (document.querySelector(".gt-tooltip")) {
      let tt: any = document.body.querySelector(".gt-tooltip");
      tt.classList.add("gt-tooltip-hide");
      tt.addEventListener("animationend", () => {
        document.body.removeChild(document.body.querySelector(".gt-tooltip")!);
      });
    }
  };

  /* 꼬다리 만들기 */
  const makeCaret = (caret: HTMLElement, position: string, bgColor: string) => {
    switch (position) {
      case "left":
        caret.style.borderWidth = "6px 0px 6px 6px";
        caret.style.borderLeftColor = bgColor;
        break;

      case "right":
        caret.style.borderWidth = "6px 6px 6px 0px";
        caret.style.borderRightColor = bgColor;
        break;

      case "top":
        caret.style.borderWidth = "6px 6px 0px 6px";
        caret.style.borderTopColor = bgColor;
        break;

      case "top-start":
        caret.style.borderWidth = "6px 6px 0px 6px";
        caret.style.borderTopColor = bgColor;
        break;

      case "top-end":
        caret.style.borderWidth = "6px 6px 0px 6px";
        caret.style.borderTopColor = bgColor;
        break;

      case "bottom":
        caret.style.borderWidth = "0px 6px 6px 6px";
        caret.style.borderBottomColor = bgColor;
        break;

      case "bottom-start":
        caret.style.borderWidth = "0px 6px 6px 6px";
        caret.style.borderBottomColor = bgColor;
        break;

      case "bottom-end":
        caret.style.borderWidth = "0px 6px 6px 6px";
        caret.style.borderBottomColor = bgColor;
        break;

      default:
        caret.style.borderWidth = "6px 6px 0px 6px";
        caret.style.borderTopColor = bgColor;
        break;
    }
    return caret;
  };

  /* 방향에 따라 툴팁 위치 변경 */
  const setPosition = (ttBtn: HTMLElement, tt: HTMLElement) => {
    let size;
    let ttBtnW;
    let ttBtnH;
    let ttBtnL;
    let ttBtnT;
    let ttW;
    let ttH;
    let caret;
    let caretW;
    let caretH;
    let offset = 10;

    //* Caret(꼬다리)
    caret = makeCaret(
      tt.querySelector(".gt-tooltip-caret")!,
      position,
      background
    );

    //* 툴팁 폰트 컬러 변경
    tt.style.color = color;

    //* 툴팁 폰트 사이즈 변경
    size = fontSize;

    //* 툴팁 배경 컬러 변경
    tt.style.background = background;

    //* 툴팁 폰트 크기 변경
    tt.style.fontSize = size;

    // 툴팁 요소: 너비, 높이, 좌표
    ttBtnW = Math.ceil(ttBtn.offsetWidth);
    ttBtnH = Math.ceil(ttBtn.offsetHeight);
    ttBtnL = Math.ceil(ttBtn.getBoundingClientRect().left);
    ttBtnT = Math.ceil(window.pageYOffset + ttBtn.getBoundingClientRect().top);
    ttW = Math.ceil(tt.offsetWidth);
    ttH = Math.ceil(tt.offsetHeight);
    // ttL = Math.ceil(tt.getBoundingClientRect().left);
    // ttT = Math.ceil(tt.getBoundingClientRect().top);
    caretW = Math.ceil(caret.offsetWidth);
    caretH = Math.ceil(caret.offsetHeight);

    // 방향에 따른 툴팁 위치 조정
    switch (position) {
      case "left":
        tt.style.left = ttBtnL - ttW - offset + "px";
        tt.style.top = ttBtnT + (ttBtnH - ttH) / 2 + "px";
        caret.style.left = ttW + "px";
        caret.style.top = ttH / 2 - caretH / 2 + "px";
        tt.classList.add("gt-transform-origin-center-right"); // The transform-origin CSS property sets the origin for an element's transformations.(https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
        break;

      case "right":
        tt.style.left = ttBtnL + ttBtnW + offset + "px";
        tt.style.top = ttBtnT + (ttBtnH - ttH) / 2 + "px";
        caret.style.left = -caretW + "px";
        caret.style.top = ttH / 2 - caretH / 2 + "px";
        tt.classList.add("gt-transform-origin-center-left");
        break;

      case "bottom":
        tt.style.left = ttBtnL + (ttBtnW - ttW) / 2 + "px";
        tt.style.top = ttBtnT + ttBtnH + offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = -caretH + "px";
        tt.classList.add("gt-transform-origin-top-center");
        break;

      case "top-start":
        tt.style.left = ttBtnL + "px";
        tt.style.top = ttBtnT - ttH - offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = ttH + "px";
        tt.classList.add("gt-transform-origin-bottom-center");
        break;

      case "top-end":
        tt.style.left = ttBtnL + Math.abs(ttBtnW - ttW) + "px";
        tt.style.top = ttBtnT - ttH - offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = ttH + "px";
        tt.classList.add("gt-transform-origin-bottom-right");
        break;

      case "bottom-start":
        tt.style.left = ttBtnL + "px";
        tt.style.top = ttBtnT + ttBtnH + offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = -caretH + "px";
        tt.classList.add("gt-transform-origin-top-left");
        break;

      case "bottom-end":
        tt.style.left = ttBtnL + Math.abs(ttBtnW - ttW) + "px";
        tt.style.top = ttBtnT + ttBtnH + offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = -caretH + "px";
        tt.classList.add("gt-transform-origin-top-right");
        break;

      case "top":
        tt.style.left = ttBtnL + (ttBtnW - ttW) / 2 + "px";
        tt.style.top = ttBtnT - ttH - offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = ttH + "px";
        tt.classList.add("gt-transform-origin-bottom-center");
        break;

      default:
        tt.style.left = ttBtnL + (ttBtnW - ttW) / 2 + "px";
        tt.style.top = ttBtnT - ttH - offset + "px";
        caret.style.left = ttW / 2 - caretW / 2 + "px";
        caret.style.top = ttH + "px";
        tt.classList.add("gt-transform-origin-bottom-center");
        break;
    }
  };

  return (
    <span
      style={{ display: "inline-flex", cursor: "pointer" }}
      onMouseOver={makeTT}
      onMouseLeave={removeTT}
      onFocus={makeTT}
      onBlur={removeTT}
    >
      {children}
    </span>
  );
}
