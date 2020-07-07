import React from 'react';

function Address(props) {
	return (
		<address>
			<p>
				{props.address.city}, {props.address.stateShort}<br />
				<a href={'tel:' + props.address.phone} target="_blank" rel="noopener noreferrer">{props.address.phone}</a><br />
				<a href={props.address.linkedIn} target="_blank" rel="noopener noreferrer">{props.address.linkedIn}</a><br />
				<a href={props.address.github} target="_blank" rel="noopener noreferrer">{props.address.github}</a><br />
				<a href={props.address.email} target="_blank" rel="noopener noreferrer">{props.address.email}</a>
			</p>
			<h1 className="text-left">
				{props.address.name + ' '}

				{!props.isRendered ? <button className="btn btn-primary btn-sm" onClick={props.reveal}>Reveal private details for 1 minute</button> : null}
			</h1>
		</address>
	);
}

export default Address;