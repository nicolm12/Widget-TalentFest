import React from 'react';
import Form from './FormCalculator'

const Health  = () => {
    return ( 
       <Form
       title = {"Calcula el valor de un plan de salud" }
       firstInput = {"Tu edad"}
       secondInput = {"Tu tipo de salario"}
       firstOption = {"Integral"}
       secondOption = {"No integral"}
       thirdInput = {"Años que has cotizado a pensión"}

       firstParagraph = {"Un seguro de salud podría constarte"}
       valueOne = {1000000}
       secondParagraph = {"TSolo a ti"}
       thirdParagraph = {"Si prefirieras un Plan de Medicina prepagada, este podría constarte"}
       valuetwo = {9000000}
       fourParagraph = {"Por mes para ti"}
       fiveParagraph = {"Tambien podrias pensar en un plan complementario de salud por:"}
       valueThree = {13000000000}
       sixParagraph = {"Por mes para ti"}
       sevenParagraph = {"O una asistencia Domiciliaria por valor de"}
       valueFour = {70000}
       eightParagraph = {"Haz clic en quiero hablar con un asesor para cotizar todo tu grupo familiar"}
       >
       </Form>
     );
}
 
export default Health;