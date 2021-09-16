import React, { useState, useEffect } from "react";
import FormLogin from "./Formlogin";


function LoginApp() {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
const [datos, setDatos] = useState({
email: '',
password: ''
});
return (
    <div>
        <FormLogin
        titleLogin={'Ingresa a tu cuenta'}
        datos={datos}
        setDatos={setDatos}
        />
    </div>
)
}
export default LoginApp;

