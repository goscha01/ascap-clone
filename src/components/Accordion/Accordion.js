import Main from "../../Pages/Main";
import "./Accordion.css";

export default function Accordion({ title, content, index, isOpen, getAccId }) {
  const getContionue = (state) => {
    if (state === false) {
      getAccId(index + 1);
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => getAccId(index)}
          id={index}
        >
          <p
            className={isOpen ? "accordion-number active" : "accordion-number "}
          >
            {index + 1}
          </p>
          <div
            className={isOpen ? "accordion-title active" : "accordion-title "}
          >
            {title}
          </div>
        </div>
        {isOpen && index === 0 ? (
          <div className="accordion-content">
            {" "}
            <Main getContionue={getContionue} id={index} />{" "}
          </div>
        ) : (
          isOpen && (
            <div className="accordion-content">
              {" "}
              {content}{" "}
              {index === 1 ? (
                <img src="/GeneralScreen.png" alt="general screen" />
              ) : null}
            </div>
          )
        )}
      </div>
    </div>
  );
}
