import React from "react";

import styled from "@emotion/styled";

import { AButton, BButton, LTrigger, RTrigger, StartButton, XButton, YButton, ZButton } from "./buttons";
import { ButtonInput, ControllerInputState, MainButtonsInputState } from "./types";
import { Dpad } from "./Dpad";
import { AnalogStick } from "./sticks/AnalogStick";

export const ControllerLayout: React.FC<{
  value?: Partial<ControllerInputState>;
  hideAnalogSticks?: boolean;
  onClick?: (button: ButtonInput) => void;
}> = (props) => {
  const { hideAnalogSticks, onClick } = props;
  const value = props.value ? props.value : {};
  const Outer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 8px;
    font-weight: 400;
    grid-template-columns: 100%;
    grid-gap: 10px;
    @media (min-width: 375px) {
      font-size: 5px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 425px) {
      font-size: 6px;
    }
    @media (min-width: 768px) {
      font-size: 10px;
    }
    @media (min-width: 1024px) {
      font-size: 12px;
    }
  `;
  const lHandler = onClick ? (): void => onClick(ButtonInput.L) : undefined;
  const rHandler = onClick ? (): void => onClick(ButtonInput.R) : undefined;
  const zHandler = onClick ? (): void => onClick(ButtonInput.Z) : undefined;
  const startHandler = onClick ? (): void => onClick(ButtonInput.START) : undefined;
  return (
    <Outer>
      <LTrigger pressed={value.l} onClick={lHandler} />
      <ZButton pressed={value.z} onClick={zHandler} />
      <RTrigger pressed={value.r} onClick={rHandler} />
      {hideAnalogSticks ? (
        <Dpad value={value} onClick={onClick} />
      ) : (
        <AnalogStick x={value.controlX} y={value.controlY} />
      )}
      <StartButton pressed={value.start} onClick={startHandler} />
      <MainButtons value={value} onClick={onClick} />
    </Outer>
  );
};

const MainButtons: React.FC<{
  value?: Partial<MainButtonsInputState>;
  onClick: (input: ButtonInput) => void;
}> = (props) => {
  const value = props.value ? props.value : {};
  const { onClick } = props;
  const Outer = styled.div`
    display: grid;
    grid-gap: 1.2em;
    grid-template-columns: repeat(3, 1fr);
  `;
  const yHandler = onClick ? (): void => onClick(ButtonInput.Y) : undefined;
  const xHandler = onClick ? (): void => onClick(ButtonInput.X) : undefined;
  const aHandler = onClick ? (): void => onClick(ButtonInput.A) : undefined;
  const bHandler = onClick ? (): void => onClick(ButtonInput.B) : undefined;
  return (
    <Outer>
      <span style={{ gridColumn: "1 / 3", gridRow: "1 / 2", justifySelf: "end" }}>
        <YButton pressed={value.y} onClick={yHandler} />
      </span>
      <span style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>
        <AButton pressed={value.a} onClick={aHandler} />
      </span>
      <span style={{ gridColumn: "3 / 4", gridRow: "1 / 4", alignSelf: "end" }}>
        <XButton pressed={value.x} onClick={xHandler} />
      </span>
      <span style={{ gridColumn: "1 / 2", gridRow: "1 / 4", alignSelf: "end", justifySelf: "end" }}>
        <BButton pressed={value.b} onClick={bHandler} />
      </span>
    </Outer>
  );
};
