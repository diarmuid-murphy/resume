import React from 'react';

function Address(props) {
	return (
		<address>
			<h1>{props.address.name}</h1>
			<h2 className="tagline"><em>Fullstack Javascript Web Developer</em></h2>

			<p>
				<strong><em>{props.address.city}, {props.address.stateShort}</em></strong><br />
				<a href={'tel:' + props.address.phone} target="_blank" rel="noopener noreferrer">{props.address.phone}</a><br />
				<a href={props.address.linkedIn} target="_blank" rel="noopener noreferrer">{props.address.linkedIn}</a><br />
				<a href={props.address.github} target="_blank" rel="noopener noreferrer">{props.address.github}</a><br />
				<a href={'mailto:' + props.address.email} target="_blank" rel="noopener noreferrer">{props.address.email}</a>
			</p>
			
			{!props.isRendered ?
				<button className="btn btn-primary btn-sm pull-right" onClick={props.reveal}>Reveal private details for 3 minutes</button> :
				<span className="pull-right text-secondary">Private details will remain visible for {props.timeLeft} mins.</span>}
		</address>
	);
}

export default Address;