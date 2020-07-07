import React from 'react';
import Logo from '../assets/logo.png';

function Header(props) {
	return (
		<div className="row">
			<div className="col-md-4 logo">
				<img className="img img-fluid" src={Logo} alt="" />
			</div>
			<div className="col-md-8 text-right">
				{props.children}
			</div>
		</div>
	);
}

export default Header;