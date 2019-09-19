import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from '../views/login';
import Home from '../views/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
