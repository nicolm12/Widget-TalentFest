import React from 'react';
import Form from './FormCalculator'
import rates from './rates.js'
import { useState } from 'react';
import { percent, percentYear, minCoverageDisease, minCoverageAccident, secureRisk, moneda } from './calculos';
import billete from '../assets/bankruptcy.png'
// console.log(rates.pensionalGap[0].rate, "comentario chiquito")

const Grips = () => {
  const initialData = {
    rangeOne: 0,
    rangeTwo: 0
  }

  const [datosSlider, setDatosSlider] = useState(initialData)
  const [optionSearch, setOptionSearch] = useState("defaultOption");



  const ageOption = rates.pensionalGap
  const porcentaje = percentYear(datosSlider.rangeTwo, ageOption)
  const salary = datosSlider.rangeOne
  const percentResult = percent(optionSearch, salary, porcentaje)
  const pensionalGap = parseInt(percentResult);

  const factorOption = rates.factorYears
  const minCoverage = minCoverageDisease(pensionalGap);
  const minCoverAccident = minCoverageAccident(pensionalGap)
  const secureRiskMin = secureRisk(minCoverAccident, datosSlider.rangeTwo, factorOption)



  return (
    <Form
      title={"Calcula tu Brecha Pensiónal por Incapacidad"}

      firstInput={"Tu ingreso actual"}
      minAge={0}
      maxAge={100000000}
      stepAge={100000}

      secondInput={"Tu tipo de salario"}
      defaultOption={"Elige una opcion"}
      firstOption={"Integral"}
      secondOption={"Ordinario, no integral"}

      thirdInput={"Años que has cotizado a pensión"}
      min={0}
      max={50}
      step={1}

      firstParagraph={"Si llegarás a incapacitarte te faltarían"}
      valueOne={pensionalGap}
      img={billete}
      secondParagraph={"Todos los meses para mantener tu estándar de vida actual"}
      thirdParagraph={"Tu valor ideal de aseguramiento sería"}
      valuetwo={minCoverage}
      fourParagraph={"Por enfermedad."}
      valueThree={minCoverAccident}
      sixParagraph={"Por invalidez"}
      sevenParagraph={"Este riesgo lo puedes cubrir por solo"}
      valueFour={secureRiskMin}
      valueRangeOne={moneda(datosSlider.rangeOne)}
      valueRangeTwo={datosSlider.rangeTwo}
      datos={datosSlider}
      setDatos={setDatosSlider}
      setOptionSearchNote={setOptionSearch}
      urlWsp={'https://wa.link/x8054n'}
    >
    </Form>
  );
}

export default Grips;

