import Card from "./components/card"
const app = () =>{
  return(
    <>
    <div className="Parent">
      <Card user="aman" age={18} img="https://i.pinimg.com/1200x/8c/b4/d0/8cb4d03dd7ae4bb91d0f3e85a5546840.jpg"/>
      <Card user="devansh" img="white"/>
    </div>
    </>
  )
}
export default app