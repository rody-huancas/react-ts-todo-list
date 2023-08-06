import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";

interface Props {
  newAddTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export const TaskForm = ({ newAddTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(task);
    setTask(initialState);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="font-bold uppercase text-xl text-center">
          Agrega una tarea
        </h1>

        <form className="mt-5 flex flex-col gap-5" onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="Ingrese el titulo"
            name="title"
            className="w-full border-2 border-gray-500 px-5 py-2 rounded-lg"
            onChange={handleInputChange}
            value={task.title}
          />

          <textarea
            name="description"
            className="w-full min-h-[100px] border-2 border-gray-500 px-5 py-2 rounded-lg"
            placeholder="Ingrese la descripción"
            onChange={handleInputChange}
            value={task.description}
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-medium py-3 rounded-lg"
          >
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};
