import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");
  const [calDate, setCalDate] = useState(new Date());

  function timechange(calDate) {
    // change results based on calendar date click
    setCalDate(calDate);
    console.log(calDate);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("yo add task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Set Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Set Day & Time</label>
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />{" "}
        {/* <Calendar /> */}
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          //   checked={reminder}
          placeholder="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save-Task" />
    </form>
  );
};
export default AddTask;
