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
	//start slider Swiper//
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
	//end slider Swiper//
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

	//start form-1 in secyion 'send'//
	const compliteBanner = document.querySelector('.send__complite--popup');
	const compliteForm = document.querySelector('.send--popup');
	const compliteText = document.querySelector('.send__connection');
	const compliteCont = document.querySelector('.send__container');

	const getForm1 = document.querySelector('#form-1'),

		getLabelName1 = getForm1.querySelector('#label-name-1'),
		getLabelContact1 = getForm1.querySelector('#label-contact-1'),

		getInputName1 = getForm1.querySelector('#input-name-1'),
		getInputContact1 = getForm1.querySelector('#input-contact-1'),

		getButton1 = getForm1.querySelector('#button-1');

	getForm1.addEventListener('submit', (event) => {
		event.preventDefault();
		checkInputs1();
		sendMail1();
	});

	function sendMail1 () {
		let error = checkInputs1(getForm1);
		if (error === 0) {
			getForm1.classList.add('sending');
			compliteBanner.classList.add('active');
			// body.classList.add('lock');
		} else {
			// alert('Заполните обязательные поля');
		}
	}

	function checkInputs1 () {
		let error = 0;

		if (getInputName1.value === '' || getInputName1.value === null) {
			addError(getLabelName1, 'Заполните это поле');
			error++;
		} else {
			console.log(getInputName1.value);
			addComplete(getLabelName1, '');
		}

		if (getInputContact1.value === '' || getInputContact1.value === null) {
			addError(getLabelContact1, 'Заполните это поле');
			error++;
		}
		else {
			addComplete(getLabelContact1, '');
		}

		return error;
	}
	//end form-1 in secyion 'send'//
	//start form-2 in secyion 'send'//

		const getForm2 = document.querySelector('#form-2'),

		getLabelName2 = getForm2.querySelector('#label-name-2'),
		getLabelContact2 = getForm2.querySelector('#label-contact-2'),

		getInputName2 = getForm2.querySelector('#input-name-2'),
		getInputContact2 = getForm2.querySelector('#input-contact-2'),

		getButton2 = getForm2.querySelector('#button-2');

	getForm2.addEventListener('submit', (event) => {
		event.preventDefault();
		checkInputs2();
		sendMail2();
	});

	function sendMail2 () {
		let error = checkInputs2(getForm2);
		if (error === 0) {
			getForm2.classList.add('sending');
			compliteBanner.classList.add('active');
			compliteForm.classList.add('active');
			compliteText.classList.add('active');
			compliteCont.classList.add('active');
			// body.classList.add('lock');
		} else {
			// alert('Заполните обязательные поля');
		}
	}

	function checkInputs2 () {
		let error = 0;

		if (getInputName2.value === '' || getInputName2.value === null) {
			addError(getLabelName2, 'Заполните это поле');
			error++;
		} else {
			console.log(getInputName2.value);
			addComplete(getLabelName2, '');
		}

		if (getInputContact2.value === '' || getInputContact2.value === null) {
			addError(getLabelContact2, 'Заполните это поле');
			error++;
		}
		else {
			addComplete(getLabelContact2, '');
		}

		return error;
	}
	//end form-2 in secyion 'send'//

	//start add arrore for all forms
	function addError (input, message) {
		input.classList.add('error');
		input.classList.remove('complete');

		input.insertAdjacentHTML("beforeEnd", '<span class="form__massage"></span>');

		const labelElement = input.parentElement;
		const messageError = labelElement.querySelector('.form__massage');
		messageError.innerText = message;

	}

	function addComplete (input, message) {
		input.classList.add('complete');
		input.classList.remove('error');

		input.insertAdjacentHTML("beforeEnd", '<span class="form__massage"></span>');

		const labelElement = input.parentElement;
		const messageError = labelElement.querySelector('.form__massage');
		messageError.innerText = message;
	}
	//end add arrore for all forms


});
