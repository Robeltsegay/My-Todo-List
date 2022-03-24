import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle, yo }) => {
  return (
    <div
      className={`task $ {!yo ? 'taskReminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      {console.log(yo)}

      <h3>
        {" "}
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />{" "}
      </h3>
      <h3> {task.day} </h3>
      <h3> {task.reminder} </h3>
    </div>
  );
};

export default Task;
