import React, { useState }from 'react'
import Form from "./Form";
import Card from "./Card";


export default function Content(props) {

    const cardContnent = [
        {
        id: 0,
        icon: "/qandb.svg",
        title: "Writer & Publisher",
        text: "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.",
        fee: 100,
        req: ["Legal Name", "Mailing Address", "Valid Email Address", "SSN/ITIN", "Must be 18 or older to apply online*" ]
        },
        {
        id: 1,
        icon: "/quavers.svg",
        title: "Writer",
        text: "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.",
        fee: 50,
        req: ["Legal Name", "Mailing Address", "Valid Email Address", "SSN/ITIN", "Must be 18 or older to apply online*" ]
            },
            {
        id: 2,
        icon: "/briefcase.svg",
        title: "Publisher",
        text: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
        fee: 50,
        req: ["Legal Name", "Mailing Address", "Valid Email Address", "SSN/ITIN", "Must be 18 or older to apply online*" ]
            }
      ]
    
      const [selectedId, setSelectedId] = useState(null);
      const [disable, setDisable] = useState(false)
      const [isNext, setIsNext ] = useState(null)
      const [isWarning, setWarning] = useState(false)
    //   let disable = false;

      const onChange = (id) => {
        //   console.log(selectedId)
        //   console.log(id)
        setDisable(false)
        setSelectedId(id); 
      };

      const getCountinue = (isInvalid) => {
        setWarning(isInvalid)
        //   console.log('RECEIVED from FORM isInvalid', isInvalid)
     
        //   console.log('isNext', isNext)
          props.getContionue2(isInvalid)
      }

      const getCancel = (some) => {
        console.log('some', some)
        setDisable(some);
        console.log('disable', disable)
    }

      
  return (
      <div>
          <h6 style={{marginLeft:"1rem"}}>Select your membership type below:</h6>
            <div className="content-membership">
                {cardContnent.map((content) => {
                    return (
          
                        <Card content={content} onChange={onChange} disable={disable} selectedId={selectedId} key={content.id}/>
        
                    )
                    
                })}
                    

            </div>
           
            <Form getCountinue={getCountinue} getCancel={getCancel} selected={selectedId}/>
      </div>

     

  )
}
