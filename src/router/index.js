import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '@/views/layout/Index';
import Login from '@/views/Login';
import Register from '@/views/register/Index';
import AuthRouter from '@/views/auth/AuthRouter';
const Router = () => {
	return (
		<HashRouter>
			<Switch>
			  <Route component={Register} exact path="/register" />
				<Route component={Login} exact path="/login" />
				<AuthRouter path="/" component={Layout} />
			</Switch>
		</HashRouter>
	);
};

export default Router;
