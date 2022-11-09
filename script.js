'use strict';

const modal = document.querySelector('.modal');
const overly = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModal = () => {
  modal.classList.remove('hidden');
  overly.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
  overly.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal)
overly.addEventListener('click', closeModal)

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})