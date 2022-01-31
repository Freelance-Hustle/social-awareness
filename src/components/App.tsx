import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Routes from '../routes/Routes';
import './App.scss';

const App: React.FC = (): JSX.Element => {
	return (
		<div className="app-wrapper">
			<Router>
				<Header />
				<Routes />
				<Footer />
			</Router>
		</div>
	);
};

export default App;
