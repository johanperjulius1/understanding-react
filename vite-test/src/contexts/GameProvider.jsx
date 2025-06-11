import { useEffect, useState } from "react";
import { GameContext } from "./GameContext.js";

export function GameProvider({ children }) {
  const [todaysGame, setTodaysGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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

  const submitWord = async (word) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/submit-word", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word: word,
          gameId: todaysGame?.id,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit word");
      }

      const result = await response.json();
      console.log("Word submitted successfully:", result);
      return result;
    } catch (error) {
      console.error("Failed to submit word:", error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <GameContext.Provider
      value={{ todaysGame, loading, submitWord, submitting }}
    >
      {children}
    </GameContext.Provider>
  );
}
