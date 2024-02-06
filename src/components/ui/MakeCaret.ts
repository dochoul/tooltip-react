export const makeCaret = (
  caret: HTMLElement,
  position: string,
  background: string
) => {
  const hasDash = position.includes("-");
  if (hasDash) position = position.substring(0, position.indexOf("-"));

  switch (position) {
    case "left":
      caret.style.borderWidth = "6px 0px 6px 6px";
      caret.style.borderLeftColor = background;
      break;

    case "right":
      caret.style.borderWidth = "6px 6px 6px 0px";
      caret.style.borderRightColor = background;
      break;

    case "top":
      caret.style.borderWidth = "6px 6px 0px 6px";
      caret.style.borderTopColor = background;
      break;

    case "bottom":
      caret.style.borderWidth = "0px 6px 6px 6px";
      caret.style.borderBottomColor = background;
      break;

    default:
      caret.style.borderWidth = "6px 6px 0px 6px";
      caret.style.borderTopColor = background;
      break;
  }
  return caret;
};
