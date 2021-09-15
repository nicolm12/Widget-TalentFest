// education 

const valorTol = (edad, optionTime, saving) => {
 let a = 18 - edad
 let b = saving * a
 if(optionTime === "firstOption"){
     return b * 12 
 }else {
    return  b
 }
};

const valorSem = (valor) => {
  return valor / 10
}


const valorMinMonth = (edad, saving) => {
      const n = 18 - edad
      const i = 0.00165159
      const suma = ((Math.pow(1+i), n*12))-1;
      const result = parseInt(saving * (suma/i))
       return result
}

const valorMinYear = (edad, saving) => {
    const n = 18 - edad
    const i = 0.00165159
    const suma = ((Math.pow(1+i), n))-1;
    const result = parseInt(saving * (suma/i))
     return result
}


export {valorTol, valorSem, valorMinMonth, valorMinYear}
