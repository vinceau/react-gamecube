import React from "react";
import { AButton, BButton, StartButton } from "./CircleButton";
import { jsxDecorator } from "storybook-addon-jsx";

export default {
  title: "CircleButton",
  decorators: [jsxDecorator],
};

export const Default = (): JSX.Element => (
  <div>
    <AButton />
    <BButton />
    <StartButton />
  </div>
);
export const AlternateColors = (): JSX.Element => <AButton pressed color="red" backgroundColor="pink" />;
export const NoText = (): JSX.Element => <AButton hideButtonText={true} />;
export const Pressed = (): JSX.Element => <AButton pressed />;
export const PressedNoText = (): JSX.Element => <AButton pressed hideButtonText={true} />;
