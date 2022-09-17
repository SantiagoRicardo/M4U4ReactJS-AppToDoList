import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {

  const [task, setTask] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          task={task}
          setTask={setTask}
        />
        <TaskList
          task={task}
        />
      </div>
      
    </div>
  );
}

export default App;
