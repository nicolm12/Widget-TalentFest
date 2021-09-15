import React from 'react';
import Form from './FormCalculator'
import { useState} from 'react'; 
import {valorTol, valorSem,valorMin} from './calculos'


const Education  = () => {
    const initialData = {
        rangeOne: 12,
        rangeTwo: 50000,
    }
    const [datos, setDatos] = useState(initialData)  
    const [optionSearchNote, setOptionSearchNote] = useState(""); 
  
    let total = valorTol(datos.rangeOne, optionSearchNote, datos.rangeTwo)

    let valorSemestre = valorSem(total);

    let valorMinimo= valorMin(datos.rangeOne, optionSearchNote,datos.rangeTwo)

    return ( 
       <Form
       title = {"Calcula el ahorro para la eduación de tus hijos" }
       min = {50000}
       max = {50000000}
       step = {50000}
       firstInput = {"Edad de tu hij@"}
       secondInput = {"¿Cada cuanto quieres ahorrar?"}
       firstOption = {"Todos los meses"}
       secondOption = {"En total cada año"}
       thirdInput = {"¿Cuanto quieres ahorrar?"}
       minAge = {0}
       maxAge = {18}
       stepAge = {1}

       firstParagraph = {"Cuando tu hijo se gradúe podrás tener ahorrado:"}
       valueOne = {total}
       secondParagraph = {"Para su eduacación superior"}
       thirdParagraph = {"Con este ahorro podrías pagar semestres de hasta"}
       valuetwo = {valorSemestre}
       fourParagraph = {"Por mes para ti"}
       fiveParagraph = {"tu ahorro total podría varias desde"}
       valueThree = {valorMinimo}
       sixParagraph = {"En portafolio conservador"}
       sevenParagraph = {"Hasta"}
       valueFour = {70000}
       eightParagraph = {"En un portafolio arriesgado"}

       datos = {datos}
       setDatos = {setDatos}
       setOptionSearchNote = {setOptionSearchNote}
       >
       </Form>
     );
}
 
export default Education;