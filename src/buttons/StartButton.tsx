import React from "react";

import styled from "@emotion/styled";

export const StartButton: React.FC<{
  hideButtonText?: boolean;
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, pressed, onClick } = props;
  const buttonColor = props.backgroundColor || "#8F8F8F";
  const textColor = props.color || "#FFFFFF";
  const Outer = styled.div`
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    background-color: ${pressed ? buttonColor : "transparent"};
    border: solid 0.3em ${buttonColor};
    display: flex;
    justify-content: center;
    align-items: center;
    ${onClick &&
    `
            cursor: pointer;
            &:hover {
                ${
                  pressed
                    ? "opacity: 0.85"
                    : `
                background-color: ${buttonColor};
                span {
                    color: ${textColor};
                }
                `
                }
            }
        `}
    span {
      display: ${hideButtonText ? "none" : "inline"};
      text-transform: uppercase;
      font-size: 0.8em;
      color: ${pressed ? textColor : buttonColor};
    }
  `;
  return (
    <Outer onClick={onClick}>
      <span>Start</span>
    </Outer>
  );
};
