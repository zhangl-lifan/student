/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-20 17:27:34
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from '../views/login/index'
import Home from '../views/home/index';
import Table from '../views/table/index';
import Dean from '../views/dean';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/table" exact component={Table} />
        <Route path="/dean" exact component={Dean} />
        <Redirect path='/' to='/login'></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
