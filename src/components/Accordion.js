import React, { useState } from 'react';
import Content from "./Content";

export default function Accordion({ title, content, index }) {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion"  >

        <div className="accordion-item">
            <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                <p className={isActive? "accordion-number active" : "accordion-number "}>{index+1}</p>
                <div className={isActive? "accordion-title active" : "accordion-title "}>{title}</div>
            </div>
            {isActive && ((index == 0) ?<div className="accordion-content"> <Content /> </div>:
            <div className="accordion-content"> {content} </div>)}
        </div>

    </div>

  )
}
