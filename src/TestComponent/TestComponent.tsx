import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div data-testid="test-component" className={`test-component test-component-${theme}`}>
    <h1 className="heading">Test component</h1>
    <h2>Made with love by vince</h2>
  </div>
);

export default TestComponent;
