import React from 'react';
import "./form.css"
import Figuro from "../assets/Figuro Transparente.png"



const FormRegister = (props) => {
    return (
        <>
            <img src={Figuro} alt="logo" className="logo" />
            <div className='container'>
                <div className='grupoContainer'>
                    <h3>{props.title}</h3>
                    <p>{props.parrafo}</p>
                    <form className='formLogin'>
                        <label>{props.name}</label>
                        <input type="text" name="Text Name" className='input' />
                        <label>{props.LastName}</label>
                        <input type="text" name="Text LasName" className='input' />
                        <label>{props.gender}</label>
                        <select name="gender" id="gender" form="gender" className='input'>
                            <option value="oneOption">{props.oneOption}</option>
                            <option value="twoOption">{props.twoOption}</option>
                            <option value="threeOption">{props.threeOption}</option>
                        </select>
                        <label>{props.country}</label>
                        <input type="text" name="Text country" className='input' />
                        <label>{props.email}</label>
                        <input type="email" name="email" id="email" placeholder="email" className='input' />
                        <label>{props.password}</label>
                        <input type="Password" name="Password" id="Password" placeholder="Password" className='input' />
                        <label>{props.passwordConfirm}</label>
                        <input type="PasswordConfirm" name="PasswordConfirm" id="PasswordConfirm" placeholder="Password Confirm" className='input' />
                        <input type="checkbox" name="terminos" id="terminos"
													/>
					<label>{props.terminos}</label>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormRegister;
