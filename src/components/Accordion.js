import React, { useState } from 'react';
import Content from "./Content";

export default function Accordion({ title, content, index, isOpen, getAccId }) {


        
    const [isNext, setIsNext] = useState(false);

    // console.log(index)
    // console.log(isNext)
    // console.log("isOpen", isOpen, index)

    const onChange4 = (bool) => {
        console.log(isNext)
        console.log(bool)
        setIsNext(bool); 
    };

    
    
  return (
    <div className="accordion"  >

        <div className="accordion-item">
            <div className="accordion-header" onClick={(e) => getAccId(index,e)} id={index}>
                <p className={isOpen? "accordion-number active" : "accordion-number "}>{index+1}</p>
                <div className={isOpen? "accordion-title active" : "accordion-title "}>{title}</div>
            </div>
            {(isOpen  && (index == 0))?<div className="accordion-content"> <Content onChange4={onChange4} id={index} /> </div>
            : isOpen  && <div className="accordion-content"> {content} </div>
            }
        </div>

    </div>

  )
}
