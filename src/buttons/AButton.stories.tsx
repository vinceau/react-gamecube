import React from "react";
import { AButton } from "./AButton";

export default {
  title: "AButton",
};

export const Default = (): JSX.Element => <AButton />;
export const Pressed = (): JSX.Element => <AButton pressed />;
