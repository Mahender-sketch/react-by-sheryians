import React from 'react'
import Navbar from './navbar'
import Page1content from './Page1content'
const section1 = (props) => {
  return (
    <div >
        <Navbar/>
        <Page1content user2={props.user1}/>
    </div>
  )
}

export default section1
