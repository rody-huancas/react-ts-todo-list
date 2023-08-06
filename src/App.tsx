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

  const getCurrentTimestamp = (): number => new Date().getTime();

  const newAddTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);
  };

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <>
      <div className="w-full mx-auto my-10 flex flex-col items-center gap-10">
        {title && (
          <h1 className="font-extrabold text-6xl uppercase">{title}</h1>
        )}
        <main className="flex justify-center gap-10">
          <div className="w-[350px] h-[320px] bg-white  shadow-lg rounded-lg p-5">
            <TaskForm newAddTask={newAddTask} />
          </div>
          <div className="w-[750px] grid grid-cols-2 gap-5">
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
