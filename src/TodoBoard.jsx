import React from 'react'
import AddTodo from './AddTodo'
import TodoTask from './TodoTask'

function TodoBoard()
{ const[tasks, setTasks] =React.useState([])

  const addTask =(task)=>{
    setTasks([...tasks,task])
  }
  const removeTask =(text)=>{
    const currentTask=tasks
    const newtasks = currentTask.filter((task) => task!== text)
    setTasks(newtasks)
  }
  return(
    <div>
      <AddTodo addTask={addTask} />
      <TodoTask tasks={tasks} removeTask={removeTask} />
    </div>
  )
}

export default TodoBoard