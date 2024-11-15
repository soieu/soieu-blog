// CustomComponents.js
import React from "react";
import styles from "./CustomComponents.module.css";

export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.highlight}>{children}</div>
);

export const CustomCodeBlock = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <pre className={styles.codeBlock}>
    <code>{children}</code>
  </pre>
);
