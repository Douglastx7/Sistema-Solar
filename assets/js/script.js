 // Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



//      ===========      ADD INFORMAÇÃO AO PASSAR O MOUSE
$('.icone-de-informacao').click(function(e) {
  e.preventDefault();
});

 $('.icone-de-informacao').on('mouseenter', function(){
  var itemId = $(this).attr('href');
  $(this).addClass('active-opacity');
  $(itemId).addClass('active-opacity');
 });

 $('.icone-de-informacao').on('mouseleave', function(){
  var itemId = $(this).attr('href');
  $(this).addClass('active-opacity');
  $(itemId).removeClass('active-opacity');
});


//           =========  ADD IMAGEM GRANDE AO CLICAR NA IMAGEM PEQUENA
$('.img-circulos').click(function(e) {
  e.preventDefault();
  var itemId = $(this).attr('href');

  $(".caixa").addClass('desativar');

  $('.img-circulos').removeClass('active-img-grande');
  $(this).addClass('active-img-grande');
  $(itemId).addClass('active-img-grande');
});


//           =========  REMOVER A IMAGEM GRANDE AO CLICAR NO ICONE X d
$('.icone-de-fechar').click(function(e) { 
  e.preventDefault();
  $(".caixa").removeClass('desativar');
  $('.item').removeClass('active-img-grande');
});


// =============================================== SCROLL SUAVE
$('.menu-nav a[href^="#"]').click(function(e){
   e.preventDefault();
   var id = $(this).attr('href'),
       menuHeight = $('.menu-nav').innerHeight();
       targetOffset = $(id).offset().top;

       $('html, body').animate({
         scrollTop: targetOffset - menuHeight
       },500);
});


// =============================================== SCROLL PARA O INICIO
$('.voltar-top, .logo').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500)
});


// =============================================== SCRIPT HEADER  - SCROLL 

window.addEventListener("scroll", function(){
  var header = document.querySelector(".menu-nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})

    