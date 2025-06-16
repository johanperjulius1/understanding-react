import { useState, useEffect } from "react";
import { useGame } from "../../hooks/useGame.js";
import { HexButtons } from "./HexButtons.jsx";
import { ActionButtons } from "./ActionButtons.jsx";
import styles from "./game-controls.module.css";
import { WordInputForm } from "./WordInputForm.jsx";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");
  const [shuffledOuterLetters, setShuffledOuterLetters] = useState([]);
  const { todaysGame, loading } = useGame();
  const { validLetters, centerLetter } = todaysGame;

  const shuffleLetters = () => {
    const shuffled = [...shuffledOuterLetters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOuterLetters(shuffled);
  };

  useEffect(() => {
    if (todaysGame?.outerLetters) {
      setShuffledOuterLetters([...todaysGame.outerLetters]);
    }
  }, [todaysGame]);

  if (loading || !todaysGame) return <div>Loading...</div>;

  // Validation
  const isTooShort = userInput.length > 0 && userInput.length < 4;

  const hasInvalidLetters = userInput
    .toLowerCase()
    .split("")
    .some((letter) => !validLetters.includes(letter));

  const hasCenterLetter = userInput
    .toLowerCase()
    .includes(centerLetter.toLowerCase());
  const missingCenterLetter = userInput.length > 0 && !hasCenterLetter;

  // Combined validation
  const hasErrors = isTooShort || hasInvalidLetters || missingCenterLetter;

  // Submit handler
  const submitHandler = (event) => {
    event.preventDefault();
  };

  // Error messages
  const getErrorMessage = () => {
    if (isTooShort) return "Word must be at least 4 letters";
    if (hasInvalidLetters) return "Word contains invalid letters";
    if (missingCenterLetter)
      return `Word must contain the center letter "${centerLetter}"`;
    return null;
  };

  // const { answers } = todaysGame;

  return (
    <section className={styles["game-controls"]}>
      <WordInputForm
        userInput={userInput}
        setUserInput={setUserInput}
        hasErrors={hasErrors}
        errorMessage={hasErrors && getErrorMessage()}
        submitHandler={submitHandler}
      ></WordInputForm>
      <HexButtons
        shuffledOuterLetters={shuffledOuterLetters}
        setShuffledOuterLetters={setShuffledOuterLetters}
        setUserInput={setUserInput}
      />
      <ActionButtons
        hasErrors={hasErrors}
        onShuffle={shuffleLetters}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </section>
  );
}
