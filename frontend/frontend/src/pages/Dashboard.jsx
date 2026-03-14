import { useState, useEffect } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  // FETCH TASKS
  const fetchTasks = async () => {
    const res = await API.get("/tasks", {
      headers: { Authorization: `Bearer ${token}` }
    });

    setTasks(res.data);
  };

  // PROTECT DASHBOARD
  useEffect(() => {

    if (!token) {
      navigate("/login");
      return;
    }

    fetchTasks();

  }, []);


  const handleLogout = () => {

  localStorage.removeItem("token");

  navigate("/login");

};


  const addTask = async () => {
    await API.post(
      "/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    fetchTasks();
  };

  const markDone = async (id) => {
    await API.put(
      `/tasks/${id}`,
      { status: "done" },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchTasks();
  };

  const editTask = async (id) => {

    const newTitle = prompt("Enter new task title");

    if (!newTitle) return;

    await API.put(
      `/tasks/${id}`,
      { title: newTitle },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchTasks();
  };

  return (
    <div>
        <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    <div className="container">

      

      <h2>Dashboard</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="task-item">

  <span>
    {task.title} {task.status === "done" ? "✅" : ""}
  </span>

  <div className="task-buttons">

    <button onClick={() => editTask(task._id)}>
      Edit
    </button>

    <button onClick={() => markDone(task._id)}>
      Done
    </button>

    <button
      className="delete-btn"
      onClick={() => deleteTask(task._id)}
    >
      Delete
    </button>

  </div>

</li>
        ))}
      </ul>

    </div>
    </div>
  );
}