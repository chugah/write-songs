import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class Navigation extends Component {
	render() {
		return (
			<div className="grid-x grid-padding-x align-center">
				<div className="top-bar nav-border">
					<ul className="menu">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Publications</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact Us</Link></li>
						<li>
						<Dropdown>
		                	<DropdownTrigger>More</DropdownTrigger>
		                		<DropdownContent>
		                    		<ul className="dropdown menu">
		                        		<li><a href="#">Resources</a></li>
		                        		<li> <a href="#">Testimonials</a></li>
		                        		<li><a href="#">Songwriter FAQ</a></li>
		                    		</ul>
		                		</DropdownContent>
		            	</Dropdown>
		            	</li>
            		</ul>
				</div>		
			</div>	
		);
	}
}

export default Navigation;
