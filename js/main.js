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

var userFeed = new Instafeed({
  get: 'user',
  userId: '218267472',
  clientId: '2f64fa45f48b49418b5987ace6f3267c',
  accessToken: '218267472.2f64fa4.596a08ba3cb048e4bae91126934eda3e',
  resolution: 'standard_resolution',
  template: '<div class="caja-slider col-md-4 col-lg-3"> <figure> <a href="{{link}}" target="_blank"> <div class="caja-slider-img-container"> <div class="caja-slider-img img-work" style="background-image: url({{image}});"></div> </div> <figcaption class="fig-year">{{caption}}</figcaption> </a> </figure> </div>',
  sortBy: 'most-recent',
  limit: 20,
  links: false,
});
userFeed.run();
