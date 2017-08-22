import React, { Component } from 'react';

var welcome_img_path = 'images/welcome-alt.jpg';

class Home extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="grid-x grid-padding-x align-center-middle text-center">
				 	<div className="cell large-6">
				 		<img src={welcome_img_path} className="welcome-img"  alt="Welcome"/>
				 	</div>
				</div>
				<div className="grid-x grid-padding-x align-center">
				 	<div className="cell large-8">
						<div className="description">
							<p>Pat and Pete Luboff started Write Songs because of their love of working with songwriters. 
							The goal of Write Songs is to help you write the best songs you can by sharing what 
							Pat and Pete have learned over their careers as professional songwriters.
							</p>
							<hr />
							<p>Through Write Songs, you will be given the tools to improve how you express yourself
							with melody and lyric, pursue songwriting as a career should that be your aspiration, 
							and just have fun while developing the music in the creative flow.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;