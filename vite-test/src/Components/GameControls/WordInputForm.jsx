import styles from "./inputForm.module.css";

export function WordInputForm({ userInput, setUserInput, hasErrors, errorMessage }) {

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

    // className logic
    const inputClassName = [styles.input, hasErrors && styles["error"]]
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
      {hasErrors && <p className={styles.errorMessage}>{errorMessage}</p>}
    </form>
  );
}
