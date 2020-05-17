import React from "react";

import styled from "@emotion/styled";

export const ZButton: React.FC<{
  hideButtonText?: boolean;
  pressed?: boolean;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}> = (props) => {
  const { hideButtonText, pressed, onClick } = props;
  const buttonColor = props.backgroundColor || "#6F1FFF";
  const textColor = props.color || "#FFFFFF";
  const Outer = styled.div`
    width: 18em;
    height: 4em;
    border-radius: 3.5em;
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
                    color : ${textColor};
                }
                `
                }
            }
        `}
    span {
      display: ${hideButtonText ? "none" : "inline"};
      font-size: 3.5em;
      color: ${pressed ? textColor : buttonColor};
    }
  `;
  return (
    <Outer onClick={onClick}>
      <span>Z</span>
    </Outer>
  );
};
