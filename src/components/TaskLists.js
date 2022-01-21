import react from 'react';
import Task from './Task.js';
import { useState } from 'react';
function TaskList(){
    const [taskListItem, setTaskListItem] = useState(["Sky full of stars","Feed Fish","Clean workstation"]);
   
    const [taskValue, setTaskValue] = useState("");
    console.log("taskValue:" + taskValue);
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value);
    }
    

    const addTaskHandler = () =>{
        setTaskListItem([taskValue, ...taskListItem]);
        setTaskValue("");
    }
    return(
        <>
            <input 
                className="task-input" 
                placeholder='Add Task' 
                onChange={inputChangeHandler}
                onBlur={addTaskHandler}
                value={taskValue}
                />

                
            <ul>
                {taskListItem.map((task, index) => {
                    return <Task key={index} taskName = {task} />;
                })}
            </ul>
        </>
    )
}

export default TaskList;