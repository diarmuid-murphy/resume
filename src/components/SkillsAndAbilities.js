import React from 'react';

function SkillsAndAbilities(props) {
	return (
		<div className="row">
			<div className="col-12">
				<h2>Skills & Abilities</h2>
				<ul>
					<li>{props.skillsAndAbilities.role}
						<ul>
							<li>Back end - {props.skillsAndAbilities.backEnd.join(', ')}</li>
							<li>Front end - {props.skillsAndAbilities.frontEnd.join(', ')}</li>
							<li>Databases - {props.skillsAndAbilities.databases.join(', ')}</li>
							<li>Other tools - {props.skillsAndAbilities.tools.join(', ')}</li>
						</ul>
					</li>
					{props.skillsAndAbilities.other.map((item) => <li key={item}>{item}</li>)}
				</ul>
			</div>
		</div>
	);
}

export default SkillsAndAbilities;