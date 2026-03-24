import React from 'react'

import Rccontent from './Rccontent';

const Rightcard = (props) => {
  return (
    <div className='h-full border-2 border-solid border-black w-80 shrink-0 overflow-hidden relative rounded-3xl'>
        <img className="h-full w-full object-cover " src={props.img} alt="" />
       <Rccontent idx={props.idx} tag={props.tag} color={props.color} />
       
    </div>
  )
}

export default Rightcard