import styles from "./game-controls.module.css";

export function WordInputForm({ userInput, setUserInput }) {

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  console.log("hello from input form", userInput)
  return (
    <form method="post">
      <input
        className={styles.input}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type or click"
      />
    </form>
  );
}
