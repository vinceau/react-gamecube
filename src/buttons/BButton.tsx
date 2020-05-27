/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export const BButton: React.FC<{
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
    ${
      pressed
        ? "opacity: 0.85;"
        : `
          background-color: ${backgroundColor};
          span {
              color: ${color};
          }
        `
    }
  `;
  return (
    <div
      onClick={onClick}
      css={css`
        box-sizing: content-box;
        width: 5em;
        height: 5em;
        border-radius: 50%;
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
          font-size: 3.2em;
          color: ${pressed ? color : backgroundColor};
        `}
      >
        B
      </span>
    </div>
  );
};

BButton.defaultProps = {
  backgroundColor: "#BF2323",
  color: "#FFFFFF",
};
