import { TaskCard } from ".";
import { Task } from "../interfaces/Task";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
};
