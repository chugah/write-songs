import React, { Component } from 'react';

var headerimg_path = 'images/write-songs-six.jpg';

class Brand extends Component {
	render() {
		return (
			<div className="grid-x grid-padding-x">
				<div className="cell small-12 flex-container flex-dir-column large-flex-dir-row">
					<img src={headerimg_path} className="write-songs"  alt="Write Songs"/>
				</div>
			</div>
		);		
	}
}

export default Brand;