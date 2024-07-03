import React, { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

export default function FAQBox({ children, title }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-6">
      <dt>
        <button
          type="button"
          className="cursor-pointer flex w-full items-start justify-between text-left text-gray-900 bg-transparent border-0"
          aria-controls="faq-0"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-semibold leading-7">{title}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? <Minus /> : <Plus />}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12" id="faq-0">
          <p className="text-base leading-7 text-gray-600">{children}</p>
        </dd>
      )}
    </div>
  );
}

function Plus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 256 256"
    >
      <path d="M224 128a8 8 0 01-8 8h-80v80a8 8 0 01-16 0v-80H40a8 8 0 010-16h80V40a8 8 0 0116 0v80h80a8 8 0 018 8z"></path>
    </svg>
  );
}

function Minus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 256 256"
    >
      <path d="M224 128a8 8 0 01-8 8H40a8 8 0 010-16h176a8 8 0 018 8z"></path>
    </svg>
  );
}
