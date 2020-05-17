import React from "react";
import { CStick } from "./CStick";

export default {
  title: "CStick",
};

const color = "#FFFFFF";
const strokeColor = "#FDD700";

export const Default = (): JSX.Element => <CStick color={color} strokeColor={strokeColor} />;
export const FullLeft = (): JSX.Element => <CStick x={1} y={0} color={color} strokeColor={strokeColor} />;
export const FullRight = (): JSX.Element => <CStick x={-1} y={0} color={color} strokeColor={strokeColor} />;
export const FullTop = (): JSX.Element => <CStick x={0} y={1} color={color} strokeColor={strokeColor} />;
export const FullBottom = (): JSX.Element => <CStick x={0} y={-1} color={color} strokeColor={strokeColor} />;
