import React from "react";
import { LTrigger } from "./LTrigger";

export default {
  title: "LTrigger",
};

export const Default = (): JSX.Element => <LTrigger />;
export const ThirtyPercent = (): JSX.Element => <LTrigger value={0.3} />;
export const SixtyPercent = (): JSX.Element => <LTrigger value={0.6} />;
export const Pressed = (): JSX.Element => <LTrigger pressed />;
