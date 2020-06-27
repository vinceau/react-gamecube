import React from "react";

import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import { LTrigger, RTrigger } from "./TriggerButton";

import { jsxDecorator } from "storybook-addon-jsx";

export default {
  title: "TriggerButtons",
  decorators: [withKnobs, jsxDecorator],
};

export const Default = (): JSX.Element => {
  const value = number("value", 0.5, {
    range: true,
    min: 0,
    max: 1,
    step: 0.01,
  });
  const pressed = boolean("pressed", false);
  return (
    <div>
      <LTrigger pressed={pressed} value={value} />
      <RTrigger pressed={pressed} value={value} />
    </div>
  );
};
export const ThirtyPercent = (): JSX.Element => (
  <div>
    <LTrigger value={0.3} />
    <RTrigger value={0.3} />
  </div>
);
export const SixtyPercent = (): JSX.Element => (
  <div>
    <LTrigger value={0.6} />
    <RTrigger value={0.6} />
  </div>
);
export const Pressed = (): JSX.Element => (
  <div>
    <LTrigger pressed />
    <RTrigger pressed />
  </div>
);

export const AlternateColors = (): JSX.Element => (
  <div>
    <LTrigger color="red" backgroundColor="green" pressed={true} />
    <RTrigger color="red" backgroundColor="green" pressed={true} />
  </div>
);
