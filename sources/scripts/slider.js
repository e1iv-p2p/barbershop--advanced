const advantages = document.querySelectorAll('.advantages__item')
const advantagesToggles = document.querySelectorAll('.advantages__toggles button')

for (let i = 0; i < advantagesToggles.length; i++) {
  advantagesToggles[i].addEventListener('click', function() {
    if (!advantages[i].classList.contains('slider__item--current')) {

      document.querySelector('.advantages__item.slider__item--current').classList.remove('slider__item--current')
      const currentToggle = document.querySelector('.advantages__toggles .slider__toggle--current')
      currentToggle.classList.remove('slider__toggle--current')
      advantages[i].classList.add('slider__item--current')
      advantagesToggles[i].classList.add('slider__toggle--current')
    }
  })
}
