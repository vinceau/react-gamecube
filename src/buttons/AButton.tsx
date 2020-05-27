/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export const AButton: React.FC<{
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  hideButtonText?: boolean;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, pressed, color, backgroundColor, onClick } = props;
  const hoverStyles = css`
    &:hover {
      cursor: pointer;
      ${pressed
        ? "opacity: 0.85;"
        : `
          background-color: ${backgroundColor};
          span {
            color: ${color};
          }
      `}
    }
  `;
  return (
    <div
      onClick={onClick}
      css={css`
        box-sizing: content-box;
        width: 9em;
        height: 9em;
        border-radius: 50%;
        background-color: ${pressed ? backgroundColor : "transparent"};
        border: solid 0.5em ${backgroundColor};
        display: flex;
        justify-content: center;
        align-items: center;
        ${onClick && hoverStyles}
      `}
    >
      <span
        css={css`
          display: ${hideButtonText ? "none" : "inline"};
          font-size: 4.8em;
          color: ${pressed ? color : backgroundColor};
        `}
      >
        A
      </span>
    </div>
  );
};

AButton.defaultProps = {
  backgroundColor: "#00674F",
  color: "#FFFFFF",
};
