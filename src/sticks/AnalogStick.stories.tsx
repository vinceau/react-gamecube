/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { AnalogStick } from "./AnalogStick";

export default {
  title: "AnalogStick",
};

const color = undefined;
const strokeColor = "#8F8F8F";

export const Default = (): JSX.Element => <AnalogStick stickColor={color} strokeColor={strokeColor} />;
export const FullRight = (): JSX.Element => <AnalogStick x={1} y={0} stickColor={color} strokeColor={strokeColor} />;
export const FullLeft = (): JSX.Element => <AnalogStick x={-1} y={0} stickColor={color} strokeColor={strokeColor} />;
export const FullTop = (): JSX.Element => <AnalogStick x={0} y={1} stickColor={color} strokeColor={strokeColor} />;
export const FullBottom = (): JSX.Element => <AnalogStick x={0} y={-1} stickColor={color} strokeColor={strokeColor} />;

export const BottomLeft = (): JSX.Element => (
  <AnalogStick x={-0.7625} y={-0.65} stickColor={color} strokeColor={strokeColor} />
);
export const TopLeft = (): JSX.Element => (
  <AnalogStick x={-0.6375} y={0.775} stickColor={color} strokeColor={strokeColor} />
);
export const TopRight = (): JSX.Element => (
  <AnalogStick x={0.625} y={0.7875} stickColor={color} strokeColor={strokeColor} />
);
export const BottomRight = (): JSX.Element => (
  <AnalogStick x={0.7125} y={-0.7} stickColor={color} strokeColor={strokeColor} />
);

export const ColoredBackground = (): JSX.Element => (
  <div
    css={css`
      padding: 50px;
      background-color: darkblue;
    `}
  >
    <AnalogStick x={0.7125} y={-0.7} stickColor="#DDDDDD" />
  </div>
);
