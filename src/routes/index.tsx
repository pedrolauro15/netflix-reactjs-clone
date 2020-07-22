import React from 'react';
import { BrowserRouter as Rotuer, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import UserlistPage from '../Pages/UserlistPage';

const Routes: React.FC = () => {
	return (
		<Rotuer>
			<Route path="/" exact component={LoginPage} />

			<Route path="/browse" component={UserlistPage} />

			<Route path="/home" component={HomePage} />
		</Rotuer>
	);
};

export default Routes;
