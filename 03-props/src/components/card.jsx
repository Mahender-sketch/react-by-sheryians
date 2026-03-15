const card = (props) =>{
    return(
        <div className="card">
        <h1>sarthak ji </h1>
        <img src={props.img} alt="" />
        <h2>{props.user},  {props.age}</h2>

        <p>Lorem  ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quod?</p>
        <button>view profile</button>
        </div>)
}
export default card;