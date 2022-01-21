import React from 'react';
import List from '../components/Lists.js';
class App extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //       name: "React",
    //     };
    // }
    render() {
        return(
        <div className="app">
            <header className="app-header">
                <h1>My Amazing Todo-List App </h1>
                <p> The most simple and amazing todo-list app</p>
                <List name="Hello"/>
            </header>
        </div>
        );
    };
};

export default App;
