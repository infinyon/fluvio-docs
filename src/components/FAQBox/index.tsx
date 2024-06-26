import React, { useEffect, useRef, useState } from "react";

import styles from './styles.module.css';

export default function FAQBox({ children, title }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <article className={styles.faqBox}>
      <button type="button" className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
      </button>
      <div className={styles.content} style={{ height }}>
        <div ref={ref}>
          <div>{children}</div >
        </div>
      </div>
    </article >
  );
}
