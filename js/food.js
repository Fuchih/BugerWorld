const all = document.querySelector('#all')
const burgers = document.querySelector('#burgers')
const sandwiches = document.querySelector('#sandwiches')
const bundle = document.querySelector('#bundle')
const btnArray = [all, burgers, sandwiches, bundle]
//Buttons color control ---------------
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener('click', function () {
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].classList.remove('active')
    }
    this.classList.add('active')
  })
}
// Product filtering -------------------
const foodArray = document.querySelectorAll('.food')
const burgerArray = document.querySelectorAll('.burger')
const sandwichArray = document.querySelectorAll('.sandwich')
const bundleArray = document.querySelectorAll('.bundle')

all.onclick = function () {
  foodArray.forEach((food) => (food.style.display = 'block'))
}

burgers.onclick = function () {
  foodArray.forEach((food) => (food.style.display = 'block'))
  sandwichArray.forEach((sandwich) => (sandwich.style.display = 'none'))
  bundleArray.forEach((bundle) => (bundle.style.display = 'none'))
}

sandwiches.onclick = function () {
  foodArray.forEach((food) => (food.style.display = 'block'))
  burgerArray.forEach((burger) => (burger.style.display = 'none'))
  bundleArray.forEach((bundle) => (bundle.style.display = 'none'))
}

bundle.onclick = function () {
  foodArray.forEach((food) => (food.style.display = 'block'))
  burgerArray.forEach((burger) => (burger.style.display = 'none'))
  sandwichArray.forEach((sandwich) => (sandwich.style.display = 'none'))
}
