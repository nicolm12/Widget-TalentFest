import React from 'react';
import "./formlogin.css"

const FormLogin = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword
    } = props;

    return (
        <>
            <div className='containerLogin'>
                <div className='groupContainer'>
                    <h3 className='loginTitle'>{props.titleLogin}</h3>
                    <form className='formLogin'>
                        <input type="email" name="email" id="email" placeholder="Nombre de usuario o dirección de correo electrónico " className='inputLogin'
                         value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        <input type="Password" name="Password" id="Password" placeholder="Contraseña" className='inputLogin'
                         value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        <button className='buttonLogin'>Ingresar</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormLogin;
