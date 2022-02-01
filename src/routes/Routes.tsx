import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesComponent: React.FC = () => {
	return (
		<div className="body">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Register />} />
			</Routes>
		</div>
	);
};

export default RoutesComponent;
