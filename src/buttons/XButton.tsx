/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export const XButton: React.FC<{
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
          #ButtonIcon-GCN-X {
              fill: ${backgroundColor};
          }
          text {
              fill: ${color};
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
        width: 6em;
        ${onClick && hoverStyles}
      `}
    >
      <svg width="100%" viewBox="0 0 114 184" overflow="visible" style={{ overflow: "visible" }}>
        <g>
          <g stroke={backgroundColor} strokeWidth="8" fill="none" fillRule="evenodd">
            <g id="ButtonIcon-GCN-X" fillRule="nonzero" fill={pressed ? backgroundColor : "transparent"}>
              <path d="M81.55434,22.403604 C69.62499,1.741363 43.20429,-5.338044 22.542047,6.591306 C1.879807,18.520657 -5.199603,44.941364 6.729747,65.60361 C19.737317,88.13338 26.665167,113.98847 26.665167,140.00361 C26.665167,163.86231 46.00647,183.20361 69.86517,183.20361 C93.72387,183.20361 113.06517,163.86231 113.06517,140.00361 C113.06517,99.02525 102.04352,57.891896 81.55434,22.403604 L81.55434,22.403604 Z" />
            </g>
          </g>
          <text
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            x="50%"
            y="50%"
            fontSize="52"
            fill={pressed ? color : backgroundColor}
            style={{ display: hideButtonText ? "none" : "inherit" }}
          >
            X
          </text>
        </g>
      </svg>
    </div>
  );
};

XButton.defaultProps = {
  backgroundColor: "#8F8F8F",
  color: "#FFFFFF",
};
