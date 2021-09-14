import React from 'react';
import FormRegister from './FormRegister';

const View = () => {
    return (
        <FormRegister className="formRe"
            title={'Crea tu cuenta'}
            parrafo={'Al crear tu cuenta asegurate de que tu contraseña tenga al menos una mayuscula, numero  o caracter especial'}
            name={'Tu Nombre'}
            LastName={'Tu Apellido'}
            gender={'Soy'}
            oneOption={'Femenino'}
            twoOption={'Masculino'}
            threeOption={'Otro'}
            country={'Vivo en '}
            email={'Email'}
            password={'Contraseña'}
            passwordConfirm={'Confirma tu contraseña'}
            terminos={'Acepto los Terminos y Condiciones'}

        >
        </FormRegister>
    );
}

export default View;