import React from "react";

import styled from "@emotion/styled";

export const DpadRight: React.FC<{
  pressed?: boolean;
  color?: string;
  onClick?: () => void;
}> = (props) => {
  const { onClick, pressed } = props;
  const buttonColor = props.color || "#8F8F8F";
  const textColor = "white";
  const Outer = styled.div`
    box-sizing: content-box;
    width: 5em;
    height: 5em;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    background-color: ${pressed ? buttonColor : "transparent"};
    border: solid 0.7em ${buttonColor};
    border-left-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    padding-left: 2em;
    ${onClick &&
    `
            cursor: pointer;
            &:hover {
                ${
                  pressed
                    ? "opacity: 0.85;"
                    : `
                    background-color: ${buttonColor};
                    #ButtonIcon-GCN-D-Pad {
                        fill: ${textColor};
                    }
                `
                }
            }
        `}
    svg {
      overflow: visible;
    }
    #ButtonIcon-GCN-D-Pad {
      fill: ${pressed ? textColor : "transparent"};
    }
  `;
  return (
    <Outer onClick={onClick}>
      <svg width="100%" viewBox="0 0 35 30" version="1.1" overflow="visible">
        <g id="Page-1" stroke={buttonColor} strokeWidth="2" fill="none" fillRule="evenodd">
          <g id="ButtonIcon-GCN-D-Pad" transform="translate(-142.000000, -82.000000)" fillRule="nonzero">
            <path
              d="M145.93164,82.65039 C144.68507,82.53758 142.96484,83.60853 142.96484,84.77539 L142.96484,109.22461 C142.96484,110.55816 145.21055,111.76504 146.42969,111.22461 L176.26367,98 C176.62656,97.83914 176.86881,97.45702 177.01562,97 C176.86881,96.54298 176.62656,96.16086 176.26367,96 L146.42969,82.77539 C146.2773,82.70784 146.10972,82.66651 145.93164,82.65039 Z"
              id="path4223"
            />
          </g>
        </g>
      </svg>
    </Outer>
  );
};
