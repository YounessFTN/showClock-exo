import { useState } from "react";
import { Clock } from "./components/Clock";

function App() {
  const [useClock, setUseClock] = useState(false);

  function showClock() {
    setUseClock(!useClock);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {useClock && <Clock />}
      <button
        onClick={showClock}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        {useClock ? "Hide Clock" : "Show Clock"}
      </button>
    </div>
  );
}

export default App;
