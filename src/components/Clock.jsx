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
      <h2 className="text-xl font-bold text-black">
        {date.toLocaleTimeString("fr-MA")}
      </h2>
    </div>
  );
}
