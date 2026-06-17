import { useEffect, useState } from "react";

export function useCountUp(target: number, durationMs: number = 1500, trigger: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = durationMs;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      const progress = start * (end / (totalMiliseconds / incrementTime));
      const nextVal = Math.min(Math.floor(progress), end);
      
      setCount(nextVal);
      
      if (nextVal === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, durationMs, trigger]);

  return count;
}
