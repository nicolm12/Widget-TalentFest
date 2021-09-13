import React from 'react';
import Form from './FormCalculator'

const Education  = () => {
    return ( 
       <Form
       title = {"Calcula el ahorro para la eduación de tus hijos" }
       firstInput = {"Edad de tu hij@"}
       secondInput = {"¿Cada cuanto quieres ahorrar?"}
       firstOption = {"Integral"}
       secondOption = {"No integral"}
       thirdInput = {"¿Caunto quieres ahorrar?"}

       firstParagraph = {"Cuando tu hijo se gradúe podrás tener ahorrado:"}
       valueOne = {1000000}
       secondParagraph = {"Para su eduacación superior"}
       thirdParagraph = {"Con este ahorro podrías pagar semestres de hasta"}
       valuetwo = {9000000}
       fourParagraph = {"Por mes para ti"}
       fiveParagraph = {"tu ahorro total podría varias desde"}
       valueThree = {13000000000}
       sixParagraph = {"En portafolio conservador"}
       sevenParagraph = {"Hasta"}
       valueFour = {70000}
       eightParagraph = {"En un portafolio arriesgado"}
       
       >
       </Form>
     );
}
 
export default Education;