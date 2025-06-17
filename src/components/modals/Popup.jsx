import './Popup.css';
import { useEffect, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { ScoreContext } from '../../contexts/ScoreContext';

const Popup = () => {
	const { handleClosePopup } = useContext(ModalContext);
	const scoreContext = useContext(ScoreContext);

	useEffect(() => {
		const handleEscClose = (evt) => {
			if (evt.key === 'Escape') {
				if (document.activeElement) {
					document.activeElement.blur();
				}
				handleClosePopup();
			}
		};

		document.addEventListener('keydown', handleEscClose);
		return () => {
			document.removeEventListener('keydown', handleEscClose);
		};
	}, [handleClosePopup]);

	const handleOverlayClick = (evt) => {
		if (evt.target.classList.contains('popup')) {
			handleClosePopup();
		}
	};

	const handlePlayAgain = () => {
		scoreContext.setScore([]);
		handleClosePopup();
	};

	return (
		<div className='popup' onClick={handleOverlayClick}>
			<div className='popup__container'>
				<button className='popup__close-button' onClick={handleClosePopup} />
				<h2 className='popup__title'>Parabéns! Você achou todos os objetos!</h2>
				<p className='popup__text'>Você quer brincar de novo?</p>
				<div className='popup__button-container'>
					<button className='popup__button' onClick={handlePlayAgain}>
						Sim
					</button>
					<button className='popup__button' onClick={handleClosePopup}>
						Não
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
