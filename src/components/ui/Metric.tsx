import { MetricProps } from "@/types";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Metric({ value, label }: MetricProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1000;
      const step = Math.ceil(end / (duration / 20));
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setDisplayedValue(start);
      }, 20);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="text-5xl font-bold text-[#C39C68]">{displayedValue}+</div>
      <div className="mt-2 text-lg text-[#F9F6F1]">{label}</div>
    </div>
  );
}
