import { useEffect, useState } from "react";
import API from "../api";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async (task) => {
    await API.post("/tasks", task);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <TaskForm onCreate={createTask} />

      {tasks.map((t) => (
        <div key={t._id}>
          <h4>{t.title}</h4>
          <p>{t.description}</p>
          <button onClick={() => deleteTask(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}