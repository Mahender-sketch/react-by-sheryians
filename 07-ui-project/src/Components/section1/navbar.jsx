import React from 'react'

const navbar = () => {
  return (
    <div  className='flex items-center justify-between py-6 px-16'>
      <h4 className='bg-black uppercase text-white px-5 py-3 rounded-full'>Target Audience</h4>
      <button className=' rounded-full bg-black text-cyan-400 px-4 py-2 text-sm
               hover:bg-cyan-400 hover:text-black 
               hover:scale-110 
               transition-all duration-300'>digital banking platform</button>
    </div>
  )
}

export default navbar
