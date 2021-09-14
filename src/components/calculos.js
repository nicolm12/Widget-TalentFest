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

const valorMin = (edad, optionTime) => {
    const n = 18 - edad
    const i = 0.00165159
    if(optionTime === "firstOption"){
      
    }
}



export {valorTol, valorSem}