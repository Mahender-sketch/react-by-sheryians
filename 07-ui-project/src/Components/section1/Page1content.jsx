import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './rightcontent'
const Page1content = (props) => {
  return (
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg pt-6 pb-10 flex  h-[90vh]
    item-center gap-[20px]'>
      <Leftcontent/>
      <Rightcontent user3={props.user2}  />
    </div>
  )
}

export default Page1content
