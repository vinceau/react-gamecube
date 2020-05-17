import React from "react";
import styled from "@emotion/styled";

import { DpadInputState, ButtonInput } from "./types";
import { DpadUp, DpadLeft, DpadRight, DpadDown } from "./buttons";

export const Dpad: React.FC<{
  value?: Partial<DpadInputState>;
  onClick: (input: ButtonInput) => void;
}> = (props) => {
  const value = props.value ? props.value : {};
  const { onClick } = props;
  const Outer = styled.div`
    display: grid;
    font-size: 0.5em;
  `;
  return (
    <Outer>
      <span style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
        <DpadUp pressed={value.du} onClick={(): void => onClick(ButtonInput.D_UP)} />
      </span>
      <span style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
        <DpadLeft pressed={value.dl} onClick={(): void => onClick(ButtonInput.D_LEFT)} />
      </span>
      <span style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
        <DpadRight pressed={value.dr} onClick={(): void => onClick(ButtonInput.D_RIGHT)} />
      </span>
      <span style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}>
        <DpadDown pressed={value.dd} onClick={(): void => onClick(ButtonInput.D_DOWN)} />
      </span>
    </Outer>
  );
};
