/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-20 11:54:46
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import Home from './routes/home/home'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
        <Redirect path='/' to='/login'></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
