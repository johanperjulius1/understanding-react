import styles from "./header.module.css";

export default function Header({ date, editor }) {
  return (
    <header className={styles.header}>
      <h1>Spelling Bee</h1>
      <p>{date}</p>
      <p>Edited by {editor}</p>

      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            <a href="#stats">Stats</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a href="#puzzle">Play Yesterday's Puzzle</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a href="#hints">Hints</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a href="#more">More</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
