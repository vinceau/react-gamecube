/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { AButton, BButton, LTrigger, RTrigger, StartButton, XButton, YButton, ZButton } from "./buttons";
import { ButtonInput, ControllerInputState, MainButtonsInputState } from "./types";
import { Dpad } from "./Dpad";
import { AnalogStick, CStick } from "./sticks";

export const Controller: React.FC<{
  value?: Partial<ControllerInputState>;
  hideAnalogSticks?: boolean;
  hideButtonText?: boolean;
  onClick?: (button: ButtonInput) => void;
}> = (props) => {
  const { hideButtonText, hideAnalogSticks, onClick } = props;
  const value = props.value ? props.value : {};
  const outerStyles = css`
    box-sizing: content-box;
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
    <div css={outerStyles}>
      <LTrigger pressed={value.l} value={value.lValue} onClick={lHandler} hideButtonText={hideButtonText} />
      <ZButton pressed={value.z} onClick={zHandler} hideButtonText={hideButtonText} />
      <RTrigger pressed={value.r} value={value.rValue} onClick={rHandler} hideButtonText={hideButtonText} />
      {hideAnalogSticks ? (
        <Dpad value={value} onClick={onClick} />
      ) : (
        <AnalogStick x={value.controlX} y={value.controlY} />
      )}
      <StartButton pressed={value.start} onClick={startHandler} hideButtonText={hideButtonText} />
      <MainButtons value={value} onClick={onClick} hideButtonText={hideButtonText} />
      {!hideAnalogSticks && (
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            grid-column-start: span 3;
          `}
        >
          <Dpad value={value} onClick={onClick} />
          <CStick x={value.cStickX} y={value.cStickY} />
        </div>
      )}
    </div>
  );
};

const MainButtons: React.FC<{
  hideButtonText?: boolean;
  value?: Partial<MainButtonsInputState>;
  onClick: (input: ButtonInput) => void;
}> = (props) => {
  const value = props.value ? props.value : {};
  const { onClick, hideButtonText } = props;
  const yHandler = onClick ? (): void => onClick(ButtonInput.Y) : undefined;
  const xHandler = onClick ? (): void => onClick(ButtonInput.X) : undefined;
  const aHandler = onClick ? (): void => onClick(ButtonInput.A) : undefined;
  const bHandler = onClick ? (): void => onClick(ButtonInput.B) : undefined;
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 1.2em;
        grid-template-columns: repeat(3, 1fr);
      `}
    >
      <span style={{ gridColumn: "1 / 3", gridRow: "1 / 2", justifySelf: "end" }}>
        <YButton pressed={value.y} onClick={yHandler} hideButtonText={hideButtonText} />
      </span>
      <span style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>
        <AButton pressed={value.a} onClick={aHandler} hideButtonText={hideButtonText} />
      </span>
      <span style={{ gridColumn: "3 / 4", gridRow: "1 / 4", alignSelf: "end" }}>
        <XButton pressed={value.x} onClick={xHandler} hideButtonText={hideButtonText} />
      </span>
      <span style={{ gridColumn: "1 / 2", gridRow: "1 / 4", alignSelf: "end", justifySelf: "end" }}>
        <BButton pressed={value.b} onClick={bHandler} hideButtonText={hideButtonText} />
      </span>
    </div>
  );
};
