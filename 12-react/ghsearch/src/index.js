import React, { Component } from 'react'; // This is reacct Preact.
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

import './index.css';

import 'preact/devtools';

const Routes = (
	<Router>
		<div>
			<Route exact path="/" component={ Home } />
			<Route exact path="/search" component={ Search } />
			<Route exact path="/details/:username" component={ Profile } />
		</div>
	</Router>
)

ReactDOM.render(Routes, document.body);