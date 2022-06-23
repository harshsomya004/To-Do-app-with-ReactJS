import React from 'react'
import {css} from "@emotion/css";

function TodoTask(props) {
  return (
      <div>
        {props.tasks.map((task, index) => {
          return (<div style={{
            display: "flex",
            flexDirection: "row", justifyContent: "space-between", alignContent: "center", padding: 10,
            marginRight: 20
          }}><p aria-multiline={"true"} key={index}>
            {task}
          </p>
            <button className={css`
                      height: 40px;
                      background-color: #FFCCCB;
                      border-radius: 12px`} onClick={() => props.removeTask(task)}>Remove
            </button>
          </div>)
        })}
      </div>
  )
}

export default TodoTask