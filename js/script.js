'use strict';

function buttonClicked(buttonName){
  console.log(buttonName + ' został kliknięty');
}

const buttonTest = document.getElementById('button-test');

buttonTest.addEventListener('click', function(){
  buttonClicked('Test button');
});





