import { TrashIcon } from "./Icons"

type TaskDetailsProps = {
  task: string
  deleteTask: () => void
}

export const TaskDetails = ({ task, deleteTask }: TaskDetailsProps) => {

  return (
    <div className="mt-5 border-2 py-1 px-2 rounded-lg flex items-center justify-between">
      <span>{task}</span>
      <button type="button" onClick={deleteTask}>
        <TrashIcon />
      </button>
    </div>
  )
}
