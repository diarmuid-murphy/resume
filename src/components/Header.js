import React from 'react';
// import Address from './Address';

// class Header extends React.Component {
// 	// constructor(props) {
// 	// 	super(props);

// 	// 	this.state = {
// 	// 		address: props.address
// 	// 	};
// 	// }
	
// 	render() {
// 		return (
// 			<div className="row">
// 				<div className="col-12 text-right">
// 					{this.props.children}
// 				</div>
// 			</div>
// 		);
// 	}
// }

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