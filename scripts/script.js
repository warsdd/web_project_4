// wrappers
  // edit button
const editPopupEl = document.querySelector(".popup__type_edit-profile");
const editFormEl = editPopupEl.querySelector("#edit_profile_form");

  // add button
const addCardModalWindow = document.querySelector(".popup__type_add-card");
const addCardForm = document.querySelector("#create_card_form");


// buttons and other DOM elements
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");

const cardTemplate = document.querySelector("#card-template");
const addCardButton = document.querySelector(".places__add-button");
const closeAddCardModal = document.querySelector("#create_card__close_button");

const nameInput = document.querySelector("#name");
const occupationInput = document.querySelector("#occupation");

const imageTitleInput = document.querySelector("#title");
const imageLinkInput = document.querySelector("#image-link");

const name = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");

const imagePopup = document.querySelector("#image-popup");


// form data, edit button
function handleFormOpen() {
  editPopupEl.classList.add("popup_opened");
  nameInput.value = name.textContent;
  occupationInput.value = occupation.textContent;
}

function handleFormClose() {
  editPopupEl.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInputValue = nameInput.value;
  occupationInputValue = occupationInput.value;

  name.textContent = nameInputValue;
  occupation.textContent = occupationInputValue;

  handleFormClose();
}

// create new card button
function handleCardModalOpen() {
  addCardModalWindow.classList.add("popup_opened");
}

function handleCardModalClose() {
  addCardModalWindow.classList.remove("popup_opened");
}

function handleCardModalSubmit(evt) {
  evt.preventDefault();

  data = {
    name: imageTitleInput.value,
    link: imageLinkInput.value
  }
  const card = createCard(data);
  document.querySelector(".places__grid").prepend(card);
  handleCardModalClose();
}

function openEditModal() {

}

// event listeners
  // edit button
editButton.addEventListener("click", handleFormOpen);
closeButton.addEventListener("click", handleFormClose); 
editFormEl.addEventListener("submit", handleFormSubmit);

// add button
addCardButton.addEventListener("click", handleCardModalOpen);
closeAddCardModal.addEventListener("click", handleCardModalClose);
addCardForm.addEventListener("submit", handleCardModalSubmit);

// addCardButton.addEventListener("click", () => toggleModalWindow(addCardModalWindow));


// card functions
function handleLikeIcon() {

}

function handlePreviewPicture() {

}

function createCard(data) {

  // create card items
  const card = cardTemplate.content.cloneNode(true).querySelector(".places__item");
  let cardImage = card.querySelector(".places__image");
  cardImage.style.backgroundImage =    `url('${data.link}')`;
  card.querySelector(".places__title").textContent = data.name;

  // adding event listeners
  card.querySelector(".places__delete-button").addEventListener("click", () => {card.remove()});

  const likeButton = card.querySelector(".places__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked")
  });

  cardImage.addEventListener("click", () => {
    // selecting element that will hold an image
    imagePopup.querySelector("image").style.backgroundImage= // set url to the card's link
    imagePopup.querySelector("title").textContent= // set url to the card's title
    handleShowImagePopup()
  })

  // return the created card
  return card;
}

function renderCard(data, node) {
  // get card
  const card = createCard(data);
  // render card
  document.querySelector(node).append(card);
}

initialCards.forEach(place => {
  renderCard(place, ".places__grid");
})