import React from "react";
import "./KumbhMela.css";

interface ScheduleItem {
  time: string;
  title: string;
  
}

const schedule: ScheduleItem[] = [
  { time: "January 14,2025", title: "Makara Sankranti"},
  { time: "January 29,2025", title: "Mauni Amavasya"},
  { time: "Februry 03,2025", title: "Vasanta Panchami"},
  
];

const TempleSchedule: React.FC = () => {
  return (
    <div className="temple-schedule-container">
      <div className="temple-schedule-header">
        <h2>Important Bathing Dates</h2>
      
      </div>
      <p className="temple-closed-times">
      of Kumbh Mela at Prayagraj
      </p>
      <div>
      <p className="pKumps">January 14,2025 Makara Sankranti</p>
            <p className="pKumps">January 29,2025 Mauni Amavasya</p>
            <p className="pKumps">Februry 03,2025 Vasanta Panchami</p>
      </div>
     
    </div>
  );
};

export default TempleSchedule;
