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
};
const valorMin = (edad, optionTime,monthlySavings) => {
    const n = 18 - edad
    const i = 0.00165159
    let A= monthlySavings;

    if(optionTime === "firstOption"){

      let suma= (Math.pow((1 + i), n))-1;
      let result = A*(suma/i)
      return parseInt(result);
      
    }
}



export {valorTol, valorSem, valorMin}
