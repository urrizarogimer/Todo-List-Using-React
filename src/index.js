import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';


function List(){
    return(
        <TaskList/>
    );
}

function Task(props){
    return(
        <li className='tasks-item'>{props.taskName}</li>
    );
}

function TaskList(){
    const taskListItem = ["Sky full of stars","Feed Fish","Clean workstation"];
    return(
        <ul>
            {taskListItem.map((task, index) => {
                return <Task key={index} taskName = {task} />;
            })}
        </ul>
    )
}

function App() {
    return(
        <div className="app">
            <header className="app-header">
                <h1>My Amazing Todo-List App </h1>
                <p> The most simple and amazing todo-list app</p>
                <List/>
            </header>
        </div>
    );
}


ReactDOM.render(
<App/>,
document.getElementById('root')
);


