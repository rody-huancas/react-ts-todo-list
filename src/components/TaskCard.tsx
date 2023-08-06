import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <>
      <div className="w-80 h-40 bg-gray-700 p-5 rounded-lg text-white text-center flex flex-col justify-center gap-2">
        <p
          className={`font-bold text-right ${
            task.completed ? "text-blue-300" : "text-red-500"
          }`}
        >
          {task.completed ? "✓" : "✘"}
        </p>
        <h2 className="font-bold text-xl uppercase">{task.title}</h2>
        <p>{task.description}</p>
        <button
          onClick={() => task.id && deleteTask(task.id)}
          className="bg-red-600 text-white py-2 px-6 rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </>
  );
};
