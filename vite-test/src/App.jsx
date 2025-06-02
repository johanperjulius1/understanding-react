import { useGame } from "./hooks/useGame.js";
import Header from "./Components/Header";
import Game from "./Components/Game";

function App() {
  const { todaysGame, loading } = useGame();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header date={todaysGame.displayDate} editor={todaysGame.editor} />
      <Game />
    </>
  );
}

export default App;
