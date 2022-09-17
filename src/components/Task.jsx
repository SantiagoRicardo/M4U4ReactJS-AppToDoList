const Task = ({tasks}) => {

  const {title, date, description} = tasks

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
    </div>
  );
};

export default Task;
