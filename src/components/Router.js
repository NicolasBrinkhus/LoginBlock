import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginApp from './LoginApp';
import Login from './Login';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LoginApp}></Route>
			<Route exact path="/login" component={Login}></Route>
			<Route component={NotFound}></Route>
		</Switch>
	</BrowserRouter>
);

export default Router;