let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.open-popup');
let closePopup = document.querySelector('.popup__close');

function popupToogle() {
	popup.classList.toggle('popup--active');
}

openPopup.onclick = popupToogle;
closePopup.onclick = popupToogle;