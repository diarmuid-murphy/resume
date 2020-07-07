import React from 'react';

function Education(props) {
	return (
		<div className="row">
			<div className="col-12">
				<h2>Education</h2>
				<ul>
					{props.education.map((degree) => (
						<li>{degree.degree} - <a href={degree.website}>{degree.school}</a></li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Education;