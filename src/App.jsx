import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Popup from './components/modals/Popup';
import FoundPopup from './components/modals/FoundPopup';
import ConfirmPopup from './components/modals/ConfirmPopup';

import { ScoreContext } from './contexts/ScoreContext';
import { ModalContext } from './contexts/ModalContext';

import { useState } from 'react';

function App() {
	const [score, setScore] = useState([]);
	const [popup, setPopup] = useState(null);
	const [foundPopup, setFoundPopup] = useState(null);
	const [confirmPopup, setConfirmPopup] = useState(null);

	const handleOpenPopup = (popup) => {
		setPopup(popup);
	};

	const handleOpenFoundPopup = (popup) => {
		setFoundPopup(popup);
	};

	const handleOpenConfirmPopup = (popup) => {
		setConfirmPopup(popup);
	};

	const handleClosePopup = () => {
		setPopup(null);
		setFoundPopup(null);
		setConfirmPopup(null);
	};

	return (
		<>
			<ModalContext.Provider
				value={{
					popup,
					foundPopup,
					handleOpenPopup,
					handleOpenFoundPopup,
					handleOpenConfirmPopup,
					handleClosePopup,
				}}
			>
				<ScoreContext.Provider value={{ score, setScore }}>
					<Header />
					<Main />
					<Footer />
					{popup && <Popup />}
					{foundPopup && <FoundPopup />}
					{confirmPopup && <ConfirmPopup />}
				</ScoreContext.Provider>
			</ModalContext.Provider>
		</>
	);
}

export default App;
