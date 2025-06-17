import "./Element.css";
import { useContext } from "react";
import { ScoreContext } from "../../../../contexts/ScoreContext";
import { ModalContext } from "../../../../contexts/ModalContext";
import Popup from "../../../modals/Popup";
import FoundPopup from "../../../modals/FoundPopup";

const Element = ({ item, objectsLength }) => {
  const scoreContext = useContext(ScoreContext);
  const modalContext = useContext(ModalContext);
  const popup = <Popup />;
  const foundPopup = <FoundPopup />;

  const handleElementClick = () => {
    if (scoreContext.score.includes(item.content)) {
      modalContext.handleOpenFoundPopup(foundPopup);
      return;
    }

    scoreContext.setScore([...scoreContext.score, item.content]);

    if (scoreContext.score.length === objectsLength - 1) {
      modalContext.handleOpenPopup(popup);
    }
  };

  return (
    <>
      <li
        className="main__object"
        style={{
          position: "absolute",
          top: item.top,
          left: item.left,
          padding: "10px",
        }}
        onClick={handleElementClick}
      >
        {item.content}
      </li>
    </>
  );
};

export default Element;
