import "./FoundPopup.css";
import { useEffect, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const FoundPopup = () => {
  const modalContext = useContext(ModalContext);

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

  return (
    <div className="found-popup" onClick={handleOverlayClick}>
      <div className="found-popup__container">
        <button
          className="found-popup__close-button"
          onClick={modalContext.handleClosePopup}
        />
        <h2 className="found-popup__title">Ops!</h2>
        <p className="found-popup__text">
          Você já achou esse objeto! Tente novamente!
        </p>
      </div>
    </div>
  );
};

export default FoundPopup;
