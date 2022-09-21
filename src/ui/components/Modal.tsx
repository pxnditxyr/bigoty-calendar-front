import '../styles/modal.css';

interface ModalProps {
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  isLocked?: boolean;
  onClose: () => void;
}

export const Modal = ( { children, isOpen, isLocked = false,onClose } : ModalProps ) => {

  const onModalAroundClick = ( event : React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
    if ( !isLocked ) {
      onClose();
    }
  };

  return (
    <>
      {
        isOpen && (
        <div className="modal">
          <div className="modal__around" onClick={ onModalAroundClick }></div>
          <div className="modal__content">
            <button className="modal__close__button" onClick={ onClose }>
              <span className="modal__close__icon"> &times; </span>
            </button>
            { children }
          </div>
        </div>
        )
      }
    </>
  );
}
