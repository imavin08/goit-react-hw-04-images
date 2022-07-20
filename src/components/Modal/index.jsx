import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './Modal.module.css';

function Modal({ image, onModalClose, tag }) {
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  return (
    <div className={css.overlay} onClick={handleBackDropClick}>
      <div className={css.modal}>
        <img className={css.image} src={image} alt={tag} />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
