import React from 'react';
import styles from '../CSS/form.module.css'
import Figuro from "../assets/figuroLogo.png"



const FormRegister = (props) => {
    return (
        <>
            <img src={Figuro} alt="logo" className={styles.logo} />
            <div className={styles.container}>
                <div className={styles.grupoContainer}>
                    <h3>{props.title}</h3>
                    <p>{props.parrafo}</p>
                    <form className={styles.formLogin}>
                        <label>{props.name}</label>
                        <input type="text" name="Text Name" className={styles.input} />
                        <label>{props.LastName}</label>
                        <input type="text" name="Text LasName" className={styles.input}  />
                        <label>{props.gender}</label>
                        <select name="gender" id="gender" form="gender" className={styles.input} >
                            <option value="oneOption">{props.oneOption}</option>
                            <option value="twoOption">{props.twoOption}</option>
                        </select>
                        <label>{props.country}</label>
                        <input type="text" name="Text country" className={styles.input}  />
                        <label>{props.email}</label>
                        <input type="email" name="email" id="email" placeholder="email" className={styles.input}  />
                        <label>{props.password}</label>
                        <input type="Password" name="Password" id="Password" placeholder="Password" className={styles.input}  />
                        <label>{props.passwordConfirm}</label>
                        <input type="PasswordConfirm" name="PasswordConfirm" id="PasswordConfirm" placeholder="Password Confirm" className={styles.input}  />
                        <input type="checkbox" name="terminos" id="terminos"/>
					<label>{props.terminos}</label>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormRegister;
