// wrappers

// cards container
const card = document.querySelector("#card-template");
//is this the correct class?

  // edit form
const editPopupEl = document.querySelector(".popup_edit_profile");
const editFormEl = editPopupEl.querySelector("#edit_profile_form");

  // add cards
const addCardModalWindow = document.querySelector(".popup_add_card");
const addCardForm = document.querySelector("#create_card_form");

// buttons and other DOM elements
  //edit button
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");

  // add card
const cardTemplate = document.querySelector("#card-template");
const addCardButton = document.querySelector(".profile__add-button");
const closeAddCardModal = document.querySelector("#create_card__close_button");

const nameInput = editFormEl.querySelector("#name");
const occupationInput = editFormEl.querySelector("#occupation");

const imageTitleInput = addCardForm.querySelector("#title");
const imageLinkInput = addCardForm.querySelector("#image-link");
// the above should be queried as addCardForm but this returns null, investigate

const name = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");


// image preview
const imagePopup = document.querySelector("#image-popup");
const imagePopupClose = imagePopup.querySelector("#img__close_button");


// open image preview
function handleModalOpen(node) {
  node.classList.add("popup_opened");
}

function handleModalClose(node) {
  node.classList.remove("popup_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  nameInputValue = nameInput.value;
  occupationInputValue = occupationInput.value;

  name.textContent = nameInputValue;
  occupation.textContent = occupationInputValue;

  handleModalClose(editPopupEl);
}

function handleCardModalSubmit(evt) {
  evt.preventDefault();

  data = {
    name: imageTitleInput.value,
    link: imageLinkInput.value
  }
  const card = createCard(data);
  document.querySelector(".places__grid").prepend(card);

  handleModalClose(addCardModalWindow);
}

// event listeners
  // edit button
editButton.addEventListener("click", handleEditFormOpen);

// using a closure to have access to the node which is outside of `this` scope.
editFormCloseButton.addEventListener("click", function(){
  handleModalClose(editPopupEl);
});

editFormEl.addEventListener("submit", handleEditFormSubmit);

// add button
addCardButton.addEventListener("click", function(){
  handleModalOpen(addCardModalWindow);
});

closeAddCardModal.addEventListener("click", function(){
  handleModalClose(addCardModalWindow);
});

addCardForm.addEventListener("submit", handleCardModalSubmit);

// image preview
imagePopupClose.addEventListener("click", function() {
  handleModalClose(imagePopup);
});



// card functions
function createCard(data) {

  // create card items
  const card = cardTemplate.content.cloneNode(true).querySelector(".places__item");
  let cardImage = card.querySelector(".places__image");
  cardImage.style.backgroundImage = `url('${data.link}')`;
  card.querySelector(".places__title").textContent = data.name;


  // adding event listeners
  card.querySelector(".places__delete-button").addEventListener("click", () => {card.remove()});

  const likeButton = card.querySelector(".places__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked")
  });

  cardImage.addEventListener("click", () => {

    // selecting element that will hold an image
    imagePopup.querySelector("#image-popup_img").style.backgroundImage= `url('${data.link}')`;
    imagePopup.querySelector("#caption").textContent= data.name;
    handleModalOpen(imagePopup);
  })

  // return the created card
  return card;
}

// rendering the card
function renderCard(data, node) {
  // get card
  const card = createCard(data);
  // render card
  document.querySelector(node).append(card);
}

initialCards.forEach(place => {
  renderCard(place, ".places__grid");
})
