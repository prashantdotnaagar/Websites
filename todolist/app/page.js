"use client"
import React, { useState } from 'react'



function page() {
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    setmaintask([...maintask,{title,desc}])
  }
  const deleteHandler=(i)=>{

    let copytask=[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)


  }
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  let renderTask=<h2>No Task Available</h2>

  if(maintask.length>0){
    renderTask=maintask.map((t,i)=>{
      return(
        <li className="flex items-center justify-between mb-4">
        <div className="flex  items-center justify-between m-5 w-2/3">  
        <h5 className="font-semibold text-xl first-letter:capitalize">{t.title}</h5>
        <h4 className="font-semibold text-xl">{t.desc}</h4>
        
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className="bg-teal-400 text-white rounded-md font-bold px-4 py-2 hover:bg-slate-950 ease-in-out" >Delete</button>
      </li> 
      )
      
    })
  }

  return (
    <>
    <h1 className="p-5 text-center text-5xl font-bold">Prashant's Todo List</h1>
    <form className="bg-white" onSubmit={submithandler} >
      <input type="text" className="border-zinc-800 border-4 rounded-md m-5 px-6 py-2 text-2xl text-black"
      
      placeholder="Enter title here"
      value={title}
      onChange={(elem1)=>{
        settitle(elem1.target.value)
      }}
      />
      
      <input type="text" className="border-zinc-800 border-4 rounded-md m-5 px-6 py-2 text-2xl text-black"
      
      placeholder="Enter description here"
      value={desc}
      onChange={(elem2)=>[
        setdesc(elem2.target.value)
      ]}
      />

      <button className="bg-black text-white font-bold px-4 py-2 rounded-lg m-5">Add task</button>
    </form>

    <hr class="h-px my-8 border-0 bg-white"></hr>
    <div className="bg-yellow-100 p-8">

    <ul className="text-black font-bold">
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page