import React from "react";

import styled from "@emotion/styled";

export const AButton: React.FC<{
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  hideButtonText?: boolean;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, pressed, onClick } = props;
  const buttonColor = props.backgroundColor || "#00674F";
  const textColor = props.color || "#FFFFFF";
  const Outer = styled.div`
    box-sizing: content-box;
    width: 9em;
    height: 9em;
    border-radius: 50%;
    background-color: ${pressed ? buttonColor : "transparent"};
    border: solid 0.5em ${buttonColor};
    display: flex;
    justify-content: center;
    align-items: center;
    ${onClick &&
    `
            cursor: pointer;
            &:hover {
                ${
                  pressed
                    ? "opacity: 0.85;"
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
      font-size: 4.8em;
      color: ${pressed ? textColor : buttonColor};
    }
  `;
  return (
    <Outer onClick={onClick}>
      <span>A</span>
    </Outer>
  );
};
