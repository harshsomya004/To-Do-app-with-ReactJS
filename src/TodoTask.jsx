import React from 'react'

function TodoTask(props)
{
  return(
    <div>
      {props.tasks.map((task,index)=>{
        return <p onClick={()=> props.removeTask(task)} key={index}>{task}</p>
      })}
    </div>
  )
}

export default TodoTask