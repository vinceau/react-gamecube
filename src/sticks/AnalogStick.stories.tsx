/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { AnalogStick, CStick } from "./AnalogStick";

export default {
  title: "AnalogStick",
};

export const Default = (): JSX.Element => (
  <div>
    <AnalogStick />
    <CStick />
  </div>
);
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
