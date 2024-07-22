import React from "react";

function Icon(props: {
  className: string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={props.className}>
      <path fill="none" d="M0 0H256V256H0z"></path>
      <rect
        width="192"
        height="144"
        x="32"
        y="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="16"
        transform="rotate(180 128 120)"
      ></rect>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M160 224L96 224"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M32 152L224 152"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M128 192L128 224"
      ></path>
    </svg>
  );
}

export default Icon;
