/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

export interface AnalogStickProps {
  x?: number;
  y?: number;
  backgroundColor?: string;
  strokeColor?: string;
}

const AnalogStickContainer: React.FC<
  {
    outerWidth: number; // in em
    innerWidth: number; // in em
  } & AnalogStickProps
> = (props) => {
  const { x, y, outerWidth, innerWidth, children, backgroundColor, strokeColor } = props;
  const maxEndPosition = 0.35; // how far away the circle should go
  const leftPos = `${50 + x * maxEndPosition * 100}%`;
  const topPos = `${50 - y * maxEndPosition * 100}%`;
  return (
    <div
      css={css`
        box-sizing: content-box;
        position: relative;
        width: ${outerWidth}em;
        height: ${outerWidth}em;
        margin: ${innerWidth / 2 - (0.5 - maxEndPosition) * outerWidth}em;
      `}
    >
      <div
        css={css`
          position: absolute;
          width: ${innerWidth}em;
          height: ${innerWidth}em;
          left: ${leftPos};
          top: ${topPos};
          margin-left: -${innerWidth / 2}em;
          margin-top: -${innerWidth / 2}em;
        `}
      >
        {children}
      </div>
      <svg width="100%" viewBox="0 0 212 212" overflow="visible" style={{ overflow: "visible" }}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon
            stroke={strokeColor}
            strokeWidth="5"
            fill={backgroundColor}
            fillRule="nonzero"
            points="210 106 179.53911 179.53911 106 210 32.460895 179.53911 2 106 32.460895 32.460895 106 2 179.53911 32.460895"
          />
        </g>
      </svg>
    </div>
  );
};

AnalogStickContainer.defaultProps = {
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  strokeColor: "#8F8F8F",
};

const AnalogStickCircle: React.FC<{
  stickColor?: string;
  strokeColor?: string;
}> = (props) => {
  const { strokeColor, stickColor } = props;
  return (
    <div>
      <svg width="100%" viewBox="0 0 166 166" overflow="visible" style={{ overflow: "visible" }}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(3.000000, 3.000000)" fillRule="nonzero" stroke={strokeColor}>
            <circle strokeWidth="5" fill={stickColor} cx="80" cy="80" r="80"></circle>
            <path
              d="M80,61 C90.4934102,61 99,69.5065898 99,80 C99,90.4934102 90.4934102,99 80,99 C69.5065898,99 61,90.4934102 61,80 C61,69.5065898 69.5065898,61 80,61 Z"
              strokeWidth="2"
            />
            <path
              d="M80,41 C101.539105,41 119,58.4608948 119,80 C119,101.539105 101.539105,119 80,119 C58.4608948,119 41,101.539105 41,80 C41,58.4608948 58.4608948,41 80,41 Z"
              strokeWidth="2"
            />
            <path
              d="M80,21 C112.5848,21 139,47.4151998 139,80 C139,112.5848 112.5848,139 80,139 C47.4151998,139 21,112.5848 21,80 C21,47.4151998 47.4151998,21 80,21 Z"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

AnalogStickCircle.defaultProps = {
  stickColor: "#DDDDDD",
  strokeColor: "#8F8F8F",
};

const CStickCircle: React.FC<{
  stickColor?: string;
  strokeColor?: string;
}> = (props) => {
  const { stickColor, strokeColor } = props;
  return (
    <div>
      <svg width="100%" viewBox="0 0 166 166" overflow="visible" style={{ overflow: "visible" }}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(3.000000, 3.000000)" fillRule="nonzero" stroke={strokeColor}>
            <circle strokeWidth="5" fill={stickColor} cx="80" cy="80" r="80"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};
CStickCircle.defaultProps = {
  strokeColor: "#8F8F8F",
  stickColor: "#FDD700",
};

export const AnalogStick: React.FC<{ stickColor?: string } & AnalogStickProps> = (props) => {
  const { stickColor, strokeColor } = props;
  return (
    <AnalogStickContainer outerWidth={13} innerWidth={9} {...props}>
      <AnalogStickCircle stickColor={stickColor} strokeColor={strokeColor} />
    </AnalogStickContainer>
  );
};
AnalogStick.defaultProps = {
  stickColor: "#DDDDDD",
};

export const CStick: React.FC<{ stickColor?: string } & AnalogStickProps> = (props) => {
  const { stickColor, strokeColor } = props;
  return (
    <AnalogStickContainer outerWidth={12} innerWidth={6} {...props}>
      <CStickCircle stickColor={stickColor} strokeColor={strokeColor} />
    </AnalogStickContainer>
  );
};
CStick.defaultProps = {
  stickColor: "#FDD700",
  strokeColor: "#FDD700",
};
