import React from 'react'
import { ArrowRight } from 'lucide-react';

const Rccontent = (props) => {
  return (
            <div className='h-full absolute top-0 left-0 w-full flex flex-col p-8 justify-between' >
            <p className='bg-white rounded-full flex justify-center items-center w-10 h-10 text-[1.5rem] font-bold'>{props.idx+1}</p>    
            <div>
                <p className=' shadow-xl text-xl leading-normal font-serif text-wrap text-white mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorum?</p>
                <div className="flex items-center gap-2">
                    <button style={{backgroundColor:props.color}} className=' font-semibold px-8 py-2 rounded-full text-white'>{props.tag}</button>
                    <button  style={{backgroundColor:props.color}} className=' px-4 py-2 rounded-full text-white '><ArrowRight/></button>
                </div>
            </div>

        </div>
  )
}

export default Rccontent