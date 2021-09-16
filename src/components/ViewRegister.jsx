import React from 'react';
import { createUser } from './firebaseAuth';
import { useState } from 'react';
import { RegistroForm } from './Registroform'


const MostrarLogin = () => {

    const [nameN, setNameN] = useState("");
    const [lasName, setlasName] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")


    const handleSignup = () => {
            createUser(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;

                    case "auth/weak-password":
                        setPasswordError(err.message)
                        break;
                    default: break;
                }
            })
    }
    return (
        <div>
            {
                    < RegistroForm
                        textitle={'Crea tu cuenta'}
                        texparrafo={'Al crear tu cuenta asegurate de que tu contraseña tenga al menos una mayuscula, numero  o caracter especial'}
                        texname={'Tu Nombre'}
                        texLastName={'Tu Apellido'}
                        texgender={'Soy'}
                        texcountry={'Vivo en '}
                        texemail={'Email'}
                        texpassword={'Contraseña'}
                        texterminos={'He leído y estoy de acuerdo con los Términos del Servicio'}
                        privacidad={'Este sitio recoge nombres, correos electronicos y otra informacion del usuario. Aceptolos terminos establecidos en la politicas de privacidad'}
                        btn={'registrarme'}
                        name={nameN}
                        setName={setNameN}
                        lasName={lasName}
                        setlasName={setlasName}
                        gender={gender}
                        setGender={setGender}
                        email={email}
                        country={country}
                        setEmail={setEmail}
                        setCountry={setCountry}
                        password={password}
                        setPassword={setPassword}
                        handleSignup={handleSignup}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                }
        </div>
    )
}
export { MostrarLogin } ;
