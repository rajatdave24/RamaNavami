import React from "react";
import "./TempleSchedule.css";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

const schedule: ScheduleItem[] = [
  { time: "04:30", title: "Mangala arati", description: "First worship of the day" },
  { time: "05:00", title: "Tulsi-Puja", description: "Honoring Tulasi plant" },
  { time: "07:15", title: "Sringar darshan", description: "Greeting the Deities in new outfit" },
  { time: "07:25", title: "Guru puja", description: "Honoring the Founder-acharya" },
  { time: "08:00", title: "Bhagavatam class", description: "Discourse from Vedic scripture" },
  { time: "12:30", title: "Raj Bhoga arati", description: "Post noon worship" },
  { time: "16:15", title: "Usthapan arati", description: "Early evening worship" },
  { time: "19:00", title: "Sandhya arati", description: "Evening worship ceremony" },
  { time: "19:30", title: "Bhagavad-gita discourse", description: "Honoring Tulasi plant" },
  { time: "20:30", title: "Shayana arati", description: "Last worship ceremony of the day" },
];

const TempleSchedule: React.FC = () => {
  return (
    <div className="temple-schedule-container">
      <div className="temple-schedule-header">
        <h1>Temple Schedule</h1>
      </div>
      <p className="temple-closed-times">
        Closed from 13:00 - 16:00 and 21:00 - 04:30 (Next day)
      </p>
      <div className="temple-schedule-columns">
        {schedule.map((item, index) => (
          <div key={index} className="temple-schedule-item">
            <div className="temple-schedule-time">{item.time}</div>
            <div className="temple-schedule-details">
              <div className="temple-schedule-title">{item.title}</div>
              <div className="temple-schedule-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleSchedule;
