import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/details" component={Profile} />
      <Route path="/add" component={AddEdit} />
      <Route path="/edit" component={Details} />
    </Switch>
  );
}
