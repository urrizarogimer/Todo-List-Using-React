import React from 'react';
class List extends React.Component {

    render(props) {
        return(
                <ul>
                    <li className="tasks-item">Feed Birds {props.name}</li>
                    <li className="tasks-item">Feed Fish</li>
                    <li className="tasks-item">Clean workstation</li>
                </ul>
        );
    };
};

export default List;
