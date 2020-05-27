/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export const YButton: React.FC<{
  hideButtonText?: boolean;
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, onClick, pressed, color, backgroundColor } = props;
  const hoverStyles = css`
    &:hover {
      cursor: pointer;
      ${pressed
        ? "opacity: 0.85;"
        : `
          text {
              fill: ${color};
          }
          path {
              fill: ${backgroundColor};
          }
        `}
    }
  `;
  return (
    <div
      onClick={onClick}
      css={css`
        box-sizing: content-box;
        width: 9.5em;
        ${onClick && hoverStyles}
      `}
    >
      <svg width="100%" viewBox="0 0 184 114" overflow="visible" style={{ overflow: "visible" }}>
        <g>
          <path
            stroke={backgroundColor}
            fill={pressed ? backgroundColor : "transparent"}
            strokeWidth="8"
            d="M140.00391,0.935547 C99.02555,0.935547 57.892589,11.956132 22.404297,32.44531 C1.742057,44.37466 -5.337553,70.79479 6.591797,91.45703 C18.521147,112.11927 44.94127,119.19888 65.60352,107.26953 C88.13329,94.26196 113.98877,87.33398 140.00391,87.33398 C163.86261,87.33398 183.20313,67.99347 183.20312,44.13477 C183.20312,20.276066 163.86261,0.935547 140.00391,0.935547 Z"
          />
          <text
            alignmentBaseline="middle"
            textAnchor="middle"
            x="50%"
            y="50%"
            fontSize="52"
            fill={pressed ? color : backgroundColor}
            style={{ display: hideButtonText ? "none" : "inherit" }}
          >
            Y
          </text>
        </g>
      </svg>
    </div>
  );
};

YButton.defaultProps = {
  backgroundColor: "#8F8F8F",
  color: "#FFFFFF",
};
