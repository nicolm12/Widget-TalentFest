import React from 'react';
import Form from './FormCalculator'
import { useState, useEffect } from 'react';
import { valorTol, valorSem, valorMinMonth, valorMinYear, valorMaxMes } from './calculos'
import marranito from '../assets/piggy-bank.png'


const Education = () => {
    const initialData = {
        rangeOne: 12,
        rangeTwo: 50000,
    }
    const [datos, setDatos] = useState(initialData)
    const [optionSearchNote, setOptionSearchNote] = useState("defaultOption");
    const [value, setValue] = useState(100000)


    useEffect(() => {
        const valorMinimo = valorMinMonth(datos.rangeOne, datos.rangeTwo)
        const valorMinimoAnual = valorMinYear(datos.rangeOne, datos.rangeTwo)

        if (optionSearchNote === "firstOption") {
            setValue(valorMinimo)
        } else if (optionSearchNote === "secondOption") {
            setValue(valorMinimoAnual)
        } else {
            setValue(0)
        }

    }, [datos, optionSearchNote, setValue])


    let total = valorTol(datos.rangeOne, optionSearchNote, datos.rangeTwo)
    let valorSemestre = valorSem(total);

    let valorMaxMonth = valorMaxMes(datos.rangeOne, datos.rangeTwo)






    return (
        <Form
            title={"Calcula el ahorro para la eduación de tus hijos"}
            min={50000}
            max={50000000}
            step={50000}
            firstInput={"Edad de tu hij@"}
            secondInput={"¿Cada cuanto quieres ahorrar?"}
            defaultOption={"Elige una opcion"}
            firstOption={"Todos los meses"}
            secondOption={"En total cada año"}
            thirdInput={"¿Cuanto quieres ahorrar?"}
            minAge={0}
            maxAge={18}
            stepAge={1}

            firstParagraph={"Cuando tu hijo se gradúe podrás tener ahorrado:"}
            valueOne={total}
            img={marranito}
            alt={"logo ahorro"}
            secondParagraph={"Para su eduacación superior"}
            thirdParagraph={"Con este ahorro podrías pagar semestres de hasta"}
            valuetwo={valorSemestre}
            fourParagraph={"Por mes para ti"}
            fiveParagraph={"tu ahorro total podría varias desde"}
            valueThree={value}
            sixParagraph={"En portafolio conservador"}
            sevenParagraph={"Hasta"}
            valueFour={valorMaxMonth}
            eightParagraph={"En un portafolio arriesgado"}

            datos={datos}
            setDatos={setDatos}
            setOptionSearchNote={setOptionSearchNote}
            urlWsp={'https://wa.link/2f0hes'}
        >
        </Form>
    );
}

export default Education;