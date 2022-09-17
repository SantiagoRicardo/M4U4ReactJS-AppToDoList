const Task = ({ tasks }) => {
  const { title, date, description } = tasks;

  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Title: <span className="font-normal normal-case">{title}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Description:{" "}
        <span className="font-normal normal-case">{description}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="bg-green-600 hover:bg-green-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="buttom"
        >
          Update
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="buttom"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
