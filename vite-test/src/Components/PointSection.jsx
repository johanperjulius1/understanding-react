import React from "react";
import styles from "./points-section.module.css";

export default function PointSection() {
  return (
    <aside className={styles["points-container"]}>
      <div className={styles["progress-container"]}>
        <div className={`${styles.circle} ${styles.one} ${styles.active}`}>
          1
        </div>
        <div className={`${styles.circle} ${styles.two}`}>2</div>
        <div className={`${styles.circle} ${styles.three}`}>3</div>
        <div className={`${styles.circle} ${styles.four}`}>4</div>
      </div>
    </aside>
  );
}
