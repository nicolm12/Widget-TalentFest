import React from 'react';
import "./form.css"
import Figuro from "../assets/Figuro Transparente.png"
//import { useState } from "react";

const FormRegister = (props) => {

    /*const [data, setData] = useState({
        name: '',
        lasName: '',
        gender: '',
        country: '',
        email: '',
        password: '',
        
    })*/
    const {
        name,
        setName,
        lasName,
        setlasName,
        gender,
        setGender,
        country,
        setCountry,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        
    } = props

    const nameChange = (e) => setName(e.target.value);
    const lasNameChange = (e) => setlasName(e.target.value)
    const genderChange = (e) =>setGender(e.target.value);
    const countryChange = (e) => setCountry(e.target.value)
    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value)

    const enviarDatos = (event) => {
        console.log(event)
        event.preventDefault();

    }

    return (
        <>
            <img src={Figuro} alt="logo" className="logo" />
            <div className='container'>
                <div className='grupoContainer'>
                    <h3>{props.textitle}</h3>
                    <p>{props.texparrafo}</p>
                    <form className='formLogin' onSubmit={enviarDatos} >
                        <label>{props.texname}</label>
                        <input type="text" name="name" className='input' required value={name} onChange={nameChange} />
                        <label>{props.texLastName}</label>
                        <input type="text" name="lasName" className='input' required value={lasName} onChange={lasNameChange} />
                        <label>{props.texgender}</label>
                        <input type="text" name="gender" className='input' value={gender} placeholder="Hombre/Mujer" required value={gender} onChange={genderChange} />
                        <label>{props.texcountry}</label>
                        <input type="text" name="country" className='input' value={country} onChange={countryChange} />
                        <label>{props.texemail}</label>
                        <input type="email" name="email" id="email" placeholder="email" className='input' required value={email} onChange={emailChange} />
                        <label>{props.texpassword}</label>
                        <input type="password" name="password" id="password" placeholder="password" className='input' value={password} onChange={passwordChange} />
                        <label>{props.texterminos}</label>
                        <button className='btn' onClick={handleLogin}>{props.btn}</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export { FormRegister };