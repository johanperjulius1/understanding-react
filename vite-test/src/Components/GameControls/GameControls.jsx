import { useState, useEffect } from "react";
import { useGame } from "../../hooks/useGame.js";
import { HexButtons } from "./HexButtons.jsx";
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

  const deleteLastLetter = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };

  if (loading || !todaysGame) return <div>Loading...</div>;

  const { centerLetter, answers } = todaysGame;

  return (
    <section className={styles["game-controls"]}>
      <HexButtons shuffledOuterLetters={shuffledOuterLetters} setShuffledOuterLetters={setShuffledOuterLetters} />
      <form method="post">
        <input
          className={styles.input}
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
    <div className={styles["action-buttons-container"]}>
      <button className={styles["action-button"]} onClick={onDelete}>
        Delete
      </button>
      <button className={styles["action-button"]} onClick={onShuffle}>
        Shuffle
      </button>
      <button className={styles["action-button"]}>Enter</button>
    </div>
  );
}
