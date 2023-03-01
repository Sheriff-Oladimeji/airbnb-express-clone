import star from "../images/Star 1.png";
import "../styles.css";


export default function Card(props) {
  let badgeText
  if(props.openSpots === 0){
    badgeText = "sold out"
  }
  else if(props.location === "online"){
    badgeText = "online"
  }
  else{
    badgeText = ""
  }
  return (
    <div className="card">
       {badgeText && <div className="card--badge">{badgeText}</div>}

      <img src={props.img} alt="" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
