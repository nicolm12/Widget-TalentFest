import React from 'react';
import "./formlogin.css";
import { authListener, createUser } from './firebaseAuth';
import { useEffect, useState } from 'react';
import { FormRegister } from './FormRegister'

const Login = () => {

    const [name, setName] = useState("");
    const [lasName, setlasName] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const clearInputs = () => {
        setName('');
        setlasName('');
        setGender('');
        setCountry('');
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleSignup2 = () => {
        clearErrors();
        console.log('funciono')
        
        createUser(email, password)
        .then (res => console.log(res))
        
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

    const listenerAuth = () => {
        authListener((name) => {
            if (name) {
                clearInputs();
                setName(name);
            } else {
                setName("");
            }
        })
    }

    useEffect(() => {
        listenerAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {
                    <FormRegister

                        textitle={'Crea tu cuenta'}
                        texparrafo={'Al crear tu cuenta asegurate de que tu contraseña tenga al menos una mayuscula, numero  o caracter especial'}
                        texname={'Tu Nombre'}
                        texLastName={'Tu Apellido'}
                        texgender={'Soy'}
                        texcountry={'Vivo en '}
                        texemail={'Email'}
                        texpassword={'Contraseña'}
                        texterminos={'Acepto los Terminos y Condiciones'}
                        btn={'registrarme'}
                        name={name}
                        setName={setName}
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
                        // handleLogin={handleLogin}
                        handleSignup={handleSignup2}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                }
        </div>
    )
}


export default Login;