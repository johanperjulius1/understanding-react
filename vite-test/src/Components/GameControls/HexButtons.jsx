import styles from "./game-controls.module.css";

export function HexButtons({ shuffledOuterLetters, setShuffledOuterLetters }) {
  const shuffleLetters = () => {
    const shuffled = [...shuffledOuterLetters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOuterLetters(shuffled);
  };

  const handleButtonClick = (event) => {
    setUserInput((prev) => prev + event.target.textContent);
  };
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
  </div>;
}
