/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { withKnobs, boolean, number } from "@storybook/addon-knobs";

import { AnalogStick, CStick } from "./AnalogStick";

export default {
  title: "AnalogStick",
  decorators: [withKnobs],
};

export const Default = (): JSX.Element => {
  const x = number("x", 0, {
    range: true,
    min: -1,
    max: 1,
    step: 0.01,
  });
  const y = number("y", 0, {
    range: true,
    min: -1,
    max: 1,
    step: 0.01,
  });
  return (
    <div>
      <AnalogStick x={x} y={y} />
      <CStick x={x} y={y} />
    </div>
  );
};
export const FullRight = (): JSX.Element => (
  <div>
    <AnalogStick x={1} y={0} />
    <CStick x={1} y={0} />
  </div>
);
export const FullLeft = (): JSX.Element => (
  <div>
    <AnalogStick x={-1} y={0} />
    <CStick x={-1} y={0} />
  </div>
);
export const FullTop = (): JSX.Element => (
  <div>
    <AnalogStick x={0} y={1} />
    <CStick x={0} y={1} />
  </div>
);
export const FullBottom = (): JSX.Element => (
  <div>
    <AnalogStick x={0} y={-1} />
    <CStick x={0} y={-1} />
  </div>
);

export const BottomLeft = (): JSX.Element => (
  <div>
    <AnalogStick x={-0.7625} y={-0.65} />
    <CStick x={-0.7625} y={-0.65} />
  </div>
);
export const TopLeft = (): JSX.Element => (
  <div>
    <AnalogStick x={-0.6375} y={0.775} />
    <CStick x={-0.6375} y={0.775} />
  </div>
);
export const TopRight = (): JSX.Element => (
  <div>
    <AnalogStick x={0.625} y={0.7875} />
    <CStick x={0.625} y={0.7875} />
  </div>
);
export const BottomRight = (): JSX.Element => (
  <div>
    <AnalogStick x={0.7125} y={-0.7} />
    <CStick x={0.7125} y={-0.7} />
  </div>
);

export const ColoredBackground = (): JSX.Element => (
  <div
    css={css`
      padding: 50px;
      background-color: darkblue;
    `}
  >
    <AnalogStick x={0.7125} y={-0.7} />
    <CStick x={0.7125} y={-0.7} />
  </div>
);
