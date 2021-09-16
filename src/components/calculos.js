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




// pension

   
const percentYear = (slider, table) => {
  let result; 
  table.forEach((option) => {
    if(option.age <= 16){
      if(slider <= 16 ){
         result = 54
      } 
    }else if( option.age >= 27){
      if(slider >= 27 ){
        result = 75
      }
    }else{
      if(option.age == slider){
          result = option.rate
        }
      }
    })
    return result/100
  };



const percent = (optionFactor, salary, porcentaje) => {
  if(optionFactor === "firstOption"){
    const result = salary-(porcentaje * salary * 0.7)
    return result
}else {
  const result = salary-(porcentaje * salary * 1)
    return result
 }
}

const minCoverageDisease = (percentResult) => {
  return percentResult *120
} 

const minCoverageAccident = (percentResult) => {
  return percentResult *320
} 


const secureRisk = (minCoverageAccident, savingsYear, table) => {
    const a = minCoverageAccident * 0.0000346293;
    const b = parseInt(savingsYear) + 21;

     let resultFactor;
       table.forEach(option => {
       if( b >= 54){
         resultFactor = 9
       }else if(b === option.year){
         resultFactor = option.factor
        }
     })

    const c = resultFactor * 981
    const d = a + c
    return parseInt(d)
}




export {valorTol, valorSem, valorMinMonth, valorMinYear, percent, percentYear, minCoverageDisease, minCoverageAccident, secureRisk}
