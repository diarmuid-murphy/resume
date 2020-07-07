import React from 'react';

function Experience(props) {
	return (
		<div className="row">
			<div className="col-12">
				<h2>Experience</h2>
				{props.experience.map((job) => (
					<>
					<h3>{job.role}, <a href={job.website} target="_blank">{job.company}</a></h3>
					
					<p><em>{job.years}</em></p>

					<ul>{job.duties.map((duty) => (<li>{duty}</li>))}</ul>
					</>
				))}
			</div>
		</div>
	);
}

export default Experience;