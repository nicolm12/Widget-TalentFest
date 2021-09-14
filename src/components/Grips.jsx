import React from 'react';
import Form from './FormCalculator'

const Grips = () => {
  return (
    <Form
      title={"Calcula tu Brecha Pensiónal por Incapacidad"}
      firstInput={"Tu ingreso actual"}
      secondInput={"Tu tipo de salario"}
      firstOption={"Integral"}
      secondOption={"No integral"}
      thirdInput={"Años que has cotizado a pensión"}

       firstParagraph = {"Si llegarás a incapacitarte te faltarian"}
       valueOne = {1000000}
       secondParagraph = {"Todos los meses para mantener tu estandar de vida actual"}
       thirdParagraph = {"Tu valor ideal de aseguramiento sera"}
       valuetwo = {9000000}
       fourParagraph = {"Por enfermedades"}
       valueThree = {13000000000}
       sixParagraph = {"Por invalidez"}
       sevenParagraph = {"Este riesgo lo puedes cubrir por solo"}
       valueFour = {70000}
       >
       </Form>
     );
}

export default Grips;