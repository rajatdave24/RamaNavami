import React from "react";
import "./KumbhMela.css";

interface ScheduleItem {
  time: string;
  title: string;
  
}

const schedule: ScheduleItem[] = [
  { time: "January 14,2025", title: "Rama Navami"},
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
      <div className="temple-schedule-columns">
        
          <div key={"inde"} className="temple-schedule-item">
           
            <p className="pKumps">January 14,2025 Rama Navami</p>
            <p className="pKumps">January 29,2025 Mauni Amavasya</p>
            <p className="pKumps">Februry 03,2025 Vasanta Panchami</p>
           
            <div className="temple-schedule-details">
              
             
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default TempleSchedule;
