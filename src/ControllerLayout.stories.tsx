import React from "react";
import { ControllerLayout } from "./ControllerLayout";
import { ButtonInput, ControllerInputState } from "./types";

export default {
  title: "ControllerLayout",
};

export const Primary = (): JSX.Element => {
  return <ControllerLayout />;
};

export const HideAnalogSticks = (): JSX.Element => {
  return <ControllerLayout hideAnalogSticks={true} />;
};

const toggleButton = (input: ButtonInput, oldState: Partial<ControllerInputState>): Partial<ControllerInputState> => {
  const newState = {
    ...oldState,
  };
  switch (input) {
    case ButtonInput.A:
      newState.a = !oldState.a;
      break;
    case ButtonInput.D_LEFT:
      newState.dl = !oldState.dl;
      break;
    case ButtonInput.D_RIGHT:
      newState.dr = !oldState.dr;
      break;
    case ButtonInput.D_DOWN:
      newState.dd = !oldState.dd;
      break;
    case ButtonInput.D_UP:
      newState.du = !oldState.du;
      break;
    case ButtonInput.Z:
      newState.z = !oldState.z;
      break;
    case ButtonInput.R:
      newState.r = !oldState.r;
      break;
    case ButtonInput.L:
      newState.l = !oldState.l;
      break;
    case ButtonInput.B:
      newState.b = !oldState.b;
      break;
    case ButtonInput.X:
      newState.x = !oldState.x;
      break;
    case ButtonInput.Y:
      newState.y = !oldState.y;
      break;
    case ButtonInput.START:
      newState.start = !oldState.start;
      break;
  }
  return newState;
};

export const Clickable = (): JSX.Element => {
  const [value, setValue] = React.useState<Partial<ControllerInputState>>({});
  const onClick = (input: ButtonInput): void => {
    setValue((oldState) => toggleButton(input, oldState));
  };
  return <ControllerLayout value={value} onClick={onClick} />;
};

export const ClickableHideAnalogSticks = (): JSX.Element => {
  const [value, setValue] = React.useState<Partial<ControllerInputState>>({});
  const onClick = (input: ButtonInput): void => {
    setValue((oldState) => toggleButton(input, oldState));
  };
  return <ControllerLayout hideAnalogSticks={true} value={value} onClick={onClick} />;
};