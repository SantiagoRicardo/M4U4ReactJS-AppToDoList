import { useState } from "react";
import { AlertError } from "./AlertError";

export const Form = ({ task, setTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  const generateId = () => {
    const id = Math.random().toString(20).substr(2);

    return id
  }

  //Validation Form
  const handleSudmit = (e) => {
    e.preventDefault();

    if ([title, date, description].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //Task Objects

    const objectsTask = {
      title,
      date,
      description,
      id: generateId()
    };
    setTask([...task, objectsTask]);

    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">Create Task</h2>

      <form
        onSubmit={handleSudmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && 
          <AlertError>
            <h1>Missing Fields To Fill Out</h1>
          </AlertError>
        }
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-gray-700 uppercase font-bold"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Title Task"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="Task Description"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          value="Create Task"
        />
      </form>
    </div>
  );
};
