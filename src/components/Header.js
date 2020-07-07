import React from 'react';

function Header(props) {
	return (
		<div className="row">
			<div className="col-12 text-right">
				{props.children}
			</div>
		</div>
	);
}

export default Header;