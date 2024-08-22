import { useEffect, useState } from "react"
import { TasksList } from "./TasksList"

const initialTasks = () => {
  const localStorageTask = localStorage.getItem("todo-tasks")
  return localStorageTask ? JSON.parse(localStorageTask) : []
}

export const TodoApp = () => {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState<string[]>(initialTasks)

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks))
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return
    setTasks([...tasks, newTask])
    // setNewTask("")
  }

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <main className="max-w-5xl mx-auto mt-20">
      <div className="flex flex-col items-center lg:flex-row gap-5">
        <div className="w-1/2 border-2 p-5 rounded-lg bg-white">
          <h2 className="text-4xl font-black text-center">Lista de <span className="text-indigo-600">Tareas</span></h2>
          <div className="space-y-2 mt-5">
            <input
              type="text" 
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              placeholder="Nueva Tarea"
              className="block mx-auto border-2 py-1 px-2 rounded-lg w-full text-center"
            />
            <button
              type="button"
              className="block mx-auto border-2 py-1 px-2 rounded-lg w-full bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-700 transition-all"
              onClick={handleAddTask}
            >Agregar Tarea</button>
          </div>
        </div>
        <div className="w-1/2 border-2 p-5 rounded-lg bg-white overflow-y-scroll h-80 scroll-bar">
          <h2 className="text-4xl font-black text-center">Tus <span className="text-indigo-600">Tareas</span></h2>
          <TasksList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </main>
  )
}
