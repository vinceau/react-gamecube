import React from "react";

export const AnalogStickCircle: React.FC<{
  color?: string;
  strokeColor?: string;
}> = (props) => {
  const color = props.color ? props.color : "none";
  const strokeColor = props.strokeColor ? props.strokeColor : "#000000";
  return (
    <div>
      <svg width="100%" viewBox="0 0 166 166" version="1.1" overflow="visible">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(3.000000, 3.000000)" fillRule="nonzero" stroke={strokeColor}>
            <circle id="circle4351" strokeWidth="5" fill={color} cx="80" cy="80" r="80"></circle>
            <path
              d="M80,61 C90.4934102,61 99,69.5065898 99,80 C99,90.4934102 90.4934102,99 80,99 C69.5065898,99 61,90.4934102 61,80 C61,69.5065898 69.5065898,61 80,61 Z"
              id="circle4182-path"
              strokeWidth="2"
            />
            <path
              d="M80,41 C101.539105,41 119,58.4608948 119,80 C119,101.539105 101.539105,119 80,119 C58.4608948,119 41,101.539105 41,80 C41,58.4608948 58.4608948,41 80,41 Z"
              id="circle4180-path"
              strokeWidth="2"
            />
            <path
              d="M80,21 C112.5848,21 139,47.4151998 139,80 C139,112.5848 112.5848,139 80,139 C47.4151998,139 21,112.5848 21,80 C21,47.4151998 47.4151998,21 80,21 Z"
              id="circle4178-path"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
