import { TaskDetails } from "./TaskDetails"

type TasksListProps = {
  tasks: string[]
  deleteTask: (index: number) => void
}

export const TasksList = ({ tasks, deleteTask }: TasksListProps) => {

  return (
    <>
      {
        tasks.map((task, index) => (
          <TaskDetails task={task} deleteTask={() => deleteTask(index)} key={index} />
        ))
      }
    </>
  )
}