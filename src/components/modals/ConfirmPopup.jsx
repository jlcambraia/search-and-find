import "./ConfirmPopup.css";
import { useEffect, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ScoreContext } from "../../contexts/ScoreContext";

const ConfirmPopup = () => {
  const modalContext = useContext(ModalContext);
  const scoreContext = useContext(ScoreContext);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        if (document.activeElement) {
          document.activeElement.blur();
        }
        modalContext.handleClosePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [modalContext.handleClosePopup]);

  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("popup")) {
      modalContext.handleClosePopup();
    }
  };

  const handlePlayAgain = () => {
    scoreContext.setScore([]);
    modalContext.handleClosePopup();
  };

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          onClick={modalContext.handleClosePopup}
        />
        <h2 className="popup__title">Tem certeza que quer começar de novo?</h2>
        <div className="popup__button-container">
          <button className="popup__button" onClick={handlePlayAgain}>
            Sim
          </button>
          <button
            className="popup__button"
            onClick={modalContext.handleClosePopup}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
