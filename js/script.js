document.body.onload = function (){
  setTimeout(function() {
    var preloader = document.getElementById('preloader')
    if (!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 1000);
}



// Модальне вікно 

document.addEventListener("DOMContentLoaded", function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});

//