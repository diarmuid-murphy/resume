import React from 'react';
import Logo from '../assets/logo.png';
import LogoBlurry from '../assets/logo-blurry.png';

function Header(props) {
	return (
		<div className="row">
			<div className="col-md-4 logo">
				{/* <img className="img img-fluid" src={props.isRendered ? Logo : LogoBlurry} alt="" /> */}
				{props.isRendered ? 
					<img className="img img-fluid" src={Logo} alt={'Headshot for ' + props.name} /> :
					<img className="img img-fluid" src={LogoBlurry} alt={'Headshot for ' + props.name} />}
			</div>
			<div className="col-md-8 address">
				{props.children}
			</div>
		</div>
	);
}

export default Header;