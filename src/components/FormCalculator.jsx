import React from 'react'
import "./components.css"


const Form = (props) => {
    return ( 
    <div className="container">
    <div className="form">
        <h2>{props.title}</h2>
        <form action="#">
            <label htmlFor="">{props.firstInput}</label>
            <input type="range" min="-10" max="10" step="0.01"/>
            <label htmlFor="">{props.secondInput}</label>
            <select name="cars" id="cars" form="carform">
                <option value="firstOption">{props.firstOption}</option>
                <option value="secondOption">{props.secondOption}</option>
            </select>
            <label htmlFor="">{props.thirdInput}</label>
            <input type="range" min="-10" max="10" step="0.01"/>
        </form> 
    </div>

    <div className="results">
        <div className="result">
          <p>{props.firstParagraph}</p>
          <h2>{props.valueOne}</h2>
          <img src="" alt="" />
          <p>{props.secondParagraph}</p>
        </div>
        <div  className="result">
          <p>{props.thirdParagraph}</p>
          <h2>{props.valuetwo}</h2>
          <p>{props.fourParagraph}</p>
        </div>
        <div  className="result">
          <h2>{props.valueThree}</h2>
          <p>{props.fiveParagraph}</p>
        </div>
        <div  className="result">
          <p>{props.sixParagraph}</p>
          <h2>{props.valueFour}</h2>
        </div>
       
    </div>
    </div>
     );
};
 
export default Form;
