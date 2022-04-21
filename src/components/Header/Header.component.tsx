import React from 'react';
import './Header.styles.scss';
import logo from '../../assets/images/Sama good.png';
import cart from '../../assets/images/cart.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="header-container">
			<img className="logo" src={logo} alt="" onClick={() => navigate('/')} />
			<div className="nav-links">
				<ul className="nav-links-ul">
					<Link className="li" to={'/shop'}>
						Shop
					</Link>
					<Link className="li" to={'/contact'}>
						Contact
					</Link>
					<Link className="li" to={'/signIn'}>
						SignIn
					</Link>
					<div className="cart-container">
						<span className="count">0</span>
						<img className="cart-icon" src={cart} alt="" />
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Header;
