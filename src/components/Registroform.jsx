import React from 'react';
import styles from '../CSS/form.module.css'
import Figuro from "../assets/Figuro Transparente.png"

const RegistroForm = (props) => {
console.log(props)
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
        handleSignup
        //handleLogin,

    } = props

    const nameChange = (e) => setName(e.target.value);
    const lasNameChange = (e) => setlasName(e.target.value);
    const genderChange = (e) => setGender(e.target.value);
    const countryChange = (e) => setCountry(e.target.value);
    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value)

 const enviarDatos = (event) => {

event.preventDefault();
}

    return (
        <>
            <img src={Figuro} alt="logo" className={styles.logo} />
            <div className={styles.grupoContainer}>
                <div >
                    <h2>{props.textitle}</h2>
                    <p>{props.texparrafo}</p>
                    <form className={styles.formLogin} onsubmit={enviarDatos} >
                        <label className={styles.tex}>{props.texname}</label>
                        <input type="tex" name="name" className={styles.input} value={name} placeholder="name" onChange={nameChange} />
                        <label>{props.texLastName}</label>
                        <input type="text" name="lasName" className={styles.input} placeholder="Apellido" required value={lasName} onChange={lasNameChange} />
                        <label>{props.texgender}</label>
                        <input type="text" name="gender" className={styles.input} placeholder="Hombre/Mujer" required value={gender} onChange={genderChange} />
                        <label>{props.texcountry}</label>
                        <input type="text" name="country" className={styles.input} placeholder="Pais" value={country} onChange={countryChange} />
                        <label>{props.texemail}</label>
                        <input type="email" name="email" id="email" placeholder="email" className={styles.input} required value={email} onChange={emailChange} />
                        <label>{props.texpassword}</label>
                        <input type="password" name="password" id="password" placeholder="password" className={styles.input} value={password} onChange={passwordChange} />
                        <label> <input type="checkbox" /> {props.texterminos}</label>
                        <label className={styles.texPstyle}> <input type="checkbox" /> {props.privacidad}</label>
                        <button className={styles.btn} onClick={handleSignup}>{props.btn}</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export { RegistroForm };