var overlay = document.getElementById('overlay');

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

const navToggle = document.querySelector('.menu-button')

navToggle.addEventListener('click', _ => {
  document.body.classList.toggle('nav-is-open')
  var hamburger = document.querySelector('.hamburger')
  hamburger.classList.toggle('equis')
})


