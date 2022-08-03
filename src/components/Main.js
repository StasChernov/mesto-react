import React from "react";
import api from "../utils/Api";
import Card from "./Card";

export default function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  const [userName, setUserName] = React.useState("Станислав");
  const [userDescription, setUserDescription] = React.useState("Студент");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка: ${err.status}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
          <button
            className="profile__avatar-edit"
            type="button"
            onClick={onEditAvatar}
          ></button>
          <div className="profile__info">
            <h1 className="profile__full-name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
