import React, { Component } from 'react';

var ws_img_path = 'images/header.jpg';
var pea_pod_img_path = 'images/pea-pod.jpg';

class Footer extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="grid-x grid-padding-x align-center">
					<img src={pea_pod_img_path} className="footer-img"  alt="Pea Pod Logo"/>
					<img src={ws_img_path} className="footer-img"  alt="Write Songs Logo"/>
				</div>
				<div className="grid-x grid-padding-x align-center">
					<p className="copyright">&#169; 2017</p>
				</div>
			</div>
		);
	}
}

export default Footer;