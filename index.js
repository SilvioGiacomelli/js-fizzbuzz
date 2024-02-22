///Costanti///
const limit = 100;
///Scacchiera///
const scacchiera = document.getElementById("scacchiera");

for(let i = 1; i <= limit; i++){
  
  let classMultiple = "";
  let classTre = "";
  let classCinque = "";
  
  if((i % 3 === 0) && (i % 5 === 0)){
    classMultiple = "viola";
  
    scacchiera.innerHTML += 
  `
  <div class="box ${classMultiple}">Fizzbuzz</div>
  
  `
  } else if (i % 3 === 0){
    classTre = "tre";
    
    scacchiera.innerHTML += 
  `
  <div class="box ${classTre}">Fizz</div>
  
  `
  } else if (i % 5 === 0){
    classCinque = "cinque";
    
  scacchiera.innerHTML += 
  `
  <div class="box ${classCinque}">Buzz</div>
  
  `
  } else {
    classBox = "box";
    scacchiera.innerHTML += 
  `
  <div class="box ${classBox}">${i}</div>
  `
  }
  
}