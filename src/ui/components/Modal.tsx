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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="flex flex-col gap-4">
              { children }
            </div>
          </div>
        </div>
        )
      }
    </>
  );
}
