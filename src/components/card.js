import img1 from "../images/image 12.png"
import star from "../images/star 1.png"
export default function Card(){
  return(
    <div className="card">
 <img src={img1} alt=""/>
 <div className="card--stats">
  <img src={star} alt=""/>
  <span></span>
  <span></span>
  <span></span>
 </div>
    </div>
  )
}