import React , {useState} from "react";



export default function Card(props) {

    const [isActive, setIsActive] = useState(false);
   
    const clickHandler = (keyID) => {
 
        props.onChange(keyID); 
      }

    // console.log(content.content.icon)
  return (
    <div className={`card ${isActive? 'active' : null}  ${props.selectedId === props.content.id? 'selected' : null}`} 
         onMouseEnter={() => setIsActive(true)} 
         onMouseLeave={() => setIsActive(false)}
         onClick={(e) => clickHandler(props.content.id, e)}>
      <div className={`card-header ${isActive? 'active' : null} ${props.selectedId === props.content.id? 'selected' : null}`}>
       <img src={props.content.icon} alt="icon" />
        <h5 className={`card-title ${isActive? 'active' : null} ${props.selectedId === props.content.id? 'selected' : null}`}>{props.content.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-content">{props.content.text}</p>
        <h6 className={`card-fee ${isActive? 'active' : null} ${props.selectedId === props.content.id? 'selected' : null}`}>${props.content.fee} APPLICATION FEE</h6>
        <p className="card-fee-text">non-refundable</p>
        <p style={isActive || props.selectedId === props.content.id?{fontWeight: 700}:{fontWeight: 200}}>Requirements</p>
        <ul>
          {props.content.req.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
