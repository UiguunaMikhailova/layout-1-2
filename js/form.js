let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.open-popup');
let closePopup = document.querySelector('.popup__close');
let popup__piece1 = document.querySelector('.popup__piece1');
let popup__piece2 = document.querySelector('.popup__piece2');
let popup__btn = document.querySelector('.popup__btn');
let popup__progress1 = document.querySelector('.popup__progress--step-first');
let popup__progress2 = document.querySelector('.popup__progress--step-second');

function popupPieceToogle() {
	popup__piece1.classList.toggle('dsplnone');
	popup__piece2.classList.toggle('dsplnone');
}

function popupToogle() {
	popup.classList.toggle('popup--active');
}

popup__btn.onclick = popupPieceToogle;

popup__progress1.onclick = popupPieceToogle;
popup__progress2.onclick = popupPieceToogle;

openPopup.onclick = popupToogle;
closePopup.onclick = popupToogle;