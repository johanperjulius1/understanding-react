import styles from "./inputForm.module.css";

export function WordInputForm({ userInput, setUserInput }) {
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Simple validation - no state needed
  const isTooShort = userInput.length > 0 && userInput.length < 4;

  // Clean className logic
  const inputClassName = [styles.input, isTooShort && styles["too-short"]]
    .filter(Boolean)
    .join(" ");

  return (
    <form method="post">
      <input
        className={inputClassName}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type or click"
      />
      {isTooShort && (
        <p className={styles.errorMessage}>Word must be at least 4 letters</p>
      )}
    </form>
  );
}
