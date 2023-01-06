let elForm = document.querySelector('.js-form')
let elInput = document.querySelector('.js-input')
let elWrap = document.querySelector('.js-wrap')
let elResult = document.querySelector('.js-result')
// let elWrapBtn = document.querySelector('.wrap-btn')

elForm.addEventListener('submit', evt => {
  evt.preventDefault();

  if(elInput.value == 1) {
    elResult.textContent = 'POSITIVE Content'
    document.querySelector('.wrap-btn1').classList.add('font')
    document.querySelector('.wrap-btn2').classList.remove('font')
    document.querySelector('.wrap-btn3').classList.remove('font')
  }
  else if(elInput.value == 2) {
    elResult.textContent = 'NEGATIVE Content'
    document.querySelector('.wrap-btn1').classList.remove('font')
    document.querySelector('.wrap-btn2').classList.add('font')
    document.querySelector('.wrap-btn3').classList.remove('font')
  }
  else if(elInput.value == 3) {
    elResult.textContent = 'NEUTRAL Content'
    document.querySelector('.wrap-btn1').classList.remove('font')
    document.querySelector('.wrap-btn2').classList.remove('font')
    document.querySelector('.wrap-btn3').classList.add('font')
  }
  else {
    alert('Incorrect index was written')
  }

  elInput.value = ''
})

elWrap.addEventListener('click', evt => {
  if(evt.target.matches('.wrap-btn1')) {
    elResult.textContent = 'POSITIVE Content'
    document.querySelector('.wrap-btn1').classList.add('font')
    document.querySelector('.wrap-btn2').classList.remove('font')
    document.querySelector('.wrap-btn3').classList.remove('font')
  }
  if(evt.target.matches('.wrap-btn2')) {
    elResult.textContent = 'NEGATIVE Content'
    document.querySelector('.wrap-btn1').classList.remove('font')
    document.querySelector('.wrap-btn2').classList.add('font')
    document.querySelector('.wrap-btn3').classList.remove('font')
  }
  if(evt.target.matches('.wrap-btn3')) {
    elResult.textContent = 'NEUTRAL Content'
    document.querySelector('.wrap-btn1').classList.remove('font')
    document.querySelector('.wrap-btn2').classList.remove('font')
    document.querySelector('.wrap-btn3').classList.add('font')
  }
})