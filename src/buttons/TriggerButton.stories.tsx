import React from "react";
import { LTrigger, RTrigger } from "./TriggerButton";

export default {
  title: "TriggerButtons",
};

export const Default = (): JSX.Element => (
  <div>
    <LTrigger />
    <RTrigger />
  </div>
);
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
