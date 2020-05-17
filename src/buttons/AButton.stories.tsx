import React from "react";
import { AButton } from "./AButton";

export default {
  title: "AButton",
};

export const Default = (): JSX.Element => <AButton />;
export const AlternateColors = (): JSX.Element => <AButton pressed color="red" backgroundColor="pink" />;
export const NoText = (): JSX.Element => <AButton hideButtonText={true} />;
export const Pressed = (): JSX.Element => <AButton pressed />;
export const PressedNoText = (): JSX.Element => <AButton pressed hideButtonText={true} />;
