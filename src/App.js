import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/DeepCast/global';
import DeepCastTheme from 'components/theme/DeepCast';
import firestoreDb from 'db';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Product from 'pages/product';
import Contact from 'pages/contact';
import Edit from 'pages/edit';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DeepCastTheme}>
        <Router>
          <React.Fragment>
            <Switch>
              {/* <Route
                exact
                path="/"
                render={props => <Home {...props} db={firestoreDb} />}
              /> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/edit/:id" component={Edit} />
              {/* <Route component={NotFound404} /> */}
            </Switch>
            <GlobalStyle />
          </React.Fragment>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
