import React from "react";
import styled from "@emotion/styled";

export const CStick: React.FC<{
  x?: number;
  y?: number;
  color?: string;
  strokeColor?: string;
}> = (props) => {
  const outerWidth = 12; // in em
  const innerWidth = 7; // in em
  const maxEndPosition = 0.35; // how far away the circle should go
  const color = props.color ? props.color : "none";
  const strokeColor = props.strokeColor ? props.strokeColor : "#000000";
  const xValue = props.x !== undefined ? props.x : 0;
  const yValue = props.y !== undefined ? props.y : 0;
  const leftPos = `${50 + xValue * maxEndPosition * 100}%`;
  const topPos = `${50 - yValue * maxEndPosition * 100}%`;
  const Outer = styled.div`
    position: relative;
    width: ${outerWidth}em;
    height: ${outerWidth}em;
    margin: ${innerWidth / 2 - (0.5 - maxEndPosition) * outerWidth}em;
  `;
  const CircleContainer = styled.div`
    position: absolute;
    width: ${innerWidth}em;
    height: ${innerWidth}em;
    left: ${leftPos};
    top: ${topPos};
    margin-left: -${innerWidth / 2}em;
    margin-top: -${innerWidth / 2}em;
  `;
  return (
    <Outer>
      <CircleContainer>
        <CStickCircle color={color} strokeColor={strokeColor} />
      </CircleContainer>
      <svg width="100%" viewBox="0 0 212 212" version="1.1" overflow="visible">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon
            id="path3399"
            stroke={strokeColor}
            strokeWidth="2"
            fill={color}
            fillRule="nonzero"
            points="210 106 179.53911 179.53911 106 210 32.460895 179.53911 2 106 32.460895 32.460895 106 2 179.53911 32.460895"
          />
        </g>
      </svg>
    </Outer>
  );
};

const CStickCircle: React.FC<{
  color?: string;
  strokeColor?: string;
}> = (props) => {
  const color = props.color ? props.color : "none";
  const strokeColor = props.strokeColor ? props.strokeColor : "#000000";
  return (
    <div>
      <svg width="100%" viewBox="0 0 166 166" version="1.1" overflow="visible">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(3.000000, 3.000000)" fillRule="nonzero" stroke={strokeColor}>
            <circle id="circle4351" strokeWidth="5" fill={color} cx="80" cy="80" r="80"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};
