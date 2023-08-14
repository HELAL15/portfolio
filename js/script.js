// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}


$('.owl-carousel').owlCarousel({
	loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:3
			},
			1000:{
					items:1
			}
	}
})


document.getElementById("downloadButton").addEventListener("click", function () {
	document.getElementById("cvLink").click();
});

document.getElementById("downloadButton2").addEventListener("click", function () {
	document.getElementById("cvLink2").click();
});