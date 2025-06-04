import { useState, useEffect } from "react";
import { useGame } from "../hooks/useGame.js";
import styles from "./game-controls.module.css";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");
  const [shuffledOuterLetters, setShuffledOuterLetters] = useState([]);
  const { todaysGame, loading } = useGame();

  // Initialize shuffled letters when game data loads
  useEffect(() => {
    if (todaysGame?.outerLetters) {
      setShuffledOuterLetters([...todaysGame.outerLetters]);
    }
  }, [todaysGame]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = (event) => {
    setUserInput((prev) => prev + event.target.textContent);
  };

  const shuffleLetters = () => {
    const shuffled = [...shuffledOuterLetters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOuterLetters(shuffled);
  };

  const deleteLastLetter = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };

  if (loading || !todaysGame) return <div>Loading...</div>;

  const { centerLetter } = todaysGame;

  return (
    <section className={styles["game-controls"]}>
      <div className={styles["hive"]}>
        <div className={styles["button-container"]}>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["button-one"]}`}
          >
            {shuffledOuterLetters[0]}
          </button>
        </div>
        <div className={styles["button-container"]}>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["button-two"]}`}
          >
            {shuffledOuterLetters[1]}
          </button>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["center"]}`}
          >
            {centerLetter}
          </button>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["button-three"]}`}
          >
            {shuffledOuterLetters[2]}
          </button>
        </div>
        <div className={styles["button-container"]}>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["button-four"]}`}
          >
            {shuffledOuterLetters[3]}
          </button>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["button-five"]}`}
          >
            {shuffledOuterLetters[4]}
          </button>
          <button
            onClick={handleButtonClick}
            className={`${styles["hex-button"]} ${styles["button-six"]}`}
          >
            {shuffledOuterLetters[5]}
          </button>
        </div>
      </div>
      <form method="post">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type or click"
        />
      </form>
      <ActionButtons onShuffle={shuffleLetters} onDelete={deleteLastLetter} />
    </section>
  );
}

function ActionButtons({ onShuffle, onDelete }) {
  return (
    <div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onShuffle}>Shuffle</button>
      <button>Enter</button>
    </div>
  );
}
