import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

const Router = (): any => (
  <BrowserRouter>
    <Switch>
      <Route path="/books" component={App} />
      <Redirect from="/" to="/books" />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
