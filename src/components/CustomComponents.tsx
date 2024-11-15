// CustomComponents.js
import React from "react";
import styles from "./CustomComponents.module.css";

export const Highlight = ({ children }) => (
  <div className={styles.highlight}>{children}</div>
);

export const CustomCodeBlock = ({ children }) => (
  <pre className={styles.codeBlock}>
    <code>{children}</code>
  </pre>
);
