import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      console.log("ckik");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        {date.toLocaleTimeString("fr-MA")}
      </h1>
    </div>
  );
}
