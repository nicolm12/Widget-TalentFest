import React from 'react' 


const Form = (props) => {

  const handleInputChange = (e) => {
    props.setDatos({
        ...props.datos,
        [e.target.name] : e.target.value
    });
  };

  const selectChange =(e) => props.setOptionSearchNote(e.target.value)


    const handleSubmit = e => {
      e.preventDefault();
    };


    return ( 
    <>
    <div>
        <h2>{props.title}</h2>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="">{props.firstInput}</label>
            <input type="range"  name="rangeOne" min={props.minAge} max={props.maxAge} step={props.stepAge}  onChange={ handleInputChange}/>
          <label htmlFor="">{props.secondInput}</label>
            <select id="optionSearch" name="options" value={props.optionSearchNote} onChange={selectChange}>
              <option value="firstOption">{props.firstOption}</option>
              <option value="secondOption">{props.secondOption}</option>
            </select>
          <label htmlFor="">{props.thirdInput}</label>
            <input type="range" min={props.min} max={props.max} step={props.step}   name="rangeTwo" onChange={ handleInputChange}/>
        </form> 
    </div>

    <div>
        <div>
          <p>{props.firstParagraph}</p>
          <h2>{props.valueOne}</h2>
          <img src="" alt="" />
          <p>{props.secondParagraph}</p>
        </div>
        <div>
          <p>{props.thirdParagraph}</p>
          <h2>{props.valuetwo}</h2>
          <p>{props.fourParagraph}</p>
        </div>
        <div>
          <p>{props.fiveParagraph}</p>
          <h2>{props.valueThree}</h2>
          <p>{props.sixParagraph}</p>
        </div>
        <div>
          <p>{props.sevenParagraph}</p>
          <h2>{props.valueFour}</h2>
          <p>{props.eightParagraph}</p>
        </div>
    </div>
    </>
     );
};
 
export default Form;
