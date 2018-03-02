import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PlanetsList from './PlanetsList';
import Planet from './Planet';
import NoMatch from './NoMatch';

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    return fetch('https://swapi.co/api/planets')
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json.results
      })
      .then(planets => {
        this.setState({ planets: planets });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/planets" render={() => 
        <PlanetsList planets={this.state.planets} />
        } />
        <Route exact path="/planets/:id" component={Planet} />
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default Planets