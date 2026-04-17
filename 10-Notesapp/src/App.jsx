import React, { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {
  const [first, setFirst] = useState("")
  const [Second, setSecond] = useState("")
  const [task, setTask] = useState([])
  const Crossclicked=(idx)=>{
    const deletetask=[...task]
    deletetask.splice(idx,1)
    setTask(deletetask)
  }
  return (
    <>
    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e)=>{
          e.preventDefault()
          const copyTask=[...task]
          copyTask.push({first,Second})
          setTask(copyTask)
          setFirst("")
          setSecond("")
          // console.log(copyTask)
        }}
        action="" className=" flex lg:w-1/2 flex-col items-start px-10 py-6 gap-3 " >
        <h1 className='text-center text-3xl font-bold py-4'>Notes</h1>
        <input value={first} onChange={(e)=>{
          setFirst(e.target.value)
        }} type="text" className='h-10 rounded border-2  w-full border-black px-2 outline-none text-black' placeholder='Write Notes Heading'/>
        <textarea value={Second} onChange={(e)=>{
          setSecond(e.target.value)
        }} type="text" className='h-80  w-full text-top text-black rounded border-2 border-black px-4 outline-none py-4'placeholder='Write details'name="" id=""></textarea>
        <button className='bg-red-500 active:scale-95 w-full rounded border-2 border-red-800'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-1-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-auto overflow-auto'>
            {task.map(function(elem, idx) {
             return (
          <div
            key={idx}
            className="h-[456px] w-[350px] rounded-xl bg-cover bg-center text-black  flex flex-col overflow-hidden shadow-lg pt-20 pl-4
            bg-[url(https://imgs.search.brave.com/b9nc5BMwJ963hopkarex8iyCPZDL5oVweOdhvT2icjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n)] "
          >
            {/* Title */}
            <div className='flex justify-between '>
              <h3 className="text-xl font-bold leading-tight px-24  break-words  line-clamp-2">
              {elem.first}
              </h3>
              <button onClick={(idx)=>{
                Crossclicked(idx)
              }} className='mx-3 w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full shrink-0 cursor-pointer active:scale-95
               hover:bg-orange-200 '><X /></button>
            </div>
            {/* Content */}
            <p className="mt-4 text-gray-700 font-medium leading-tight break-words overflow-y-auto">
              {elem.Second}
            </p>
          </div>)})}
          </div>
      </div>
    </div>
    </>
  )
}

export default App