import './Main.css';
import Element from './components/Element/Element';
import { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';
import { ModalContext } from '../../contexts/ModalContext';
import { objectConfig } from '../../config/objectsConfig';
import ConfirmPopup from '../modals/ConfirmPopup';

const Main = () => {
	const scoreContext = useContext(ScoreContext);
	const modalContext = useContext(ModalContext);
	const objectsLength = objectConfig.length;

	const confirmPopup = <ConfirmPopup />;

	const validateScore = () => {
		if (scoreContext.score.length === 0) {
			return 'Você ainda não achou nenhum objeto!';
		}

		if (scoreContext.score.length === 1) {
			return 'Você já achou 1 objeto!';
		}

		if (
			scoreContext.score.length >= 2 &&
			scoreContext.score.length < objectsLength
		) {
			return `Você já achou ${scoreContext.score.length} objetos!`;
		}

		return `Parabéns, você achou todos os ${scoreContext.score.length} objetos!`;
	};

	const handlePlayAgain = () => {
		modalContext.handleOpenConfirmPopup(confirmPopup);
	};

	return (
		<main className='main'>
			<div className='main__scoreboard-button-container'>
				<div className='main__scoreboard'>Placar: {validateScore()}</div>
				<button className='main__restart-button' onClick={handlePlayAgain}>
					Começar de novo?
				</button>
			</div>

			<ul className='main__list-container'>
				{objectConfig.map((item) => (
					<Element key={item.id} item={item} objectsLength={objectsLength} />
				))}
			</ul>
		</main>
	);
};

export default Main;
