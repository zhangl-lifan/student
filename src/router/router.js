/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-20 15:12:49
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from '../views/login/IndexPage';
import Home from '../views/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
