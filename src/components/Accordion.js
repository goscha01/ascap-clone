import React, { useState } from 'react';
import Content from "./Content";

export default function Accordion({ title, content, index, isOpen, getAccId }) {
        

    const getContionue2 = (bool) => {
        if(bool == false) {
          getAccId(index + 1)
        }
       
    };

    
  return (
    <div className="accordion"  >

        <div className="accordion-item">
            <div className="accordion-header" onClick={() => getAccId(index)} id={index}>
                <p className={isOpen? "accordion-number active" : "accordion-number "}>{index+1}</p>
                <div className={isOpen? "accordion-title active" : "accordion-title "}>{title}</div>
            </div>
            {(isOpen  && (index == 0))?<div className="accordion-content"> <Content getContionue2={getContionue2} id={index} /> </div>
            : isOpen  && <div className="accordion-content"> {content} {index == 1?<img src="/GeneralScreen.png" />:null}</div>
            }
        </div>

    </div>

  )
}
