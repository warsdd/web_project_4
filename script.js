let editFormEl = document.querySelector(".popup__form");

let modalEl = document.querySelector(".popup");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__close-button");

let nameInput = document.querySelector("#name");
let occupationInput = document.querySelector("#occupation");

let name = document.querySelector(".popup__input_name");
let occupation = document.querySelector(".profile__description");

console.log(editButton);

function handleFormOpen() {
  modalEl.classList.remove("popup_closed");
  nameInput.value = name.textContent;
  occupationInput.value = occupation.textContent;
}

function handleFormClose() {
  modalEl.classList.add("popup_closed");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInputValue = nameInput.value;
  occupationInputValue = occupationInput.value;

  name.textContent = nameInputValue;
  occupation.textContent = occupationInputValue;

  handleFormClose();
}

editButton.addEventListener("click", handleFormOpen);

closeButton.addEventListener("click", handleFormClose);

editFormEl.addEventListener("submit", handleFormSubmit);
