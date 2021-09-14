import React from 'react'
import "./components.css"
import information from "../assets/information.png"


const Form = (props) => {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>{props.title}</h2>
        <form action="#" className="form">
          <div className="divInfo">
            <label htmlFor="">{props.firstInput}</label>
            <img src={information} alt="information" className="information" />
          </div>
          <h3>898989</h3>
          <input type="range" min="-10" max="10" step="0.01" />
          <div className="divInfo">
            <label htmlFor="">{props.secondInput}</label>
            <img src={information} alt="information" className="information" />
          </div>
          <select name="cars" id="cars" form="carform">
            <option value="firstOption">{props.firstOption}</option>
            <option value="secondOption">{props.secondOption}</option>
          </select>
          <div className="divInfo">
            <label htmlFor="">{props.thirdInput}</label>
            <img src={information} alt="information" className="information" />
          </div>
          <h3>15</h3>
          <input type="range" min="-10" max="10" step="0.01" />
        </form>
      </div>

      <div className="results">
        <div className="result">
          <p>{props.firstParagraph}</p>
          <h2>{props.valueOne}</h2>
          <img src="" alt="" />
          <p>{props.secondParagraph}</p>
        </div>
        <div className="result">
          <p>{props.thirdParagraph}</p>
          <h2>{props.valuetwo}</h2>
          <p>{props.fourParagraph}</p>
        </div>
        <div className="result">
          <h2>{props.valueThree}</h2>
          <p>{props.fiveParagraph}</p>
        </div>
        <div className="result">
          <p>{props.sixParagraph}</p>
          <h2>{props.valueFour}</h2>
        </div>

      </div>
    </div>
  );
};

export default Form;