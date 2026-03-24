import React from 'react'
import Section1 from './Components/section1/section1'
import Section2 from './Components/section2/section2'
const App = () => {
  const users=[
    {
      img:"https://i.pinimg.com/736x/69/a0/1f/69a01fba84f0f6bd6847a32062d4935e.jpg",
      intro:"",
      color:"blue",
      tag:"Max"
    },
    {
      img:"https://i.pinimg.com/1200x/bd/d7/50/bdd7502d12c13474b0bdb46052ed420e.jpg",
      intro:"",
      color:"green",
      tag:"Advanced"
    },
    {
      img:"https://i.pinimg.com/1200x/30/59/5c/30595cfbce94f2e4df554fbacd3ba4dd.jpg",
      intro:"",
      color:"yellow",
      tag:"Extra"
    },
    {
      img:"https://i.pinimg.com/1200x/30/59/5c/30595cfbce94f2e4df554fbacd3ba4dd.jpg",
      intro:"",
      color:"red",
      tag:"Extra"
    },
    {
      img:"https://i.pinimg.com/1200x/30/59/5c/30595cfbce94f2e4df554fbacd3ba4dd.jpg",
      intro:"",
      color:"purple",
      tag:"Extra"
    }
  ]
  return (
    <div >
      <Section1 user1={users} />
      <Section2 />
    </div>
  )
}

export default App
