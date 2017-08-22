import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Home from 'Home';
import About from 'About';
import Examples from 'Examples';

export default (
	<Route path="/" component={Main}>
		<Route  path="about" component={About} />
		<Route  path="examples" component={Examples} />
		<IndexRoute component={Home} />		
	</Route>
);