export default function PopupWithForm(props) {
  return (
  <div className={`popup popup_type_${props.type} ${props.isOpen && 'popup_opened'}`}>
    <div className="popup__content popup__content_type_edit-profile">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className={`popup__form popup__form_type_${props.type}`} name={props.type} noValidate>
        {props.children}
        <button type="submit" className="popup__save">{props.textButton}</button>
      </form>
    </div>
  </div>
  )
}