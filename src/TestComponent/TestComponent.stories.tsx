import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent",
};

export const Primary = (): JSX.Element => <TestComponent theme="primary" />;

export const Secondary = (): JSX.Element => <TestComponent theme="secondary" />;
