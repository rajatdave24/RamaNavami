import React, { useState, useEffect } from "react";
import "./StatsSection.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { value: 300, suffix: "cr+", label: "Meals Distributed" },
    { value: 55, suffix: "years", label: "of service to humanity" },
    { value: 110, suffix: "+", label: "Kitchens across India" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatBox key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
      ))}
    </div>
  );
};

const StatBox: React.FC<{ value: number; suffix: string; label: string }> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Duration of animation in milliseconds
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-box">
      <h1 className="stat-value" style={{fontSize:'50px'}}>
        {count} {suffix}
      </h1>
      <p className="stat-label" >{label}</p>
    </div>
  );
};

export default StatsSection