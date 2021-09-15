import React, { useState,
    useEffect
} from "react";
import FormLogin from './FormLogin';


function LoginApp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


return (
    <div>
        <FormLogin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
        />
    </div>

)
}