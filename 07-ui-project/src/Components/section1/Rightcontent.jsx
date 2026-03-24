import React from 'react'
import Rightcard from './Rightcard'

const rightcontent = (props) => {
  return (
    <div id="right" className='h-full w-3/4 flex gap-10  rounded-3xl overflow-auto flex-nowrap'
    >
      {props.user3.map(function(elem,idx){
        return <Rightcard idx={idx} img={elem.img} tag={elem.tag} color={elem.color} />
      })}
    </div>
  )
}

export default rightcontent