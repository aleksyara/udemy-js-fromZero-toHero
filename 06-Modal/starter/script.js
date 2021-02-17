'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log('openModel', btnOpenModal);

let closeHandle = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

let openHandle = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  // console.log(btnOpenModal[i].textContent);
  // 1. Open Modal when bttn cliecked

  //    btnOpenModal[i].addEventListener('click', function () {
  //     //    console.log('bttn clicked');
  //        modal.classList.remove('hidden');
  //        overlay.classList.remove('hidden');
  //     });
  // Make code above more DRY
  btnOpenModal[i].addEventListener('click', openHandle);

// 2. Close modal functionality
overlay.addEventListener('click', closeHandle);
btnCloseModal.addEventListener('click', closeHandle);

document.addEventListener("keydown", function (e){
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains('hidden')){
        closeHandle();
    }
})
