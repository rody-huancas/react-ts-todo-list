import { useState } from "react";
import { Task } from "./interfaces/Task";
import { TaskForm, TaskList } from "./components";
interface Props {
  title?: string;
}

const App = ({ title }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn react",
      description: "Learn react",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="w-full mx-auto mt-10 flex flex-col items-center gap-10">
        {title && (
          <h1 className="font-extrabold text-6xl uppercase">{title}</h1>
        )}
        <main className="flex justify-center gap-10">
          <div className="w-[350px] bg-white">
            <TaskForm />
          </div>
          <div className="w-[750px] grid grid-cols-2 gap-5">
            <TaskList tasks={tasks} />
            <TaskList tasks={tasks} />
            <TaskList tasks={tasks} />
            <TaskList tasks={tasks} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
