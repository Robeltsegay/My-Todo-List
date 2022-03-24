import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle, yo }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          yo={yo}
        />
      ))}
    </>
  );
};
export default Tasks;
