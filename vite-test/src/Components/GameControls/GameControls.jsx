import { useState, useEffect } from "react";
import { useGame } from "../../hooks/useGame.js";
import { HexButtons } from "./HexButtons.jsx";
import { ActionButtons } from "./ActionButtons.jsx";
import styles from "./game-controls.module.css";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");
  const [shuffledOuterLetters, setShuffledOuterLetters] = useState([]);
  const { todaysGame, loading } = useGame();

  const shuffleLetters = () => {
    const shuffled = [...shuffledOuterLetters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOuterLetters(shuffled);
  };

  // Initialize shuffled letters when game data loads
  useEffect(() => {
    if (todaysGame?.outerLetters) {
      setShuffledOuterLetters([...todaysGame.outerLetters]);
    }
  }, [todaysGame]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  if (loading || !todaysGame) return <div>Loading...</div>;

  // const { answers } = todaysGame;

  return (
    <section className={styles["game-controls"]}>
      <HexButtons
        shuffledOuterLetters={shuffledOuterLetters}
        setShuffledOuterLetters={setShuffledOuterLetters}
        setUserInput={setUserInput}
      />
      <form method="post">
        <input
          className={styles.input}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type or click"
        />
      </form>
      <ActionButtons onShuffle={shuffleLetters} setUserInput={setUserInput} />
    </section>
  );
}
