// import { useState } from 'react'
import { useState } from "react"
import "./style.css"
function App() {
  const [newItem,setNewItem] = useState("")
  const [todoList,setTodoList] = useState([])
  const handleDelete = (taskName)=>{
    setTodoList(todoList.filter((task)=>task !== taskName))
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    // setTodoList([...todoList,{id:Math.floor(Math.random()*10),title:newItem,completed:false}])
    setTodoList(currentItems=>{
      return [...currentItems,{id:Math.floor(Math.random()*10),title:newItem,completed:false}]
    })
  }

  return (
    <>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input type="text" id='item' onChange={(e)=>setNewItem(e.target.value)} />
        </div>
        <button className="btn" onClick={handleSubmit}>Add</button>
      </form>

      <h1 className="header">Todo List</h1>

      <ul className="list">
        {todoList.map((task,index)=>{
          return(
        <li key={index}>
          <label htmlFor="">
          {/* {task.completed && checked} */}
            <input type="checkbox"  />
            {task.title}
          </label>
          <button className="danger" onClick={()=>handleDelete(task.title)}>delete</button>
        </li>)})}
      </ul>
    </>
  )
}

export default App
