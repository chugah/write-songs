import React, { Component } from 'react';
import Brand from 'Brand';
import Navigation from 'Navigation';
import Footer from 'Footer';

class Main extends Component {
	render() {
		return (
			<div>
				<Brand />
				<Navigation />
				<div className="grid-x grid-padding-x align-center">
					<div>
						{this.props.children}
					</div>
				</div>	
				<Footer />			
			</div>
		);
	}
}

export default Main;