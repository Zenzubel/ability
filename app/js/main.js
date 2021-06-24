'use strict';
document.addEventListener('DOMContentLoaded', () => {
	//start menu burger//////////
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
	//end menu burger//////////

	//start dinamic inn social
	const social = document.querySelector('.header__social-media').innerHTML;
	const menuBurger = document.querySelector('.menu-burger__container');

	const socElem = document.createElement('div');
	socElem.classList.add('menu-burger__dinamic');
	socElem.innerHTML = social;

	menuBurger.append(socElem);
	//end dinamic inn social

	//start scroll header
	const header = document.querySelector('.header__inner');
	const headerLogo = document.querySelector('.header__logo-box');
	const headerPopup = document.querySelector('.header__questons');

	window.addEventListener('scroll', function(e) {
	const position = window.scrollY;

		if (position > 0) {
			header.classList.add('active');
			headerLogo.classList.add('active');
			headerPopup.classList.add('active');
		}

		if (position <= 0) {
			header.classList.remove('active');
			headerLogo.classList.remove('active');
			headerPopup.classList.remove('active');
		}
	});
	//end scroll header

	//start main screen tabs
	// const tabBtn = document.querySelectorAll('.about__tab-title');
	// const tabList = document.querySelectorAll('.about__tab-list');
	// const tabParent = document.querySelector('.about__questions-wrapper');

	// function hideTab() {
	// 	tabBtn.forEach(item => {
	// 		item.classList.remove('active');
	// 	});
	// 	tabList.forEach(item => {
	// 		item.classList.remove('active');
	// 	});
	// }

	// function showTabs (i = 1){
	// 	tabList[i].classList.add('active');
	// }

	// hideTab();
	// showTabs();

	// tabParent.addEventListener('click', (event) => {
	// 	const target = event.target;
	// 	event.preventDefault();
	// 	if (target && target.classList.contains('about__tab-title')) {
	// 		tabBtn.forEach((item, i) => {
	// 			if (target == item) {
	// 				hideTab();
	// 				showTabs(i);
	// 			}
	// 		});
	// 	}
	// });
	//end main screen tabs
	//start slider Swiper////////////////////
		let mySwiper = new Swiper('.feedback__cont', {
			containerModifierClass: 'feedback__cont', 
			wrapperClass: 'feedback__wrap',
			slideClass: 'feedback__item',
			parallax: false,
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 180,
			freeMode: false,
			centeredSlides: true,
			simulateTouch: true,
			autoHeight: false,
			navigation: {
				nextEl: '.feedback__button-next',
				prevEl: '.feedback__button-prev',
			},
		});
	//end slider Swiper////////////////////
	//start custom-auto-height
	const getContainerHeight = document.querySelector('.feedback__cont'),
		getSlideActive = getContainerHeight.querySelector('.swiper-slide-active'),
		getContentHeight = getContainerHeight.querySelectorAll('.feedback__content');

	getContainerHeight.style.cssText = `height: ${getSlideActive.firstElementChild.offsetHeight}px;`;

	function autoHeight(item, i) {
		let height = item[i].offsetHeight + 'px';
		getContainerHeight.style.cssText = `height: ${height};`;
	}
	// autoHeight(getContentHeight, 0);

	mySwiper.on('slideChange', function () {
		let realIndex = mySwiper.activeIndex;
		autoHeight(getContentHeight, realIndex);
	});
	//start custom-auto-height

});
