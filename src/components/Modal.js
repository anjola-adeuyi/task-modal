function Modal ({onClick, text}) {
    return (
        <div className="modal">
            <p> {text} </p>
            <button className="btn btn--alt" onClick={onClick}>Cancel</button>
            <button className="btn" onClick={onClick}>Confirm</button>
        </div>
    )
}

export default Modal;