import { useState } from "react";
import styles from "./gamecontrols.module.css";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <section>
      <form method="post">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type or click"
        />
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className={styles["hex-button"]}>Y</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className={styles["hex-button"]}>D</button>
          <button className={`${styles["hex-button"]} ${styles["center"]}`}>
            C
          </button>
          <button className={styles["hex-button"]}>A</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className={styles["hex-button"]}>R</button>
          <button className={styles["hex-button"]}>U</button>
          <button className={styles["hex-button"]}>H</button>
        </div>
      </div>
    </section>
  );
}
