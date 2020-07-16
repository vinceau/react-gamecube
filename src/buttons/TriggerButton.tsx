/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { SVGUniqueID } from "react-svg-unique-id";

export interface TriggerButtonProps {
  pressed?: boolean;
  hideButtonText?: boolean;
  value?: number;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const TriggerButton: React.FC<
  {
    direction: string;
  } & TriggerButtonProps
> = (props) => {
  const { direction, hideButtonText, onClick, pressed, color, backgroundColor } = props;
  const value = pressed ? 1 : props.value;
  const offset = `${(1 - value) * 100}%`;
  const hoverStyles = css`
    &:hover {
      cursor: pointer;
      ${pressed
        ? "opacity: 0.85;"
        : `
            path {
                fill: ${backgroundColor};
            }
            text {
                fill: ${color};
            }
          `}
    }
  `;
  const buttonText = direction === "right" ? "R" : "L";
  const flippedStyles = css`
    transform: scaleX(-1);
    transform-origin: center;
  `;
  return (
    <div
      onClick={onClick}
      css={css`
        box-sizing: content-box;
        width: 15em;
        ${onClick && hoverStyles}
        ${direction === "right" && flippedStyles}
      `}
    >
      <SVGUniqueID>
        <svg width="100%" viewBox="0 0 235 141" overflow="visible" style={{ overflow: "visible" }}>
          <linearGradient id="progress" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="0%" stopOpacity="0" stopColor={backgroundColor} />
            <stop offset={offset} stopOpacity="0" stopColor={backgroundColor} />
            <stop offset={offset} stopOpacity="1" stopColor={backgroundColor} />
            <stop offset="100%" stopOpacity="1" stopColor={backgroundColor} />
          </linearGradient>
          <g>
            <path
              fill="url(#progress)"
              stroke={backgroundColor}
              strokeWidth="8"
              d="M234.941486,37.9102532 C140.587902,69.5466833 51.1762154,107.627989 0.8999803,140.68745 C12.1209681,60.8935071 71.693988,0 143.5,0 C178.19432,0 210.03284,14.215631 234.941486,37.9102532 Z"
            />
            <text
              alignmentBaseline="middle"
              dominantBaseline="middle"
              textAnchor="middle"
              x="50%"
              y="33%"
              fontSize="52"
              fill={pressed ? color : backgroundColor}
              css={css`
                display: ${hideButtonText ? "none" : "inline"};
                ${direction === "right" && flippedStyles}
              `}
            >
              {buttonText}
            </text>
          </g>
        </svg>
      </SVGUniqueID>
    </div>
  );
};

TriggerButton.defaultProps = {
  value: 0,
  backgroundColor: "#8F8F8F",
  color: "#FFFFFF",
};

export const LTrigger: React.FC<TriggerButtonProps> = (props) => <TriggerButton {...props} direction="left" />;
export const RTrigger: React.FC<TriggerButtonProps> = (props) => <TriggerButton {...props} direction="right" />;
