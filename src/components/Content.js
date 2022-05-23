import React, { useState }from 'react'
import Form from '../Form';
import Card from "./Card";


export default function Content() {

    const cardContnent = [
        {
        id: 0,
        icon: "/iwp.png",
        title: "Writer & Publisher",
        text: "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.",
        fee: 100,
        req: ["Legal Name", "Mailing Address", "Valid Email Address", "SSN/ITIN", "Must be 18 or older to apply online*" ]
        },
        {
        id: 1,
        icon: "/iw.png",
        title: "Writer",
        text: "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.",
        fee: 50,
        req: ["Legal Name", "Mailing Address", "Valid Email Address", "SSN/ITIN", "Must be 18 or older to apply online*" ]
            },
            {
        id: 2,
        icon: "/ip.png",
        title: "Publisher",
        text: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
        fee: 50,
        req: ["Legal Name", "Mailing Address", "Valid Email Address", "SSN/ITIN", "Must be 18 or older to apply online*" ]
            }
      ]
    
      const [selectedId, setSelectedId] = useState(null);

      const onChange = (id) => {
          console.log(selectedId)
          console.log(id)
        setSelectedId(id); 
      };
      
  return (
      <div>
          <h6 style={{marginLeft:"1rem"}}>Select your membership type below:</h6>
            <div className="content-membership">
                {cardContnent.map((content) => {
                    return (
                  
                        <Card content={content} onChange={onChange} selectedId={selectedId} key={content.id}/>
                
                    )
                    
                })}
                    

            </div>
           
            <Form  selected={selectedId}/>
      </div>

     

  )
}
