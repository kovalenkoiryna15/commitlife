import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Graph from './graph';

export default function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Graph />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
