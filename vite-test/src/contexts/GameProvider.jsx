import { useEffect, useState } from "react";
import { GameContext } from "./GameContext.js";

export function GameProvider({ children }) {
  const [todaysGame, setTodaysGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);

  const addFoundWord = (word) => {
    setFoundWords((prev) => [...prev, word]);
    // Calculate and update score
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setTodaysGame(data.data.today);
      } catch (error) {
        console.error("Failed to fetch game data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <GameContext.Provider
      value={{
        todaysGame,
        loading,
        foundWords,
        addFoundWord,
        score,
        setScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
