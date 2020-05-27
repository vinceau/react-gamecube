/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

interface CircleButtonProps {
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  hideButtonText?: boolean;
  onClick?: () => void;
}

const CircleButton: React.FC<
  {
    width: string;
    borderWidth: string;
    fontSize: string;
  } & CircleButtonProps
> = (props) => {
  const { width, borderWidth, children, fontSize, hideButtonText, pressed, color, backgroundColor, onClick } = props;
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
        width: ${width};
        height: ${width};
        border-radius: 50%;
        background-color: ${pressed ? backgroundColor : "transparent"};
        border: solid ${borderWidth} ${backgroundColor};
        display: flex;
        justify-content: center;
        align-items: center;
        ${onClick && hoverStyles}
      `}
    >
      <span
        css={css`
          display: ${hideButtonText ? "none" : "inline"};
          font-size: ${fontSize};
          color: ${pressed ? color : backgroundColor};
        `}
      >
        {children}
      </span>
    </div>
  );
};

CircleButton.defaultProps = {
  backgroundColor: "#8F8F8F",
  color: "#FFFFFF",
};

export const AButton: React.FC<CircleButtonProps> = (props) => (
  <CircleButton backgroundColor="#00674F" width="9em" borderWidth="0.5em" fontSize="4.8em" {...props}>
    A
  </CircleButton>
);

export const BButton: React.FC<CircleButtonProps> = (props) => (
  <CircleButton backgroundColor="#BF2323" width="5em" borderWidth="0.4em" fontSize="3.2em" {...props}>
    B
  </CircleButton>
);

export const StartButton: React.FC<CircleButtonProps> = (props) => (
  <CircleButton width="3.5em" borderWidth="0.3em" fontSize="0.8em" {...props}>
    START
  </CircleButton>
);
