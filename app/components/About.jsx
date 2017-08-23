import React, { Component } from 'react';

var patnpete_early = 'images/patnpete-early.gif';
var patnpete_mid = 'images/patnpete-mid.jpg'
var patnpete_later = 'images/patnpete-later.jpg';

class About extends Component {
	constructor (props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div className="grid-x grid-padding-x align-center">
					<div className="cell large-2 align-self-middle description img-spacer">
						<img src={patnpete_early} />
					</div>
					<div className="cell large-2 align-self-middle description img-spacer">
						<img src={patnpete_mid} />
					</div>
					<div className="cell large-2 align-self-middle description img-spacer">
						<img src={patnpete_later} />
					</div>
				</div>
				<div className="grid-x grid-padding-x align-center">
				 	<div className="cell large-8">	
				 		<div className="description">
					 		<p className="text-justify para-border">Peter and Pat Luboff have 40 years of experience in the music business. As a team, they have extensive
					 		insight into the music business and have significant contacts with fellow songwriters, producers, music publishers and record label 
					 		executives.
					 		</p>
					 		<p className="text-justify para-border">In 1979, they created the Monday night workshops at the National Academy of Songwriters where they 
					 		taught the art of songwriting. Peter also taught an advanced songwriting course at UCLA extension for thriteen years. 
					 		</p>
					 		<p className="text-justify">When TAXI opened its doors in 1992, Peter was one of the first screeners and, along with Pat, they have judged 
					 		for various songwriting contests: Just Plain Folks, John Lennon, and Great American Song.
					 		</p>
					 	</div>
				 	</div>
				</div>
			</div>
		);
	}
}

export default About;