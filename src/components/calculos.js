// education 

const valorTol = (edad, optionTime, saving) => {
  let a = 18 - edad
  let b = saving * a
  if (optionTime === "firstOption") {
    return b * 12
  } else {
    return b
  }
};

const valorSem = (valor) => {
  return valor / 10
}


const valorMinMonth = (edad, saving) => {
  const n = 18 - edad
  const i = 0.00165159
  const exponente = n * 12
  const suma = (Math.pow((1 + i), exponente));
  const resta = suma - 1
  const result = parseInt((saving * (resta / i)) - (saving * edad * 12))
  console.log(resta, 'result')
  return result
}

const valorMinYear = (edad, saving) => {
  const n = 18 - edad
  const i = 0.002
  const suma = ((Math.pow(1 + i), n)) - 1;
  const result = parseInt((saving * (suma / i)) - (saving * edad))
  return result
}

const valorMaxMes = (edad, saving) => {
  const n = 18 - edad
  const i = 0.00565414539
  const suma = ((Math.pow((1 + i), (n * 12))) - 1)
  const division = suma / i
  const producto = saving * division
  const result = producto - (saving * edad * 12)
  return parseInt(result)

}

export { valorTol, valorSem, valorMinMonth, valorMinYear, valorMaxMes }
