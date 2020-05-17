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
