const menu = document.querySelector('.menu')
const menuList = document.querySelector('.menu-screen')
const close = document.querySelector('.close')
menu.addEventListener('click', function() {
  menuList.classList.add('active')
})
close.addEventListener('click', function() {
  menuList.classList.remove('active')
})


let links = document.querySelectorAll('.link-container a')
console.log(links)
links.forEach(link => {
  link.addEventListener('click', function() {
    menuList.classList.remove('active')
  })
})
