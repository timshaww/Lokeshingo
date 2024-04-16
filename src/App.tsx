import GameBoard from "./components/GameBoard.tsx";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const handleBingo = () => {
    setShowSplashScreen(true);
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2700);
  };

  return (
    <>
      {showSplashScreen && (
        <div className="fixed inset-0.5 flex flex-col items-center w-screen h-screen">
          <SplashScreen
            className="fixed inset-0.5 flex flex-col items-center w-screen h-screen"
            name="Bingo!"
          />
        </div>
      )}
      <div className={`space-y-2 ${showSplashScreen ? "hidden" : "block"}`}>
        <h1 className="text-indigo-400 font-mono text-6xl">Lokeshingo</h1>
        <p className="font-mono border-b">It's like Bingo, but Lokesh.</p>
        <GameBoard onBingo={handleBingo} />
      </div>
    </>
  );
}

export default App;
//"fixed inset-0 flex items-center justify-center"
