import React from 'react'
import {css} from "@emotion/css";

function AddTodo(props) {
    const [Task, setTask] = React.useState('')
    const handleInputChange = (event) => {
        setTask(event.target.value)
    }
    const handleAddTask = () => {
        props.addTask(Task)
        setTask('')
    }
    return (
        <div>
            <input type="text" placeholder="Enter Todo Task" value={Task}
                   onChange={handleInputChange}
                   className={css`
                     height: 40px;
                     width: 200px;
                     margin-right: 10px;
                     border-radius: 5%;
                   `}/>
            <button onClick={handleAddTask}
                    className={css`
                      height: 40px;
                      background-color: aliceblue;
                      border-radius: 12px;`}
            >Add Task
            </button>
        </div>
    )
}

export default AddTodo