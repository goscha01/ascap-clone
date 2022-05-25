import React, { useState } from "react";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";
import "./Main.css";

export default function Content(props) {
  const cardContnent = [
    {
      id: 0,
      icon: "/qandb.svg",
      title: "Writer & Publisher",
      text: "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.",
      fee: 100,
      req: [
        "Legal Name",
        "Mailing Address",
        "Valid Email Address",
        "SSN/ITIN",
        "Must be 18 or older to apply online*",
      ],
    },
    {
      id: 1,
      icon: "/quavers.svg",
      title: "Writer",
      text: "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.",
      fee: 50,
      req: [
        "Legal Name",
        "Mailing Address",
        "Valid Email Address",
        "SSN/ITIN",
        "Must be 18 or older to apply online*",
      ],
    },
    {
      id: 2,
      icon: "/briefcase.svg",
      title: "Publisher",
      text: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
      fee: 50,
      req: [
        "Legal Name",
        "Mailing Address",
        "Valid Email Address",
        "SSN/ITIN",
        "Must be 18 or older to apply online*",
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [disable, setDisable] = useState(false);
  const [isWarning, setWarning] = useState(false);

  const onChange = (id) => {
    setDisable(false);
    setSelectedId(id);
  };

  const getCountinue = (isInvalid) => {
    setWarning(isInvalid);
    props.getContionue(isInvalid);
  };

  const getCancel = (state) => {
    setDisable(state);
  };

  return (
    <div>
      <h6 style={{ marginLeft: "1rem" }}>Select your membership type below:</h6>
      <div className="content-membership">
        {cardContnent.map((content) => {
          return (
            <Card
              content={content}
              onChange={onChange}
              warning={isWarning}
              disable={disable}
              selectedId={selectedId}
              key={content.id}
            />
          );
        })}
      </div>

      <Form
        getCountinue={getCountinue}
        getCancel={getCancel}
        selected={selectedId}
      />
    </div>
  );
}
