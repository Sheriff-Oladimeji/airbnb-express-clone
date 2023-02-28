
import star from "../images/Star 1.png"

export default function Card(props){
  return(
    <div className="card">
 <img src={props.img} alt=""/>
 <div className="card--stats">
  <img src={star} alt="" className="card--star"/>
  <span>{props.rating}</span>
  <span className="gray">({props.reviewCount}) • </span>
  <span className="gray">{props.location}</span>
 </div>
 <p>{props.title}</p>
 <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}