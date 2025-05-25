import GameControls from "./GameControls";
import PointSection from "./PointSection";
import styles from "./game.module.css";

export default function Game() {
  return (
    <main className={styles.game}>
      <section className={styles["game-section"]}>
        <GameControls></GameControls>
        <PointSection></PointSection>
      </section>
    </main>
  );
}
