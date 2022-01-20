import React from 'react';
class App extends React.Component {

    render() {
        return(
        <div className="app">
            <header className="app-header">
                <h1>My Amazing Todo-List App</h1>
                <p> The most simple and amazing todo-list app</p>
                <ul>
                    <li className="tasks-item">Feed Birds</li>
                    <li className="tasks-item">Feed Fish</li>
                    <li className="tasks-item">Clean workstation</li>
                </ul>
            </header>
        </div>
        );
    };
};

export default App;
