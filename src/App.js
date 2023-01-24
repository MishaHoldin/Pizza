import React, { useState } from 'react';
import './App.css';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Notfound from './pages/Notfound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
export const SearchContext = React.createContext()



function App() {
	const [searchValue, setSearchValue] = useState()
	return (
		<div className="wrapper">
			<SearchContext.Provider value={{searchValue, setSearchValue }}>
			<Header />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path='' element={<Home/>} />
						<Route path='/Cart' element={<Cart />} />
						<Route path='/pizza/:id' element={<FullPizza />} />
						<Route path='*' element={<Notfound />} />
					</Routes>
				</div>
			</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App ;

