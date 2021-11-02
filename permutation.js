'use strict'; 

const input_permutation = document.getElementById("input-permutation");
const btn_permutation = document.getElementById("btn-permutation");
const btn_option_1 = document.getElementById("btn-option-1");
//PERMUTACION


//OTRAS COSAS
const result = document.getElementById("result");
const arrow_back = document.getElementById("arrow-back");
const container = document.getElementById("container_permutation");
//OTRAS COSAS


//ADD EVENT LISTENER
btn_permutation.addEventListener("click", getFactorial)
btn_option_1.addEventListener("click", showPermutation);
arrow_back.addEventListener("click", hidePermutation);



//ADD EVENT LISTENER


//OPCION 1
function showPermutation() {
  container.style.zIndex = '1';
  container.style.display = '';


};

function hidePermutation(){
  container.style.display = 'none';

};


function getFactorial() {
  let p = input_permutation.value;

  if (p === "" || p < 0) {
    alert("Ingrese un numero valido");

  
  }else{
    for (let index = p - 1; index > 1; index--) {
      p = p * index;

      result.innerHTML = p;
    }
  }

  
  
} 