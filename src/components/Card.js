
export default function Card(props){
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
    <div className="element__image-container">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className= "element__trash" type="button"></button>
    </div>
    <div className= "element__header">
      <h2 className= "element__title">{props.card.name}</h2>
      <div className="element__like">
        <button className= "element__like-button" type="button"></button>
        <span className="element__likes-counter">{props.card.likes.length}</span>
      </div>
    </div>
    </li>
  )
}