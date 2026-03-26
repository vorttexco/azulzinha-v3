import React from "react";

type Props = {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
};

export default function ArrowIcon({
  width = 16,
  height = 16,
  stroke = "#FC8F01",
  strokeWidth = 2,
  className,
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33334 8H12.6667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.33334L12.6667 8L8 12.6667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
