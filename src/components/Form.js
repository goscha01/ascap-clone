import { useState } from "react";
import Select from "react-select";

const options = [
  {
    value: "individ",
    label: "Individual / Sole proprietor or Single-member LLC",
  },
  { value: "ccorp", label: "C Corporation" },
  { value: "scorp", label: "S Corporation" },
  { value: "llcCcorp", label: "LLC - C Corporation" },
  { value: "llcScorp", label: "LLC - S Corporation" },
  { value: "llcPartner", label: "LLC – Partnership" },
  { value: "partner", label: "Partnership" },
  { value: "trust", label: "Trust / Estate" },
  { value: "other", label: "OTHER" },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    color: "black",
  }),
  option: (styles, state) => {
    return {
      ...styles,
      borderBottom: "1px solid #85868c",
      padding: 10,
      backgroundColor: state.isFocused ? "#fafafa" : "white",
      color: state.isFocused ? "#1178ce" : "black",
      cursor: "default",
    };
  },
};

const Form = (props) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isInvalid, setIsInvalid] = useState(null);

  console.log("isInvalid", isInvalid)
  console.log("selectedValue", selectedValue)

  // console.log(selectedValue)
  const handleChange = (e) => {
  
    // console.log(isInvalid);
    // console.log(e.value);
    setSelectedValue(e.value);
    // console.log(isInvalid);
  };

  const handleSubmit = (e) => {
    if (props.selected !== null && selectedValue !== null) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
    e.preventDefault();
  };

  // console.log("props.selected ", props);
  const clickHandler = (e) => {
    // console.log(isInvalid);
    // console.log(selectedValue);
    // console.log(props.selected);

    // console.log(isInvalid);
    // console.log(props);
    // props.onChange(true);
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        *If you are under 18 years of age please
        <span>
          {" "}
          <a href="#">read more about how to join ASCAP.</a>
        </span>
      </p>

      {props.selected != null && (
        <div>
          <h3>Publisher Company Type</h3>
          <p>
            Please select the federal tax classification of your publisher
            company.
          </p>
          <label htmlFor="">Publisher Company Type</label>
          <Select
            className="select"
            options={options}
            styles={colourStyles}
            onChange={handleChange}
            placeholder={options[0].label}
          />
        </div>
      )}
      {isInvalid && props.selected === null && (
        <p style={{ color: "red" }}>Please select your membership type.</p>
      )}
        {isInvalid && selectedValue == null && (
        <p style={{ color: "red" }}>Please select your publisher company type.</p>
      )}
      <p>
        ASCAP uses TINCheck and SmartyStreets to verify certain information
        provided by you in connection with your application. Any information
        processed by TINCheck and SmartyStreets shall be subject to the privacy
        policies of
        <span>
          {" "}
          <a href="#">TINCheck</a>
        </span>{" "}
        and
        <span>
          {" "}
          <a href="#">SmartyStreets</a>
        </span>
        .
      </p>
      <div>
        <button type="reset" value="Reset" onClick={() => props.onChange3(true)}>
          Cancel
        </button>
        <button type="submit" value="Submit" onClick={() => props.onChange2(true,isInvalid)}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default Form;
