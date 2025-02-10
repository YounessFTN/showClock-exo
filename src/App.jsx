import { useState } from "react";
import { Clock } from "./components/Clock";

function App() {
  const [useClock, setUseClock] = useState(false);

  function showClock() {
    setUseClock(!useClock);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <svg
        width="56"
        height="56"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="5" fill="black" />
        <path
          d="M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z"
          stroke="url(#paint0_linear_238_156)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12V18L22 20"
          stroke="url(#paint1_linear_238_156)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_238_156"
            x1="18"
            y1="8"
            x2="18"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7C7C7" />
            <stop offset="1" stopColor="#5A5A5A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238_156"
            x1="20"
            y1="12"
            x2="20"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7C7C7" />
            <stop offset="1" stopColor="#5A5A5A" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="text-4xl font-extrabold tracking-wide">TicTac</h1>
      {useClock && <Clock />}

      <button
        onClick={showClock}
        className="mt-6 px-6 py-2 rounded-lg text-white bg-black border border-black shadow-md hover:bg-white hover:text-black transition duration-300"
      >
        {useClock ? "Hide Clock" : "Show Clock"}
      </button>
    </div>
  );
}

export default App;
