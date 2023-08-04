import { TaskCard } from ".";
import { Task } from "../interfaces/Task";

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </>
  );
};
