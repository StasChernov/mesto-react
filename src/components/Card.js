export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <button className="element__trash" type="button"></button>
      </div>
      <div className="element__header">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" type="button"></button>
          <span className="element__likes-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
