import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';

const Routes: React.FC = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/login" component={Login} />
			</Switch>
			<Footer />
		</div>
	);
};

export default Routes;
