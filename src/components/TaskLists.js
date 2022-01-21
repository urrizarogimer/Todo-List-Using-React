import react from 'react';
import Task from './Task.js';
import { useState } from 'react';
function TaskList(){
    const taskListItem = ["Sky full of stars","Feed Fish","Clean workstation"];
   
    const [taskValue, setTaskValue] = useState("Add new Task");
    console.log("taskValue:" + taskValue);
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value);
    }
    console.log(taskValue);
    return(
        <>
            <input 
                className="task-input" 
                placeholder='Add Task' 
                onChange={inputChangeHandler}/>
                
            <ul>
                {taskListItem.map((task, index) => {
                    return <Task key={index} taskName = {task} />;
                })}
            </ul>
        </>
    )
}

export default TaskList;