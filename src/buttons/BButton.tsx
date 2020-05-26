import React from "react";

import styled from "@emotion/styled";

export const BButton: React.FC<{
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  hideButtonText?: boolean;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, pressed, onClick } = props;
  const buttonColor = props.backgroundColor || "#BF2323";
  const textColor = props.color || "#FFFFFF";
  const Outer = styled.div`
    box-sizing: content-box;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: ${pressed ? buttonColor : "transparent"};
    border: solid 0.4em ${buttonColor};
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
      font-size: 3.2em;
      color: ${pressed ? textColor : buttonColor};
    }
  `;
  return (
    <Outer onClick={onClick}>
      <span>B</span>
    </Outer>
  );
};
