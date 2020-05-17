export enum ButtonInput {
  D_LEFT = "D_LEFT",
  D_RIGHT = "D_RIGHT",
  D_DOWN = "D_DOWN",
  D_UP = "D_UP",
  Z = "Z",
  R = "R",
  L = "L",
  A = "A",
  B = "B",
  X = "X",
  Y = "Y",
  START = "START",
}

export interface MainButtonsInputState {
  a: boolean;
  b: boolean;
  x: boolean;
  y: boolean;
}

export interface DpadInputState {
  dd: boolean;
  dl: boolean;
  dr: boolean;
  du: boolean;
}

export interface ControllerInputState extends DpadInputState, MainButtonsInputState {
  start: boolean;

  // Triggers
  l: boolean;
  r: boolean;
  z: boolean;

  // Analog values
  lValue: number;
  rValue: number;
  cStickX: number;
  cStickY: number;
  controlX: number;
  controlY: number;
}
