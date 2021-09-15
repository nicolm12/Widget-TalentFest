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

  const suma = 1 +i
  const exponente = n*12
  const sumaExponente= Math.pow(suma,exponente)
  const resta= sumaExponente-1;
  const division=resta/i
  const multiplicacion= saving*division
  const multiplicacion2=saving*exponente
  const resta2=multiplicacion-multiplicacion2
  const result=parseInt(resta2)

  
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
  const result=parseInt(resta2)
  
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
