import img1 from "../images/image 12.png"
import star from "../images/Star 1.png"

export default function Card(){
  return(
    <div className="card">
 <img src={img1} alt=""/>
 <div className="card--stats">
  <img src={star} alt=""/>
  <span>5.0</span>
  <span>(6) • </span>
  <span>USA</span>
 </div>
 <p>Life lessons with Kattie Zaferes</p>
 <p><span>From $136</span> / person</p>
    </div>
  )
}