import React, { Component } from 'react';

var open_weather_map_path = 'images/open-weather-map-alt.jpg';
var react_path = 'images/react-alt.jpg';

class About extends Component {
	render() {
		return (
			<div>
				<div className="columns small-12">
					<h1 className="page-title">About NWS</h1>
					<p>The National Weather Service (NWS) is an application built using React. 
					This application provides data about the current weather in a US city.</p>
					<p>Here are some of the tools put to work:</p>
				</div>
				<div className="columns large-6 content">
					<div id="block-1">
						<img src={react_path}/>
						<p className="about-p">React makes it painless to create interactive UIs. 
						Design simple views for each state in your application, and React will 
						efficiently update and render the right components when your data changes.</p>
						<a className="primary hollow button" href="https://facebook.github.io/react" target="_blank">Learn More</a>
					</div>
				</div>
				<div className="columns large-6 content">
					<div id="block-2">
						<img src={open_weather_map_path}/>
						<p className="about-p">Open Weather Map is an online service that provides weather data, 
						including current weather data, forecasts, and historical data to the developers of web 
						services and mobile applications.</p>
						<a className="alert hollow button" href="http://openweathermap.org" target="_blank">Learn More</a>
					</div>
				</div>
				<div className="grid-x grid-padding-x align-center">
				 	<div className="cell large-4">
				 		<p className="text-justify">We are platinum-selling hit songwriters with recordings by Patti LaBelle, Bobby Womack, Snoop Dogg, 
				 		   Michael Peterson, and the Norman Luboff Choir. <em>Body Language</em>, a song co-written with Harold
				 		   Payne, is the title song of the musical written by Emmy-winning producer Michael Ajakwe, Jr. Our music
				 		   is published through Pea Pod Music that we own.
				 		</p>
				 	</div>
				  	<div className="cell large-4">
				  		<p className="text-justify">We began to teach songwriting in 1979 with the creation of the Monday night workshops at the National
				  		   Academy of Songwriters. Pete taught an advanced songwriting course at UCLA extension for thriteen years.
				  		   When TAXI opened its doors in 1992, Pete became one of the first screeners and Pat Joined him later. We
				  		   have taught workshops from coast to coast.
				  		</p>
				  	</div>
				</div>
			</div>
		);
	}
}

export default About;