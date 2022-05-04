import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "../src/index.css";
import AddTask from "./components/AddTask";
import Book, { Foo } from "./components/Book";
import Footer from "./components/footer/Footer";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);
  //the follwoing commented part was inside of the state
  // {
  //   id: 1,
  //   text: "Doc apt",
  //   day: "feb 5 2021",
  //   reminder: true,
  // },
  // {
  //   id: 2,
  //   text: "teacher apt",
  //   day: "feb 5 2021",
  //   reminder: true,
  // },
  // {
  //   id: 3,
  //   text: "lover apt",
  //   day: "feb 5 2021",
  //   reminder: true,
  // },
  // {
  //   id: 4,
  //   text: "emp apt",
  //   day: "feb 5 2021",
  //   reminder: true,
  // },

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log("clicked");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <Header
          title="Test Tracker"
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
            yo={showAddTask}
          />
        ) : (
          "No Tasks To Show"
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
