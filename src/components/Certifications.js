import React from 'react';

function Certifications(props) {

	// 	{/* cert.image ? <li><a href={cert.image}>{cert.name}</a></li> : <li>{cert.name}</li> */}

	return (
		<div className="row">
			<div className="col-12">
				<h2>Certifications</h2>
				<ul>
					{props.certifications.map((cert) => (
						<li key={cert.name}>{cert.image ? <a href={cert.image} target="_blank" rel="noopener noreferrer">{cert.name}</a> : cert.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Certifications;