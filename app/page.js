"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (val) =>{
    val.preventDefault()
    setmainTask([...mainTask, {title,desc}])
    setDesc("")
    setTitle("")
  }
  const deleteHandler = (i) =>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }
  let renderTask = <h2>No Task Present</h2>
  renderTask = mainTask.map((t,i)=>{
    return (
    <li className='flex justify-between items-center'>
      <div className='flex justify-between item-centre w-2/3'>
      <h2 className='text-2xl font-bold'>{i+1}.  {t.title}</h2>
      <h3 className='text-xl font-semibold'>{t.desc}</h3>
      
      </div>
      <button onClick={()=>{
        deleteHandler(i);
      }} className='rounded flex font-bold font-2xl bg-red-400 px-4 py-2 m-7'>Delete</button>
    </li>
    )
  })
  return (
    <>
      <h1 className='text-center p-5 bg-purple-700 text-white text-5xl font-bold'>ToDo List</h1>
      <form onSubmit={submitHandler}>
        <input
          className='m-10 px-4 py-2 border-purple-800 rounded-lg border-4 text-2xl'
          type='text'
          placeholder='Enter Title Here'
          value={title}
          onChange={(val)=>{
            setTitle(val.target.value)
          }}
        />
        <input
          className='m-10 px-4 py-2 border-purple-800 rounded-lg border-4 text-2xl'
          type='text'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(val)=>{
            setDesc(val.target.value)
          }}
        />
        <button className='bg-purple-400 rounded-xl m-10 px-4 py-2 font-bold text-2xl'>Add Task</button>
      </form>
      <hr/>
      <div className='p-5 bg-purple-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page