import './FoundPopup.css';
import { useEffect, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const FoundPopup = () => {
	const { handleClosePopup } = useContext(ModalContext);

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
		if (evt.target.classList.contains('found-popup')) {
			handleClosePopup();
		}
	};

	return (
		<div className='found-popup' onClick={handleOverlayClick}>
			<div className='found-popup__container'>
				<button
					className='found-popup__close-button'
					onClick={handleClosePopup}
				/>
				<h2 className='found-popup__title'>Ops!</h2>
				<p className='found-popup__text'>
					Você já achou esse objeto! Tente novamente!
				</p>
			</div>
		</div>
	);
};

export default FoundPopup;
