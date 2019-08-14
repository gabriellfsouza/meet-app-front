import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import AddEdit from '../pages/AddEdit';
import Details from '../pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignOut} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/details" isPrivate component={Profile} />
      <Route path="/add" isPrivate component={AddEdit} />
      <Route path="/edit" isPrivate component={Details} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
