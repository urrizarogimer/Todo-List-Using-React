import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import TaskList from './components/TaskLists.js';

function App() {
    return(
        <div className="app">
            <header className="app-header">
                <h1>My Amazing Todo-List App </h1>
                <p> The most simple and amazing todo-list app</p>
                <TaskList/>
            </header>
        </div>
    );
}


ReactDOM.render(
<App/>,
document.getElementById('root')
);


