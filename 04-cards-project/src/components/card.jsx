import {Bookmark} from 'lucide-react'
const Card=(props)=>{
  // console.log(props.company);
  return (
    
    <div className="card">
      <div>
        <div className="nav">
        <img src={props.brandLogo} alt="logo" />
        <button>Save <Bookmark size={12}/></button>
      </div>
      <div className="center">
      <h3>{props.company}   <span>{props.date}</span></h3>
        <h2>{props.post}</h2>
        <div className='tag'>
        <h4>{props.tag1}</h4><h4>{props.tag2}</h4></div>
        </div>  </div>
        <div className="footer">
            <div className="price">
                <h4>{props.pay}</h4>
                <p>{props.location}</p>
            </div>
            <button>Apply now</button>
        </div>
    </div>
  )
}
export default Card;