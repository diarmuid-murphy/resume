import React from 'react';

function Address(props) {
	return (
		<address>
			<p>
				{props.address.city}, {props.address.stateShort}<br />
				<a href={'tel:' + props.address.phone} target="_blank">{props.address.phone}</a><br />
				<a href={props.address.linkedIn} target="_blank">{props.address.linkedIn}</a><br />
				<a href={props.address.github} target="_blank">{props.address.github}</a><br />
				<a href={props.address.email} target="_blank">{props.address.email}</a>
			</p>
			<h1 className="text-left">{props.address.name}</h1>
		</address>
	);
}

export default Address;