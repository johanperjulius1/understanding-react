import { useState } from "react";
import styles from "./game-controls.module.css";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <section className={styles["game-controls"]}>
      <div className={styles["hive"]}>
        <div className={styles["button-container"]}>
          <button className={styles["hex-button"]}>Y</button>
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["hex-button"]}>D</button>
          <button className={`${styles["hex-button"]} ${styles["center"]}`}>
            C
          </button>
          <button className={styles["hex-button"]}>A</button>
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["hex-button"]}>R</button>
          <button className={styles["hex-button"]}>U</button>
          <button className={styles["hex-button"]}>H</button>
        </div>
      </div>
      <form method="post">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type or click"
        />
      </form>
      <ActionButtons />
    </section>
  );
}

function ActionButtons() {
  return (
    <div>
      <button>Delete</button>
      <button>Shuffle</button>
      <button>Enter</button>
    </div>
  );
}
