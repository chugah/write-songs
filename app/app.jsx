import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Routes from 'Routes';

// Load Foundaiton
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory} routes={Routes} />,
    document.getElementById('app')
);