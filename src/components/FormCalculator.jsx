import React from 'react'
import stylesComponents from '../CSS/components.module.css'
import information from "../assets/information.png"
import { Link } from 'react-router-dom';
import { moneda } from './calculos';


const Form = (props) => {

  const handleInputChange = (e) => {
    props.setDatos({
      ...props.datos,
      [e.target.name]: e.target.value
    });
  };

  const selectChange = (e) => props.setOptionSearchNote(e.target.value)


  const handleSubmit = e => {
    e.preventDefault();
  };


  return (
    <div className={stylesComponents.container}>
      <div className={stylesComponents.wrapper}>
        <h2>{props.title}</h2>
        <form action="#" className={stylesComponents.form} onSubmit={handleSubmit}>
          <div className={stylesComponents.divInfo}>
            <label htmlFor="">{props.firstInput}</label>
            <img src={information} alt="information" className={stylesComponents.information} />
          </div>
          <h3>{props.datos.rangeOne}</h3>
          <input className={stylesComponents.range} type="range" name="rangeOne" min={props.minAge} max={props.maxAge} step={props.stepAge} onChange={handleInputChange} />
          <div className={stylesComponents.divInfo}>
            <label htmlFor="">{props.secondInput}</label>
            <img src={information} alt="information" className={stylesComponents.information} />
          </div>
          <select id="optionSearch" name="options" value={props.optionSearchNote} onChange={selectChange} className={stylesComponents.select}>
            <option value="defaultOption">{props.defaultOption}</option>
            <option value="firstOption">{props.firstOption}</option>
            <option value="secondOption">{props.secondOption}</option>
          </select>
          <div className={stylesComponents.divInfo}>
            <label htmlFor="">{props.thirdInput}</label>
            <img src={information} alt="information" className={stylesComponents.information} />
          </div>
          <h3>{props.datos.rangeTwo}</h3>
          <input className={stylesComponents.range} type="range" name="rangeTwo" min={props.min} max={props.max} step={props.step} onChange={handleInputChange} />
        </form>
      </div>
      <div className={stylesComponents.results}>
        <div className={stylesComponents.result}>
          <p className={stylesComponents.parrafo1}>{props.firstParagraph}</p>
          <h2>{moneda(props.valueOne)}</h2>
          <img src="" alt="" />
          <p className={stylesComponents.parrafo2} >{props.secondParagraph}</p>
        </div>
        <div className={stylesComponents.result}>
          <p className={stylesComponents.parrafo1}>{props.thirdParagraph}</p>
          <h2>{moneda(props.valuetwo)}</h2>
          <p className={stylesComponents.parrafo2}>{props.fourParagraph}</p>
        </div>
        <div className={stylesComponents.result}>
          <p className={stylesComponents.parrafo1}>{props.fiveParagraph}</p>
          <h2>{moneda(props.valueThree)}</h2>
          <p>{props.sixParagraph}</p>
        </div>
        <div className={stylesComponents.result4}>
          <p className={stylesComponents.parrafo1}>{props.sevenParagraph}</p>
          <h2>{moneda(props.valueFour)}</h2>
          <p>{props.eightParagraph}</p>
        </div>
        <div><Link id="RouterNavLink" to="/formulario">Contactanos </Link></div>
        <Link id="RouterNavLink" to="/formulario">Aprende mas</Link>
      </div>
    </div>
  );
};

export default Form;