import React from 'react'
import stylesComponents from '../CSS/components.module.css'
import information from "../assets/information.png"
import { Link } from 'react-router-dom';
import { moneda } from './calculos';
import figuro from '../assets/figuroLogo.png'


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
      <div className={`${stylesComponents.wrapper} ${stylesComponents.result}`}>
        <h2>{props.title}</h2>
        <form action="#" className={`${stylesComponents.form} ${stylesComponents.parrafo1}`} onSubmit={handleSubmit}>
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
          <div className={stylesComponents.imgWrapper}>
            <h2>{moneda(props.valueOne)}</h2>
            <img src={props.img} alt={props.alt} className={stylesComponents.imgMoney} />
          </div>
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
        <div className={stylesComponents.result}>
          <p className={stylesComponents.parrafo1}>{props.sevenParagraph}</p>
          <h2 className={stylesComponents.colorTitle}>{moneda(props.valueFour)}</h2>
          <p>{props.eightParagraph}</p>
        </div>
        <div className={stylesComponents.divButtons}>
          <button id='whatsapp' className={`${stylesComponents.btnGeneral} ${stylesComponents.color}`} onClick={props.onClick}>
            <a target="_blank" className={stylesComponents.white} href={props.urlWsp}>Quiero hablar con un asesor</a>
          </button>
          <button id='masInfo' className={stylesComponents.btnGeneral} onClick={props.onClick}>
            <Link to={props.urlInfo}>Mas informacion</Link>
          </button>
        </div>
      </div>
      <div className={stylesComponents.imgGrid}>
        <img src={figuro} alt="" />
      </div>
    </div >
  );
};

export default Form;