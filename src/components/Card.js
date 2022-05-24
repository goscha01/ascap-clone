import React , {useState, useEffect} from "react";



export default function Card(props) {

    const [isActive, setIsActive] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false)
     

    useEffect(() => {
        setIsActive(props.disable)
        setIsDisabled(props.disable)
 
    },[props.disable])
   
    const clickHandler = (keyID) => {
        console.log(keyID)
        props.onChange(keyID); 
        setIsDisabled(false)
      }

    console.log("props.disable", props.disable)
    console.log("isDisabled", isDisabled)
    console.log("isActive", isActive)
  return (
    <div  className={`card ${isActive? 'active' : null}  ${!isDisabled && (props.selectedId === props.content.id)? 'selected' : null}`} 
         onMouseEnter={() => setIsActive(true)} 
         onMouseLeave={() => setIsActive(false)}
         onClick={(e) => clickHandler(props.content.id, e)}>
      <div className={`card-header ${isActive? 'active' : null} ${!isDisabled &&  props.selectedId === props.content.id? 'selected' : null}`}>
       <img src={props.content.icon} alt="icon" />
        <h5 className={`card-title ${isActive? 'active' : null} ${!isDisabled && props.selectedId === props.content.id? 'selected' : null}`}>{props.content.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-content">{props.content.text}</p>
        <h6 className={`card-fee ${isActive? 'active' : null} ${!isDisabled && props.selectedId === props.content.id? 'selected' : null}`}>${props.content.fee} APPLICATION FEE</h6>
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
