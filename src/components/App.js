import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: null,
    name: null,
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ link: null, name: null });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title="Редактировать профиль"
        type="edit-profile"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_full-name"
            id="input-full-name"
            type="text"
            placeholder="ФИО"
            name="user_full_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error input-full-name-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_about"
            id="input-about"
            type="text"
            placeholder="О себе"
            name="user_about"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error input-about-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        type="add-place"
        textButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_place-title"
            id="input-place-title"
            type="text"
            name="place_title"
            required
            minLength="2"
            maxLength="30"
            placeholder="Название"
          />
          <span className="popup__error input-place-title-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_place-link"
            id="input-place-link"
            type="URL"
            name="place_link"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="popup__error input-place-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        type="avatar-edit"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_avatar-edit"
            id="input-avatar-edit"
            type="URL"
            placeholder="Ссылка на картинку"
            name="avatar_edit"
            required
          />
          <span className="popup__error input-avatar-edit-error"></span>
        </label>
      </PopupWithForm>

      <Footer />
    </div>
  );
}
