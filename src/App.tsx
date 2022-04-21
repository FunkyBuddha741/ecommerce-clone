import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.components';
import Shop from './pages/Shop/Shop.components';
import Contacts from './pages/Contacts/Contacts.components';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/contact" element={<Contacts />} />
			</Routes>
		</div>
	);
}

export default App;
