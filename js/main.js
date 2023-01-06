let elForm = document.querySelector('.js-form')
let elInput = document.querySelector('.js-input')
let elWrap = document.querySelector('.js-wrap')
let elResult = document.querySelector('.js-result')
// let elWrapBtn = document.querySelector('.wrap-btn')

elForm.addEventListener('submit', evt => {
  evt.preventDefault();

  if(elInput.value == 1) {
    elResult.textContent = 'POSITIVE Content'
  }
  else if(elInput.value == 2) {
    elResult.textContent = 'NEGATIVE Content'
  }
  else if(elInput.value == 3) {
    elResult.textContent = 'NEUTRAL Content'
  }
  else {
    alert('Incorrect index was written')
  }

  elInput.value = ''
})

elWrap.addEventListener('click', evt => {
  if(evt.target.matches('.wrap-btn1')) {
    elResult.textContent = 'POSITIVE Content'
    evt.target.matches('.wrap-btn1')
  }
  if(evt.target.matches('.wrap-btn2')) {
    elResult.textContent = 'NEGATIVE Content'
  }
  if(evt.target.matches('.wrap-btn3')) {
    elResult.textContent = 'NEUTRAL Content'
  }
})