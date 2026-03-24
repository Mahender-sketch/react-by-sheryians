import React from 'react'
import styles from './Hi.module.css'
import Herotext from './herotext';
import Arrow from './Arrow';
const leftcontent = () => {
  return (
    <div className='h-full w-1/4  flex flex-col justify-between '>
      <Herotext/>
      <Arrow/>    
    
    </div>
  )
}
 
export default leftcontent