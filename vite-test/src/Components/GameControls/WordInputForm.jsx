import styles from "./inputForm.module.css";
import { useGame } from "../../hooks/useGame";

export function WordInputForm({ userInput, setUserInput }) {
  const { todaysGame } = useGame();
  const { validLetters, centerLetter } = todaysGame;

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Simple validation - no state needed
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

  // className logic
  const inputClassName = [styles.input, hasErrors && styles["error"]]
    .filter(Boolean)
    .join(" ");

  // Error messages
  const getErrorMessage = () => {
    if (isTooShort) return "Word must be at least 4 letters";
    if (hasInvalidLetters) return "Word contains invalid letters";
    if (missingCenterLetter)
      return `Word must contain the center letter "${centerLetter}"`;
    return null;
  };

  return (
    <form method="post">
      <input
        className={inputClassName}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type or click"
      />
      {hasErrors && <p className={styles.errorMessage}>{getErrorMessage()}</p>}
    </form>
  );
}
