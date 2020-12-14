import Slider from './slider'
import elements from './elements'
import Preloader from '../preloader/preloader'

// capturing the DOM
let sliderText = document.querySelector('#slider-text')
let sliderTitle = document.querySelector('#slider-title')
let sliderSubtitle = document.querySelector('#slider-subtitle')
let sliderImage = document.querySelector('#slider-image')
// animation
let textContent = document.querySelector('#slider-text-content')
// arrows
let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')

let slider = new Slider({
  elements: elements,
  animationFunc: function(element) {

    textContent.classList.add('hide')
    sliderImage.classList.add('hide')
    setTimeout(() => {
      sliderTitle.innerHTML = element.title
      sliderText.innerHTML = element.text
      sliderSubtitle.innerHTML = element.subtitle
      sliderImage.src = element.image
      textContent.classList.remove('hide')
      sliderImage.classList.remove('hide')
    }, 500);


  },
  speed: 3000
})

slider.play()

leftArrow.addEventListener('click', slider.prev)
rightArrow.addEventListener('click', slider.next)

const imagePaths = elements.map(img => img.image)

Preloader.preloadImages({
  images: imagePaths,
  completed: () => {
    document.querySelector('.controls').style.display = 'block'
  }
})


