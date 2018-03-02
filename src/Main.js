import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Planets from './Planets';
import NoMatch from './NoMatch';

const Main = props => (
  <main className="page-content">
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/planets" component={Planets} />
    <Route component={NoMatch} />
  </Switch>
  </main>
)

export default Main