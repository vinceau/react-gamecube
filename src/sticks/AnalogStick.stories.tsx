import React from "react";
import { AnalogStick } from "./AnalogStick";

export default {
  title: "AnalogStick",
};

const color = "#FFFFFF";
const strokeColor = "#8F8F8F";

export const Default = (): JSX.Element => <AnalogStick color={color} strokeColor={strokeColor} />;
export const FullLeft = (): JSX.Element => <AnalogStick x={1} y={0} color={color} strokeColor={strokeColor} />;
export const FullRight = (): JSX.Element => <AnalogStick x={-1} y={0} color={color} strokeColor={strokeColor} />;
export const FullTop = (): JSX.Element => <AnalogStick x={0} y={1} color={color} strokeColor={strokeColor} />;
export const FullBottom = (): JSX.Element => <AnalogStick x={0} y={-1} color={color} strokeColor={strokeColor} />;

export const BottomLeft = (): JSX.Element => (
  <AnalogStick x={-0.7625} y={-0.65} color={color} strokeColor={strokeColor} />
);
export const TopLeft = (): JSX.Element => <AnalogStick x={-0.6375} y={0.775} color={color} strokeColor={strokeColor} />;
export const TopRight = (): JSX.Element => <AnalogStick x={0.625} y={0.7875} color={color} strokeColor={strokeColor} />;
export const BottomRight = (): JSX.Element => (
  <AnalogStick x={0.7125} y={-0.7} color={color} strokeColor={strokeColor} />
);
