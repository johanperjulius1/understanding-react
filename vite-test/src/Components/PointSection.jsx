import React from "react";
import styles from "./points-section.module.css";

export default function PointSection() {
  return (
    <aside className={styles["points-container"]}>
      <div className={styles["progress-container"]}>
        <div className={`${styles.circle} ${styles.one} ${styles.active}`}>
          
        </div>
        <div className={`${styles.circle} ${styles.two}`}></div>
        <div className={`${styles.circle} ${styles.three}`}></div>
        <div className={`${styles.circle} ${styles.four}`}></div>
      </div>
    </aside>
  );
}
