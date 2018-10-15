import React from 'react';
import '../sass/_navegation.scss';

const Navegation = ({ history }) => {
	return (
		<nav className="nav">
			<ul className="nav_items">
				<li onClick={() => history.push('/login')}>Sign In</li>
				<li onClick={() => history.push('/')}>Sign Out</li>
			</ul>
		</nav>
	);
}

export default Navegation;