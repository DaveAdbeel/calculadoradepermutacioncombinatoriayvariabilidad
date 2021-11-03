const container_combinatorial = document.getElementById('container_combinatorial');
const btn_option_2 = document.getElementById('btn-option-2');
const arrow_combinatorial = document.getElementById('arrow_combinatorial');
const number_N = document.getElementById('input-combinatorial_N');
const number_K = document.getElementById('input-combinatorial_K');
const btn_combinatorial = document.getElementById('btn-combinatorial');
const result_combinatorial = document.getElementById('result_combinatorial');




btn_combinatorial.addEventListener('click', getCombinatorial);
btn_option_2.addEventListener('click', show);
arrow_combinatorial.addEventListener('click', hide);


function show() {
container_combinatorial.style.zIndex = '1';

}

function hide() {
  container_combinatorial.style.zIndex = '-1';
  
  }
function getCombinatorial() {

    let N = number_N.value;
    let K = number_K.value;
    let aux = N - K;

    //COMPROBACIONES
    if (N <= K || N <= 1 || K >= N || K <= 0) {
      alert("Ingrese un numero valido");
      result_variability.innerHTML = "";
      //COMPROBACIONES
  
      //CALCULO
    } else {
      for (let index = N - 1; index > 1; index--) {
        N = N * index;
      }
  
      for (let index = K - 1; index > 1; index--) {
        K = K * index;
      }
  
      for (let index = aux - 1; index > 1; index--) {
        aux = aux * index;
        let result = N / (K * aux);
        
     result_combinatorial.innerHTML = result;
     
      }

    }
  }
  