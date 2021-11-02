const container_variability = document.getElementById('container_variability');
const btn_option_3 = document.getElementById('btn-option-3');
const arrow_variability = document.getElementById('arrow_variability');
const number_variability_N = document.getElementById('input-variability_N');
const number_variability_K = document.getElementById('input-variability_K');
const btn_variability = document.getElementById('btn-variability');
const result_variability = document.getElementById('result_variability');




btn_variability.addEventListener('click', getVariability);
btn_option_3.addEventListener('click', show);
arrow_variability.addEventListener('click', hide);


function show() {
container_variability.style.zIndex = '1';

}

function hide() {
  container_variability.style.zIndex = '-1';
  
  }







 function getVariability() {
  let N = number_variability_N.value;
  let K = number_variability_K.value;

  K = N - K;

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
    var result = N / K;
    return result_variability.innerHTML = result;
}
}


 


