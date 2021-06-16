'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenu = document.querySelector('.menu-drop');
	const burgerMenuList = document.querySelector('.menu-burger__container');
	const burgerMenuLink = document.querySelectorAll('.menu-drop__link');
	const body = document.querySelector('body');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenuList.classList.add('active');
		} else {
			body.classList.remove('lock');
			burgerMenuList.classList.remove('active');
		}
	});

	burgerMenuList.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-drop__link')){
			burgerIcon.classList.remove('active');
			burgerMenuList.classList.remove('active');
			body.classList.remove('lock');
		}
	});
////////end menu burger//////////
//////////////////////start scrollMagic//////////////////////
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// start scene
	new ScrollMagic.Scene({
		triggerElement: "",
		duration: '0',
		triggerHook: 0.1,
		offset: 10,
		reverse: true})
	.setClassToggle(".header__inner", "active") // add class toggle
	.addIndicators({
			name: 'anim scene',
			colorTrigger: 'black',
			colorStart: 'red',
			colorEnd: 'green'
		})
	.addTo(controller);
	//end scene
//////////////////////end scrollMagic//////////////////////
/////////start main screen tabs
const tabBtn = document.querySelectorAll('.about__tab-title');
const tabList = document.querySelectorAll('.about__tab-list');
const tabParent = document.querySelector('.about__questions-wrapper');

function hideTab() {
	tabBtn.forEach(item => {
		item.classList.remove('active');
	});
	tabList.forEach(item => {
		item.classList.remove('active');
	});
}

function showTabs (i = 1){
	tabList[i].classList.add('active');
}

hideTab();
showTabs();

tabParent.addEventListener('click', (event) => {
	const target = event.target;
	event.preventDefault();
	if (target && target.classList.contains('about__tab-title')) {
		tabBtn.forEach((item, i) => {
			if (target == item) {
				hideTab();
				showTabs(i);
			}
		});
	}
});
/////////end main screen tabs
////////////////////start slider Swiper////////////////////
let mySwipeRealIndex;
	let mySwiper = new Swiper('.feedback__container', {
		containerModifierClass: 'feedback__container', 
		wrapperClass: 'feedback__wrapper',
		slideClass: 'feedback__item',
		parallax: false,
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 30,
		freeMode: false,
		centeredSlides: true,
		simulateTouch: true,
		autoHeight: false,
		navigation: {
			nextEl: '.feedback__button-next',
			prevEl: '.feedback__button-prev',
		},
	});
////////////////////end slider Swiper////////////////////

});
