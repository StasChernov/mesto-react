export default function ImagePopup(props){
  return (
    <div className={`popup popup_type_image ${props.card.link && 'popup_opened'}`}>
      <div className="popup__content popup__content_type_image">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt="" />
        <h2 className="popup__image-title">{props.card.name}</h2>
      </div>
    </div>
  )
}