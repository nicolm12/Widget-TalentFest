import React from 'react';
import "./form.css"
import Figuro from "../assets/Figuro Transparente.png"
import { useState } from "react";



const FormRegister = (props) => {

    const [data, setData] = useState({
        name: '',
        lasName: '',
        gender: '',
        country: '',
        email: '',
        password: '',
        passwordConfirm: '',
        terminos: '',
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        
    }

    const onChangeTerminos = (event) =>{
      console.log(event.target.checked) 
    }

    return (
        <>
            <img src={Figuro} alt="logo" className="logo" />
            <div className='container'>
                <div className='grupoContainer'>
                    <h3>{props.title}</h3>
                    <p>{props.parrafo}</p>
                    <form className='formLogin' onSubmit={enviarDatos} >
                        <label>{props.name}</label>
                        <input type="text" name="name" className='input' onChange={handleInputChange} />
                        <label>{props.LastName}</label>
                        <input type="text" name="lasName" className='input' onChange={handleInputChange} />
                        <label>{props.gender}</label>
                        <input type="text" name="gender" className='input' placeholder="Hombre/Mujer" onChange={handleInputChange} />
                        <label>{props.country}</label>
                        <input type="text" name="country" className='input' onChange={handleInputChange} />
                        <label>{props.email}</label>
                        <input type="email" name="email" id="email" placeholder="email" className='input' onChange={handleInputChange} />
                        <label>{props.password}</label>
                        <input type="Password" name="Password" id="Password" placeholder="Password" className='input' onChange={handleInputChange} />
                        <input type="checkbox" name="terminos" id="terminos" onChange={onChangeTerminos}/> <label>{props.terminos}</label>
                        <button className='btn'>{props.btn}</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormRegister;