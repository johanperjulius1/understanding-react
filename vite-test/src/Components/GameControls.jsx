import { useState } from "react";
import { useGame } from "../hooks/useGame.js";
import styles from "./game-controls.module.css";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");
  const { todaysGame, loading } = useGame();

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  if (loading || !todaysGame) return <div>Loading...</div>;

  const { centerLetter, outerLetters } = todaysGame;

  return (
    <section className={styles["game-controls"]}>
      <div className={styles["hive"]}>
        <div className={styles["button-container"]}>
          <button className={`${styles["hex-button"]} ${styles["button-one"]}`}>
            {outerLetters[0]}
          </button>
        </div>
        <div className={styles["button-container"]}>
          <button className={`${styles["hex-button"]} ${styles["button-two"]}`}>
            {outerLetters[1]}
          </button>
          <button className={`${styles["hex-button"]} ${styles["center"]}`}>
            {centerLetter}
          </button>
          <button
            className={`${styles["hex-button"]} ${styles["button-three"]}`}
          >
            {outerLetters[2]}
          </button>
        </div>
        <div className={styles["button-container"]}>
          <button
            className={`${styles["hex-button"]} ${styles["button-four"]}`}
          >
            {outerLetters[3]}
          </button>
          <button
            className={`${styles["hex-button"]} ${styles["button-five"]}`}
          >
            {outerLetters[4]}
          </button>
          <button className={`${styles["hex-button"]} ${styles["button-six"]}`}>
            {outerLetters[5]}
          </button>
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
