import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Product from 'pages/product';
import Contact from 'pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/contact" component={Contact} />

            {/* <Route component={NotFound404} /> */}
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
