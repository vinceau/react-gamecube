/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export const DpadUp: React.FC<{
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}> = (props) => {
  const { pressed, color, backgroundColor, onClick } = props;
  const hoverStyles = css`
    &:hover {
      cursor: pointer;
      ${pressed
        ? "opacity: 0.85;"
        : `
            background-color: ${backgroundColor};
            #ButtonIcon-GCN-D-Pad {
                fill: ${color};
            }
        `}
    }
  `;
  return (
    <div
      onClick={onClick}
      css={css`
        box-sizing: content-box;
        width: 5em;
        height: 5em;
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
        background-color: ${pressed ? backgroundColor : "transparent"};
        border: solid 0.7em ${backgroundColor};
        border-bottom-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        padding-bottom: 2em;
        ${onClick && hoverStyles}
      `}
    >
      <svg height="100%" viewBox="0 0 32 34" overflow="visible" style={{ overflow: "visible" }}>
        <g stroke={backgroundColor} strokeWidth="2" fill="none" fillRule="evenodd">
          <g
            id="ButtonIcon-GCN-D-Pad"
            transform="translate(-80.000000, -16.000000)"
            fillRule="nonzero"
            fill={pressed ? color : "transparent"}
          >
            <path d="M96,16.822266 C95.13509,16.822266 94.27017,17.126858 94,17.736328 L80.87891,47.335938 C81.24118,48.237056 81.98169,49.035156 82.77539,49.035156 L109.22461,49.035156 C110.01831,49.035156 110.75882,48.237056 111.12109,47.335938 L98,17.736328 C97.72983,17.126858 96.86491,16.822266 96,16.822266 Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

DpadUp.defaultProps = {
  backgroundColor: "#8F8F8F",
  color: "white",
};
