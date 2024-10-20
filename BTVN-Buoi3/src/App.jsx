import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HiOutlineTrash } from "react-icons/hi"; 
import { HiOutlinePencil } from "react-icons/hi"; 
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Create a react project 🔥', date: '5:23 AM, 01/06/2022'},
    { id: 2, text: 'Learn React ❤️', date: '5:22 AM, 01/06/2022'},
    { id: 3, text: 'Create a Todo App 💻', date: '5:21 AM, 01/06/2022', completed : true},
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (newTask.trim()) {
      const now = new Date();
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        date: `${now.getHours()}:${now.getMinutes()} AM, ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      
    }
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
    setNewTask(task.text);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1 className="title">TODO LIST</h1>
      <div className="add-task-container">
        <button className="add-task-button" onClick={addTask}>
          Add Task
        </button>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="input"
          className="input"
        />
        <button onClick={addTask} className="add-button">
          Thêm
        </button>

        <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className="select"
      >
        <option>All</option>
        <option>Active</option>
        <option>Completed</option>
      </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'task-item-completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <div className="task-content">
              <span>{task.text}</span>
              <p className="task-date">{task.date}</p>
            </div>
            <button onClick={() => deleteTask(task.id)} className="task-button">
              <HiOutlineTrash />
            </button>
            <button onClick={() => editTask(task)} className="task-button">
              <HiOutlinePencil />
            </button>
          </li>
        ))}
      </ul>
    </div>


  )
}

export default App;
