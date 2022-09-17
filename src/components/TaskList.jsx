import Task from "./Task";

export const TaskList = ({task}) => {
  console.log(task);
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">Task List</h2>

      {task.map((tasks) => {
        return(
          <Task
            key={tasks.id}
            tasks={tasks}
          />
        )
      })}
    </div>
  );  
};

export default TaskList;
