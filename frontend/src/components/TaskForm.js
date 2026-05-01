import { useState } from "react";

export default function TaskForm({ onCreate }) {
  const [task, setTask] = useState({});

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTask({ ...task, title: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setTask({ ...task, description: e.target.value })} />
      <button onClick={() => onCreate(task)}>Add Task</button>
    </div>
  );
}