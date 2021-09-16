// education 



const valorTol = (edad, optionTime, saving) => {
  let a = 18 - edad
  let b = saving * a
  if (optionTime === "firstOption") {
    let result = b*12
    return result
  } else {
    let result =b
    return result
  }
 
}; 

const valorSem = (value) => {
  console.log(value,"este es value")
  const result =value/10
  return result
}



const valorMinMonth = (edad, saving) => {
  const n = 18 - edad
  const i = 0.00165159

  const suma = 1 +i
  const exponente = n*12
  const sumaExponente= Math.pow(suma,exponente)
  const resta= sumaExponente-1;
  const division=resta/i
  const multiplicacion= saving*division
  const multiplicacion2=saving*exponente
  const resta2=multiplicacion-multiplicacion2
  const result=parseInt(resta2)
console.log(result,"este es result")
  return result
}

const valorMinYear = (edad, saving) => {
  const n = 18 - edad
  const i = 0.02
  const suma = 1 +i
  const sumaExponente= Math.pow(suma,n)
  const resta= sumaExponente-1;

  const division=resta/i
  const multiplicacion= saving*division
  const multiplicacion2=saving*n
  const resta2=multiplicacion-multiplicacion2
  const result= resta2
  
  return result
}

const valorMaxMes = (edad, saving) => {
  const n = (18 - edad) * 12
  const i = 0.00565414539
  const suma = ((Math.pow((1 + i), (n))) - 1)
  const division = suma / i
  const producto = saving * division
  const result = producto - (saving * n)
  parseInt(result)
  const value = parseInt(result)
  const formatterPeso = value
  return formatterPeso
}
const valorMaxAño = (edad, saving) => {
  const n = 18 - edad
  const i = 0.007
  const suma = ((Math.pow(1 + i), n)) - 1;
  const result = parseInt((saving * (suma / i)) - (saving * edad))
  return result
}

function moneda(value) {
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  const pesos = formatterPeso.format(value)
  console.log(pesos,"pesos")
  return pesos
}


// → $ 12.500

export { valorTol, valorSem, valorMinMonth, valorMinYear, valorMaxMes,moneda }
