import React from "react";
import { RTrigger } from "./RTrigger";

export default {
  title: "RTrigger",
};

export const Default = (): JSX.Element => <RTrigger />;
export const ThirtyPercent = (): JSX.Element => <RTrigger value={0.3} />;
export const SixtyPercent = (): JSX.Element => <RTrigger value={0.6} />;
export const Pressed = (): JSX.Element => <RTrigger pressed />;
