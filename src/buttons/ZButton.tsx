/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export const ZButton: React.FC<{
  hideButtonText?: boolean;
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, pressed, backgroundColor, color, onClick } = props;
  const hoverStyles = css`
    cursor: pointer;
    &:hover {
      ${pressed
        ? "opacity: 0.85;"
        : `
          background-color: ${backgroundColor};
          span {
              color : ${color};
          }
        `}
    }
  `;
  return (
    <div
      onClick={onClick}
      css={css`
        user-select: none;
        box-sizing: content-box;
        width: 18em;
        height: 4em;
        border-radius: 3.5em;
        background-color: ${pressed ? backgroundColor : "transparent"};
        border: solid 0.4em ${backgroundColor};
        display: flex;
        justify-content: center;
        align-items: center;
        ${onClick && hoverStyles}
      `}
    >
      <span
        css={css`
          display: ${hideButtonText ? "none" : "inline"};
          font-size: 3.5em;
          color: ${pressed ? color : backgroundColor};
        `}
      >
        Z
      </span>
    </div>
  );
};

ZButton.defaultProps = {
  backgroundColor: "#6F1FFF",
  color: "#FFFFFF",
};
