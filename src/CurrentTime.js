import { useState, useEffect } from "react";

export function CurrentTime({ offset }) {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 200);

    return () => clearInterval(interval);
  }, []);

  const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;

  return new Date(utc + 3600000 * offset).toLocaleTimeString();
}
